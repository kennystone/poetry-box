import Link from 'next/link'
import Poem from './poem'
import { allPoems } from './poems'

function poemItem(poem: Poem) {
    return <li><Link className="font-sans text-slate-800" href={`/poems/${poem.slug()}`}>{poem.title}</Link></li>;
}

export default function Index() {
    const poemsList = allPoems.map(p => poemItem(p))
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                hi hello
            </h1>
            <ul>
                {poemsList}
            </ul>
        </div>
    )
}