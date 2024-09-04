import Poem from './poem'

export const foraNewBeginning: Poem = new Poem(
    "for-a-new-beginning",
    "John O'Donohue",
    "For A New Beginning",
    new Date("2024-09-01T00:00:00-07:00")
)

export const thankYou: Poem = new Poem(
    "thank-you",
    "Ross Gay",
    "Thank You",
    new Date("2024-10-01T00:00:00-07:00")
)

export const patience: Poem = new Poem(
    "patience",
    "Ross Gay",
    "patience",
    new Date("2024-11-01:00:00:00-07:00")
)

export const justASimpleDeclarationOfLove: Poem = new Poem(
    "just-a-simple-declaration-of-love",
    "Nikki Giovanni",
    "Just a Simple Declaration of Love",
    new Date("2024-12-01:00:00:00-08:00")
)

export function findPoemById(id: string): Poem {
    return allPoems.filter(poem => poem.id === id)[0]
}

export function getIndexForPoem(poem: Poem): number {
    return allPoems.indexOf(poem);
}

export function getPoemByIndex(index: number): Poem | null {
    if (index < 0) {
        return null
    }
    if (index >= allPoems.length) {
        return null
    }
    return allPoems[index]
}

export const allPoems: Array<Poem> = [
    foraNewBeginning,
    thankYou,
    patience,
    justASimpleDeclarationOfLove,
]