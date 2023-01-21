import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { GamesService } from '../../../../service/games.service';
import { Game } from '../../../../interfaces/game';
import { Person } from '../../../../interfaces/person';
import { UnoTypes } from '../../../../interfaces/uno-types';
import { Helper } from '../../../../utilities/helper';
import { UnoTypesService } from '../../../../service/uno-types.service';
import { PeopleService } from '../../../../service/people.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  public games: Game[] = []
  public users: Person[] = []
  public uno_games: UnoTypes[] = []

  constructor(private primengConfig: PrimeNGConfig, private messageService: MessageService, private gamesService: GamesService, private peopleService: PeopleService, private unoTypesService: UnoTypesService, public helper: Helper) {
    this.primengConfig.ripple = true
  }

  ngOnInit() {
    this.games = this.gamesService.games
    this.users = this.peopleService.people
    this.uno_games = this.unoTypesService.types
    this.helper.devLog('ngOnInit', 'games', this.games)
    this.helper.devLog('ngOnInit', 'users', this.users)
    this.helper.devLog('ngOnInit', 'uno_games', this.uno_games)
  }
}
