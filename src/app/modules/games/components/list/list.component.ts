import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, MessageService } from 'primeng/api';
import { Game } from '../../../../interfaces/game';
import { GamesService } from '../../../../service/games.service';
import { Helper } from '../../../../utilities/helper';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  public games: Game[] = []

  constructor(private primengConfig: PrimeNGConfig, private messageService: MessageService, private gamesService: GamesService, public helper: Helper) {
    this.primengConfig.ripple = true
  }

  ngOnInit(): void {
    this.games = this.gamesService.games
  }
}
