import { Card, Card_for_type } from "./card"

export interface UnoTypes {
    id: number
    name: string
    cards: Card_for_type[]
    card_list?: Card[]
}
