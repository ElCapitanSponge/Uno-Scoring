import { Person } from "./person"
import { UnoTypes } from "./uno-types"

export interface Game {
    id: number
    name: string
    max_points: number
    type: UnoTypes
    creation_date: Date
    players: Person[]
}
