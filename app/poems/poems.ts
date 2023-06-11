import Poem from './poem'
import { justASimpleDeclarationOfLove } from './just-a-simple-declaration-of-love/page'
import { patience } from './patience/page'

export function findPoemById(id: string): Poem {
    return allPoems.filter(poem => poem.id === id)[0]
}

export const allPoems: Array<Poem> = [
    justASimpleDeclarationOfLove,
    patience,
]