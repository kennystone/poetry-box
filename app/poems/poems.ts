import Poem from './poem'
import { justASimpleDeclarationOfLove } from './just-a-simple-declaration-of-love/page'

export function findPoemById(id: string): Poem {
    return poems.filter(poem => poem.id === id)[0]
}

const poems: Array<Poem> = [
    justASimpleDeclarationOfLove
]