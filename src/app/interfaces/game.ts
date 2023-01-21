import { Person, Person_Game } from "./person"

export interface Game {
    id: number
    name: string
    max_points: number
    game_type: number
    creation_date: Date
    players: Person_Game[]
    winner_is_lowest: boolean
    round: number
    players_list?: Person[]
}
