import { Injectable } from '@angular/core'
import { Game } from '../interfaces/game'
import { Person, Person_Game } from '../interfaces/person'
import { UnoTypes } from '../interfaces/uno-types'
import { Storage } from '../utilities/storage'
import { StorageTypes } from '../utilities/storage-types'

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  public games: Game[]

  constructor(private storage: Storage) {
    this.games = this.loadGames()
  }

  private loadGames(): Game[] {
    let result: Game[] | null = this.storage.getItem(StorageTypes.games)
    if (result === null)
      return []
    return result
  }

  public addGame(game: Game) {
    if (this.games.length === 0)
      this.storage.createItem(StorageTypes.games, this.games)
    game.id = this.games.length + 1
    game.players_list = undefined
    game.game_config = undefined
    this.storage.updateItem(StorageTypes.games, this.games.concat(game))
  }

  public updateGame(game: Game) {
    this.games.forEach(g => {
      if (g.id === game.id)
        g = game
      g.players_list = undefined
      g.game_config = undefined
    })
    this.storage.updateItem(StorageTypes.games, this.games)
  }

  public removeGame(game: Game) {
    this.storage.updateItem(StorageTypes.games, this.games.filter(g => g.id !== game.id))
  }

  public getPlayers(players: Person_Game[]): Person[] {
    let result: Person[] | null = this.storage.getItem(StorageTypes.people)
    if (result === null)
      return []
    let people: Person[] = []
    result.forEach((person: Person) => {
      if (players.find((p: Person_Game) => p.id === person.id))
        people.push(person)
    })
    return people
  }

  public getGame(game_id: number): UnoTypes | undefined {
    let result: UnoTypes[] | null = this.storage.getItem(StorageTypes.uno_types)
    if (result === null)
      return undefined
    let game: UnoTypes | undefined
    result.forEach((g: UnoTypes) => {
      if (g.id === game_id)
        game = g
    })
    return game
  }
}
