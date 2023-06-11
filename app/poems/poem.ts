export default class Poem {
    constructor(
        public readonly id: string,
        public readonly author: string,
        public readonly title: string,
        public readonly date: Date) {
    }

    slug(): string {
        return `${this.id}`
    }
}