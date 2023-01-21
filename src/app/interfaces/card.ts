import { UnoTypes } from "./uno-types"

export interface Card {
    id: number
    uno_type: UnoTypes
    name: string
    value: number
}
