import { Injectable } from '@angular/core';
import { Game } from '../interfaces/game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  public games: Game[] = []
  constructor(private storage: Storage) { }
}
