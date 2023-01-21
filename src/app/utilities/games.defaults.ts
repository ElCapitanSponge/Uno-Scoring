import { Card, Card_for_type } from "../interfaces/card"
import { UnoTypes } from "../interfaces/uno-types"
import { Storage } from "./storage"
import { StorageTypes } from "./storage-types"

export class DefaultUnoGames {

    constructor(private storage: Storage) {
        this.storage_people_init()
        this.storage_games_init()
        this.storage_types_init()
        this.storage_cards_init()
    }

    private storage_cards_empty(): boolean {
        return !this.storage.existsItem(StorageTypes.cards)
    }

    private storage_types_empty(): boolean {
        return !this.storage.existsItem(StorageTypes.uno_types)
    }

    private storage_people_empty(): boolean {
        return !this.storage.existsItem(StorageTypes.people)
    }

    private storage_games_empty(): boolean {
        return !this.storage.existsItem(StorageTypes.games)
    }

    private storage_people_init(): void {
        if (this.storage_people_empty())
            this.storage.createItem(StorageTypes.people, [])
    }

    private storage_games_init(): void {
        if (this.storage_games_empty())
            this.storage.createItem(StorageTypes.games, [])
    }

    private storage_types_init(): void {
        if (this.storage_types_empty()) {
            let games: UnoTypes[] = []
            games.push(this.game_original_uno())
            games.push(this.game_disney_uno())
            games.push(this.game_flip_uno())
            this.storage.createItem(StorageTypes.uno_types, games)
        }
    }

    private storage_cards_init(): void {
        if (this.storage_cards_empty()) {
            let cards: Card[] = []
            cards = [...this.cards_original_uno(), ...this.cards_disney_uno(), ...this.cards_flip_uno()]
            this.storage.createItem(StorageTypes.cards, cards)
        }
    }

    private game_original_uno(): UnoTypes {
        let card_list: Card[] = this.cards_original_uno()
        let cards: Card_for_type[] = []
        card_list.forEach((card: Card) => {
            cards.push({
                id: card.id
            })
        })
        let game: UnoTypes = {
            id: 1,
            name: "Uno - Original",
            cards
        }

        return game
    }

    private cards_original_uno(): Card[] {
        let cards: Card[] = [
            {
                id: 1,
                uno_type: 1,
                name: "0",
                value: 0
            }, {
                id: 2,
                uno_type: 1,
                name: "1",
                value: 1
            }, {
                id: 3,
                uno_type: 1,
                name: "2",
                value: 2
            }, {
                id: 4,
                uno_type: 1,
                name: "3",
                value: 3
            }, {
                id: 5,
                uno_type: 1,
                name: "4",
                value: 4
            }, {
                id: 6,
                uno_type: 1,
                name: "5",
                value: 5
            }, {
                id: 7,
                uno_type: 1,
                name: "6",
                value: 6
            }, {
                id: 8,
                uno_type: 1,
                name: "7",
                value: 7
            }, {
                id: 9,
                uno_type: 1,
                name: "8",
                value: 8
            }, {
                id: 10,
                uno_type: 1,
                name: "9",
                value: 9
            }, {
                id: 11,
                uno_type: 1,
                name: "Draw 2",
                value: 20
            }, {
                id: 12,
                uno_type: 1,
                name: "Reverse",
                value: 20
            }, {
                id: 13,
                uno_type: 1,
                name: "Skip",
                value: 20
            }, {
                id: 14,
                uno_type: 1,
                name: "Wild",
                value: 50
            }, {
                id: 15,
                uno_type: 1,
                name: "Wild Draw 4",
                value: 50
            }
        ]

        return cards
    }

    private game_disney_uno(): UnoTypes {
        let card_list: Card[] = this.cards_disney_uno()
        let cards: Card_for_type[] = []
        card_list.forEach((card: Card) => {
            cards.push({
                id: card.id
            })
        })
        let game: UnoTypes = {
            id: 2,
            name: "Uno Disney",
            cards
        }

        return game
    }

