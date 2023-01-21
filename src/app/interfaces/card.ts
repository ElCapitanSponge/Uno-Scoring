import { UnoTypes } from "./uno-types"

export interface Card {
    id: number
    uno_type: number
    name: string
    value: number
}
