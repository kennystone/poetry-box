import Link from 'next/link'
import Poem from "../poem"

const NextButton = ({ poem }: { poem: Poem | null }) => {
    if (poem == null) {
        return <div className="text-left"></div>
    }
    return <div><Link className="font-sans text-slate-800" href={`/poems/${poem.slug()}`}>next</Link></div>;
}

export default NextButton