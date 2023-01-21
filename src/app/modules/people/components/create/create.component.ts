import { Component } from '@angular/core';
import { PrimeNGConfig, MessageService } from 'primeng/api';
import { Person } from 'src/app/interfaces/person';
import { PeopleService } from 'src/app/service/people.service';
import { Helper } from 'src/app/utilities/helper';

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
    let people: Person[] = this.peopleService.people
    let error: boolean = false
    if (people.filter((p: Person) => p.name === this.person.name).length > 0) {
      this.messageService.add({ severity: 'error', summary: 'ERROR', detail: 'Player already exists with the desired name' })
      error = true
    }
    if (!error) {
      this.peopleService.addPerson(this.person)
      people = this.peopleService.people
      if (people.filter((p: Person) => p.name === this.person.name).length !== 1)
        this.messageService.add({ severity: 'error', summary: 'ERROR', detail: 'Failed to create new player' })
      else {
        this.messageService.add({ severity: 'success', summary: 'SUCCESS', detail: 'New player created' })
        this.person = people.filter((p: Person) => p.name === this.person.name)[0]
        this.helper.goTo('/players/' + this.person.id)
      }
    }
  }

  public clear(): void {
    this.person = this.emptyPerson()
  }
}
