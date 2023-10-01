import Link from 'next/link'
import Poem from "../poem"
import HeartArrowSvg from '@/app/images/HeartArrow'

const NextButton = ({ poem }: { poem: Poem | null }) => {
    if (poem == null) {
        return <div className="text-left"></div>
    }
    return <div className="self-start"><Link className="" href={`/poems/${poem.slug()}`}>
        <HeartArrowSvg className="mt-4 mb-6 fill-rose-800" width="60" />
    </Link></div>;
}

export default NextButton