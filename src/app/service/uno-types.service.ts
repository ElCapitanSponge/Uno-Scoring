import { Injectable } from '@angular/core'
import { Card, Card_for_type } from '../interfaces/card'
import { UnoTypes } from '../interfaces/uno-types'
import { Storage } from '../utilities/storage'
import { StorageTypes } from '../utilities/storage-types'

@Injectable({
  providedIn: 'root'
})
export class UnoTypesService {
  public types: UnoTypes[]

  constructor(private storage: Storage) {
    this.types = this.loadTypes()
  }

  private loadTypes(): UnoTypes[] {
    let result: UnoTypes[] | null = this.storage.getItem(StorageTypes.uno_types)
    if (result === null)
      return []
    return result
  }

  public addType(type: UnoTypes) {
    if (this.types.length === 0)
      this.storage.createItem(StorageTypes.uno_types, this.types)
    type.id = this.types.length + 1
    type.card_list = undefined
    this.storage.updateItem(StorageTypes.uno_types, this.types.concat(type))
    this.types = this.loadTypes()
  }

  public updateType(type: UnoTypes) {
    this.types.forEach(t => {
      if (t.id === type.id)
        t = type
      t.card_list = undefined
    })
    this.storage.updateItem(StorageTypes.uno_types, this.types)
    this.types = this.loadTypes()
  }

  public removeType(type: UnoTypes) {
    this.storage.updateItem(StorageTypes.uno_types, this.types.filter(t => t.id !== type.id))
    this.types = this.loadTypes()
  }

  public getCards(cards: Card_for_type[]): Card[] {
    let result: Card[] | null = this.storage.getItem(StorageTypes.cards)
    if (result === null)
      return []
    let card_list: Card[] = []
    result.forEach((cl: Card) => {
      if (cards.find((c: Card_for_type) => c.id === cl.id))
        card_list.push(cl)
    })
    return card_list
  }

  public getType(id: number): UnoTypes | undefined {
    let type: UnoTypes | undefined
    let result: UnoTypes[] = this.types.filter((t: UnoTypes) => t.id === id)
    if (result.length === 1)
      type = result[0]
    return type
  }

  public refreshTypes(): void {
    this.types = this.loadTypes()
  }
}
