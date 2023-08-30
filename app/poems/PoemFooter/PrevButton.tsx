import Link from 'next/link'
import Poem from "../poem"

const PrevButton = ({ poem }: { poem: Poem | null }) => {
    if (poem == null) {
        return <div className="text-left"></div>
    }
    return <div><Link className="font-sans text-slate-800" href={`/poems/${poem.slug()}`}>prev</Link></div>;
}

export default PrevButton