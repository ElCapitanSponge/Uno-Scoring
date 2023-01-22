import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimeNGConfig, MessageService } from 'primeng/api';
import { Card, Card_for_type } from 'src/app/interfaces/card';
import { UnoTypes } from 'src/app/interfaces/uno-types';
import { UnoTypesService } from 'src/app/service/uno-types.service';
import { Helper } from 'src/app/utilities/helper';
import { MessageTypes } from 'src/app/utilities/message-types';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.sass']
})
export class ViewComponent implements OnInit {
  private uno_id: number
  public uno_game: UnoTypes | undefined

  constructor(private primengConfig: PrimeNGConfig, private messageService: MessageService, private unoService: UnoTypesService, private route: ActivatedRoute, public helper: Helper) {
    this.primengConfig.ripple = true
    this.uno_id = this.getUnoId()
    this.validateUnoId()
  }

  ngOnInit() {
    this.unoService.refreshTypes()
    this.getUno()
  }

  private getUnoId(): number {
    let val = this.route.snapshot.paramMap.get('id')
    return (val === null) ? -1 : parseInt(val)
  }

  private validateUnoId(): void {
    if (this.uno_id <= 0) {
      this.messageService.add({ severity: MessageTypes.error, summary: 'ERROR', detail: 'Unable to determine desired uno game type' })
      this.goBack()
    }
  }

  private getUno(): void {
    let tmp: UnoTypes | undefined = this.unoService.getType(this.uno_id)
    if (typeof tmp === 'undefined') {
      this.messageService.add({ severity: MessageTypes.warning, summary: 'WARNING', detail: 'Unable to locate the desired uno game type' })
      this.goBack()
    } else {
      this.uno_game = {
        id: tmp.id,
        name: tmp.name,
        cards: tmp.cards,
        card_list: undefined
      }
      this.uno_game.card_list = this.getUnoCards()
      this.helper.devLog('getUno', 'uno_game', this.uno_game)
      this.checkUnoCards()
    }
  }

  private checkUnoCards(): void {
    if (this.uno_game?.cards.length !== this.uno_game?.card_list?.length) {
      this.messageService.add({ severity: MessageTypes.warning, summary: 'WARNING', detail: 'Unable to retrieve the cards for this uno game' })
      this.goBack()
    }
  }

  private getUnoCards(): Card[] {
    let cards: Card[] = []
    if (typeof this.uno_game !== 'undefined' && typeof this.uno_game.cards !== 'undefined')
      cards = this.unoService.getCards(this.uno_game.cards)
    return cards
  }

  public goBack(): void {
    this.helper.goTo('/settings')
  }

  public edit(): void {
    this.helper.goTo('/settings/' + this.uno_id + '/edit')
  }
}
