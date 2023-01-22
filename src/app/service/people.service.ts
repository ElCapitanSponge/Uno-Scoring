import { Injectable } from '@angular/core'
import { Person } from '../interfaces/person'
import { Storage } from '../utilities/storage'
import { StorageTypes } from '../utilities/storage-types'
@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  public people: Person[]

  constructor(private storage: Storage) {
    this.people = this.loadPeople()
  }

  private loadPeople(): Person[] {
    let result: Person[] | null = this.storage.getItem(StorageTypes.people)
    if (result === null)
      return []
    return result
  }

  public addPerson(person: Person): void {
    if (this.people.length === 0)
      this.storage.createItem(StorageTypes.people, this.people)
    person.id = this.people.length + 1
    this.storage.updateItem(StorageTypes.people, this.people.concat(person))
    this.people = this.loadPeople()
  }

  public updatePerson(person: Person): void {
    this.people.forEach((p: Person) => {
      if (p.id === person.id)
        p.name = person.name
    })
    this.storage.updateItem(StorageTypes.people, this.people)
    this.people = this.loadPeople()
  }

  public removePerson(person: Person): void {
    this.storage.updateItem(StorageTypes.people, this.people.filter(p => p.id !== person.id))
    this.people = this.loadPeople()
  }

  public getPerson(id: number): Person | undefined {
    let person: Person | undefined
    let result: Person[] = this.people.filter((p: Person) => p.id === id)
    if (result.length === 1)
      person = result[0]
    return person
  }

  public getPeopleName(name: string): Person[] | undefined {
    let people: Person[] | undefined
    let result: Person[] = this.people.filter((p: Person) => p.name === name)
    if (result.length > 0)
      people = result
    return people
  }

  public refreshPeople(): void {
    this.people = this.loadPeople()
  }
}
