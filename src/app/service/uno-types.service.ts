import { Injectable } from '@angular/core';
import { UnoTypes } from '../interfaces/uno-types';
import { Storage } from '../utilities/storage';

@Injectable({
  providedIn: 'root'
})
export class UnoTypesService {
  public types: UnoTypes[] = []

  constructor(private storage: Storage) {
    this.types = this.loadTypes()
  }

  private loadTypes(): UnoTypes[] {
    let result: UnoTypes[] | null = this.storage.getItem('types')
    if (result === null)
      return []
    return result
  }

  public addType(type: UnoTypes) {
    if (this.types.length === 0)
      this.storage.createItem('types', this.types)
    type.id = this.types.length + 1
    this.storage.updateItem('types', this.types.concat(type))
  }

  public updateType(type: UnoTypes) {
    this.types.forEach(t => {
      if (t.id === type.id)
        t = type
    })
    this.storage.updateItem('types', this.types)
  }

  public removeType(type: UnoTypes) {
    this.storage.updateItem('types', this.types.filter(t => t.id !== type.id))
  }
}
