import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimeNGConfig, MessageService } from 'primeng/api';
import { Person } from '../../../../interfaces/person';
import { PeopleService } from '../../../../service/people.service';
import { Helper } from '../../../../utilities/helper';
import { MessageTypes } from '../../../../utilities/message-types';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.sass']
})
export class ViewComponent implements OnInit {
  private player_id: number

  public player: Person | undefined

  constructor(private primengConfig: PrimeNGConfig, private messageService: MessageService, private peopleService: PeopleService, private route: ActivatedRoute, public helper: Helper) {
    this.primengConfig.ripple = true
    this.player_id = this.getPlayerId()
    this.validatePlayerId()
  }

  ngOnInit(): void {
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

  private playerGet(): void {
    let tmp: Person | undefined = this.peopleService.getPerson(this.player_id)
    if (typeof tmp === 'undefined') {
      this.messageService.add({ severity: MessageTypes.warning, summary: 'WARNING', detail: 'Unable to locate the desired player' })
      this.goBack()
    } else {
      this.player = {
        id: tmp.id,
        name: tmp.name
      }
    }
  }

  public goBack(): void {
    this.helper.goTo('/players')
  }

  public edit(): void {
    this.helper.goTo('/players/' + this.player_id + '/edit')
  }
}
