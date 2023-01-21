import { Person_Game } from "./person"
import { UnoTypes } from "./uno-types"

export interface Game {
    id: number
    name: string
    max_points: number
    game_type: number
    creation_date: Date
    players: Person_Game[]
    winner_is_lowest: boolean
    rounds: number
}
