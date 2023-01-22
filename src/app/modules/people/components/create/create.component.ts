import { Component } from '@angular/core';
import { PrimeNGConfig, MessageService } from 'primeng/api';
import { Person } from '../../../../interfaces/person';
import { PeopleService } from '../../../../service/people.service';
import { Helper } from '../../../../utilities/helper';
import { MessageTypes } from '../../../../utilities/message-types';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent {
  public person: Person

  constructor(private primengConfig: PrimeNGConfig, private messageService: MessageService, private peopleService: PeopleService, public helper: Helper) {
    this.primengConfig.ripple = true
    this.person = this.emptyPerson()
  }

  private emptyPerson(): Person {
    let tmp: Person = {
      id: -1,
      name: ''
    }

    return tmp
  }

  public goBack(): void {
    this.helper.goTo('/players')
  }

  public save(): void {
    let people: Person[] | undefined = this.peopleService.getPeopleName(this.person.name)
    let error: boolean = false
    if (typeof people !== 'undefined') {
      this.messageService.add({ severity: MessageTypes.error, summary: 'ERROR', detail: 'Player already exists with the desired name' })
      error = true
    }
    if (!error) {
      this.peopleService.addPerson(this.person)
      people = this.peopleService.getPeopleName(this.person.name)
      if (typeof people === 'undefined' || (typeof people !== 'undefined' && people.length !== 1))
        this.messageService.add({ severity: MessageTypes.error, summary: 'ERROR', detail: 'Failed to create new player' })
      else {
        this.messageService.add({ severity: MessageTypes.success, summary: 'SUCCESS', detail: 'New player created' })
        this.person = people[0]
        this.helper.goTo('/players/' + this.person.id)
      }
    }
  }

  public clear(): void {
    this.person = this.emptyPerson()
  }
}
