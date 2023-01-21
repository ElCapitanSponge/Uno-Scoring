import { Injectable } from '@angular/core'
import { Card } from '../interfaces/card'
import { Storage } from '../utilities/storage'

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  public cards: Card[]

  constructor(private storage: Storage) {
    this.cards = this.loadCards()
  }

  private loadCards(): Card[] {
    let result: Card[] | null = this.storage.getItem('cards')
    if (result === null)
      return []
    return result
  }

  public addCard(card: Card) {
    if (this.cards.length === 0)
      this.storage.createItem('cards', this.cards)
    card.id = this.cards.length + 1
    this.storage.updateItem('cards', this.cards.concat(card))
  }

  public updateCard(card: Card) {
    this.cards.forEach(c => {
      if (c.id === card.id)
        c = card
    })
    this.storage.updateItem('cards', this.cards)
  }

  public removeCard(card: Card) {
    this.storage.updateItem('cards', this.cards.filter(c => c.id !== card.id))
  }
}