import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, MessageService } from 'primeng/api';
import { PeopleService } from 'src/app/service/people.service';
import { Helper } from 'src/app/utilities/helper';
import { Person } from '../../../../interfaces/person';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  public people: Person[] = []

  constructor(private primengConfig: PrimeNGConfig, private messageService: MessageService, private peopleService: PeopleService, public helper: Helper) {
    this.primengConfig.ripple = true
  }

  ngOnInit(): void {
    this.peopleService.refreshPeople()
    this.people = this.peopleService.people
  }
}
