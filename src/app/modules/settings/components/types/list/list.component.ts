import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, MessageService } from 'primeng/api';
import { UnoTypes } from '../../../../../interfaces/uno-types';
import { UnoTypesService } from '../../../../../service/uno-types.service';
import { Helper } from '../../../../../utilities/helper';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  public uno_games: UnoTypes[] = []

  constructor(private primengConfig: PrimeNGConfig, private messageService: MessageService, private unoGamesService: UnoTypesService, public helper: Helper) {
    this.primengConfig.ripple = true
  }

  ngOnInit(): void {
    this.uno_games = this.unoGamesService.types
  }
}
