import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimeNGConfig, MessageService } from 'primeng/api';
import { Person } from '../../../../interfaces/person';
import { PeopleService } from '../../../../service/people.service';
import { Helper } from '../../../../utilities/helper';
import { MessageTypes } from '../../../../utilities/message-types';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {
  private player_original: Person | undefined
  private player_id: number

  public player: Person | undefined

  constructor(private primengConfig: PrimeNGConfig, private messageService: MessageService, private peopleService: PeopleService, private route: ActivatedRoute, public helper: Helper) {
    this.primengConfig.ripple = true
    this.player_id = this.getPlayerId()
    this.validatePlayerId()
  }

  ngOnInit() {
    this.peopleService.refreshPeople()
    this.playerGet()
  }

  private getPlayerId(): number {
    let val = this.route.snapshot.paramMap.get('id')
    return (val === null) ? -1 : parseInt(val)
  }

  private validatePlayerId(): void {
    if (this.player_id <= 0) {
      this.messageService.add({ severity: MessageTypes.error, summary: 'ERROR', detail: 'Unable to determine desired player' })
      this.goBack()
    }
  }

  private playerGet() {
    let tmp: Person | undefined = this.peopleService.getPerson(this.player_id)
    if (typeof tmp === 'undefined') {
      this.messageService.add({ severity: MessageTypes.warning, summary: 'WARNING', detail: 'Unable to locate the desired player' })
      this.goBack()
    } else {
      this.player = {
        id: tmp.id,
        name: tmp.name
      }
      this.player_original = {
        id: tmp.id,
        name: tmp.name
      }
    }
  }

  public update(): void {
    if (typeof this.player === 'undefined' || typeof this.player_original === 'undefined') {
      this.messageService.add({ severity: MessageTypes.error, summary: 'ERROR', detail: 'Failed player validation' })
      this.helper.goTo('/players')
    }
    if (this.player!.name === this.player_original!.name) {
      this.messageService.add({ severity: MessageTypes.info, summary: 'INFO', detail: 'Player details have not changed' })
      this.helper.goTo('/players')
    } else {
      let people: Person[] | undefined = this.peopleService.getPeopleName(this.player_original!.name)
      if (typeof people === 'undefined') {
        this.messageService.add({ severity: MessageTypes.error, summary: 'ERROR', detail: 'Unable to determine player to update' })
        this.helper.goTo('/players')
      }
      people = this.peopleService.getPeopleName(this.player!.name)
      if (typeof people !== 'undefined') {
        this.messageService.add({ severity: MessageTypes.error, summary: 'ERROR', detail: 'Player already exists with the desired name' })
        this.reset()
      } else {
        this.peopleService.updatePerson(this.player!)
        this.peopleService.refreshPeople()
        people = this.peopleService.getPeopleName(this.player!.name)
        if (typeof people !== 'undefined')
          this.messageService.add({ severity: MessageTypes.success, summary: 'SUCCESS', detail: 'Updated the players details' })
        else
          this.messageService.add({ severity: MessageTypes.error, summary: 'ERROR', detail: 'Failed to update the player' })
        this.helper.goTo('/players')
      }
    }
  }

  public reset(): void {
    if (typeof this.player_original === 'undefined')
      this.player = undefined
    else
      this.player = {
        id: this.player_original!.id,
        name: this.player_original!.name
      }
  }

  public goBack(): void {
    this.helper.goTo('/players')
  }

  public getOriginalName(): string {
    if (this.player_original?.name === undefined)
      return 'UNKOWN PLAYER'
    return this.player_original!.name
  }
}
