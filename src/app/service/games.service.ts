import { Injectable } from '@angular/core'
import { Game } from '../interfaces/game'
import { Storage } from '../utilities/storage'

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  public games: Game[]

  constructor(private storage: Storage) {
    this.games = this.loadGames()
  }

  private loadGames(): Game[] {
    let result: Game[] | null = this.storage.getItem('games')
    if (result === null)
      return []
    return result
  }

  public addGame(game: Game) {
    if (this.games.length === 0)
      this.storage.createItem('games', this.games)
    game.id = this.games.length + 1
    this.storage.updateItem('games', this.games.concat(game))
  }

  public updateGame(game: Game) {
    this.games.forEach(g => {
      if (g.id === game.id)
        g = game
    })
    this.storage.updateItem('games', this.games)
  }

  public removeGame(game: Game) {
    this.storage.updateItem('games', this.games.filter(g => g.id !== game.id))
  }
}
