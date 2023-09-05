import Link from 'next/link'
import Poem from './poem'
import { allPoems } from './poems'
import { BookMania } from '../fonts/Bookmania';
import Divider from '../Divider';

function poemItem(poem: Poem) {
    const dateStr = poem.date.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
    })

    return <li><Link className="font-sans text-slate-800" href={`/poems/${poem.slug()}`}><span className="font-bold">{poem.title}</span> ({dateStr})</Link></li>;
}

export default function Index() {
    let poemsList = allPoems.map(p => poemItem(p))
    poemsList.reverse()
    return (
        <div>
            <h1 className={`${BookMania.className} text-2xl md:text-4xl text-emerald-900`} >Archive</h1>
            <ul className="py-8">
                {poemsList}
            </ul>
            <Divider />
        </div>
    )
}