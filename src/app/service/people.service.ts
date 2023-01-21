import { Injectable } from '@angular/core'
import { Person } from '../interfaces/person'
import { Storage } from '../utilities/storage'
@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  public people: Person[]

  constructor(private storage: Storage) {
    this.people = this.loadPeople()
  }

  private loadPeople(): Person[] {
    let result: Person[] | null = this.storage.getItem('people')
    if (result === null)
      return []
    return result
  }

  public addPerson(person: Person) {
    if (this.people.length === 0)
      this.storage.createItem('people', this.people)
    person.id = this.people.length + 1
    this.storage.updateItem('people', this.people.concat(person))
  }

  public updatePerson(person: Person) {
    this.people.forEach(p => {
      if (p.id === person.id)
        p = person
    })
    this.storage.updateItem('people', this.people)
  }

  public removePerson(person: Person) {
    this.storage.updateItem('people', this.people.filter(p => p.id !== person.id))
  }
}