    private cards_disney_uno(): Card[] {
        let cards: Card[] = [
            {
                id: 16,
                uno_type: 2,
                name: "0",
                value: 0
            }, {
                id: 17,
                uno_type: 2,
                name: "1",
                value: 1
            }, {
                id: 18,
                uno_type: 2,
                name: "2",
                value: 2
            }, {
                id: 19,
                uno_type: 2,
                name: "3",
                value: 3
            }, {
                id: 20,
                uno_type: 2,
                name: "4",
                value: 4
            }, {
                id: 21,
                uno_type: 2,
                name: "5",
                value: 5
            }, {
                id: 22,
                uno_type: 2,
                name: "6",
                value: 6
            }, {
                id: 23,
                uno_type: 2,
                name: "7",
                value: 7
            }, {
                id: 24,
                uno_type: 2,
                name: "8",
                value: 8
            }, {
                id: 25,
                uno_type: 2,
                name: "9",
                value: 9
            }, {
                id: 26,
                uno_type: 2,
                name: "Draw 2",
                value: 20
            }, {
                id: 27,
                uno_type: 2,
                name: "Reverse",
                value: 20
            }, {
                id: 28,
                uno_type: 2,
                name: "Skip",
                value: 20
            }, {
                id: 29,
                uno_type: 2,
                name: "Wild",
                value: 50
            }, {
                id: 30,
                uno_type: 2,
                name: "Wild Draw 4",
                value: 50
            }, {
                id: 31,
                uno_type: 2,
                name: "Wild Customizable",
                value: 50
            }, {
                id: 32,
                uno_type: 2,
                name: "Sorcerer's Apprentice",
                value: 50
            }
        ]

        return cards
    }

    private game_flip_uno(): UnoTypes {
        let card_list: Card[] = this.cards_flip_uno()
        let cards: Card_for_type[] = []
        card_list.forEach((card: Card) => {
            cards.push({
                id: card.id
            })
        })
        let game: UnoTypes = {
            id: 3,
            name: "Uno Flip!",
            cards
        }

        return game
    }

    private cards_flip_uno(): Card[] {
        let cards: Card[] = [
            {
                id: 33,
                uno_type: 3,
                name: "0",
                value: 0
            }, {
                id: 34,
                uno_type: 3,
                name: "1",
                value: 1
            }, {
                id: 35,
                uno_type: 3,
                name: "2",
                value: 2
            }, {
                id: 36,
                uno_type: 3,
                name: "3",
                value: 3
            }, {
                id: 37,
                uno_type: 3,
                name: "4",
                value: 4
            }, {
                id: 38,
                uno_type: 3,
                name: "5",
                value: 5
            }, {
                id: 39,
                uno_type: 3,
                name: "6",
                value: 6
            }, {
                id: 40,
                uno_type: 3,
                name: "7",
                value: 7
            }, {
                id: 41,
                uno_type: 3,
                name: "8",
                value: 8
            }, {
                id: 42,
                uno_type: 3,
                name: "9",
                value: 9
            }, {
                id: 43,
                uno_type: 3,
                name: "Draw One",
                value: 10
            }, {
                id: 44,
                uno_type: 3,
                name: "Draw Five",
                value: 20
            }, {
                id: 45,
                uno_type: 3,
                name: "Reverse",
                value: 20
            }, {
                id: 46,
                uno_type: 3,
                name: "Skip",
                value: 20
            }, {
                id: 47,
                uno_type: 3,
                name: "Skip Everyone",
                value: 30
            }, {
                id: 48,
                uno_type: 3,
                name: "Flip",
                value: 20
            }, {
                id: 49,
                uno_type: 3,
                name: "Wild",
                value: 40
            }, {
                id: 50,
                uno_type: 3,
                name: "Wild Draw Two",
                value: 50
            }, {
                id: 51,
                uno_type: 3,
                name: "Wild Draw Color",
                value: 60
            }
        ]

        return cards
    }
}