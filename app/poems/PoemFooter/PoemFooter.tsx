import Poem from "../poem"
import { getPoemByIndex, getIndexForPoem } from "../poems";
import Divider from "@/app/Divider";
import Link from "next/link";
import HeartArrowSvg from "@/app/images/HeartArrow";
import Swash from "@/app/fonts/Swash";
import { BookMania } from "@/app/fonts/Bookmania";

const PoemNavButton = ({ poem, text }: { poem: Poem | null, text: string }) => {
    let visibility = "invisible"
    let slug = ""
    if (poem != null) {
        visibility = "visible"
        slug = "/poems/" + poem.slug()
    }
    return <div className={`w-[150] ${visibility}`}>
        <Link className={`${BookMania.className} text-rose-800 hover:underline`} href={slug}>
            {text}
        </Link>
    </div>
}

const Archive = () => {
    return <span>
        <Swash letter={"a"} codes={["01"]} smallCaps={false} />
        rc
        <Swash letter={"h"} codes={["17"]} smallCaps={false} />
        i
        <Swash letter={"v"} codes={["20"]} smallCaps={false} />
        e
    </span>
}

const PoemFooter = ({ poem }: { poem: Poem }) => {

    const poemIndex = getIndexForPoem(poem);
    const prevPoem = getPoemByIndex(poemIndex - 1);
    const nextPoem = getPoemByIndex(poemIndex + 1);

    return <div className="print:hidden">
        <div className="w-full">
            <Divider />
            <div className="my-2.5 flex items-center justify-center w-full">
                <PoemNavButton poem={prevPoem} text="prev" />
                <div className="mx-6">
                    <h3 className="text-center"><Link className={`${BookMania.className} text-rose-800 font-serif`} href="/poems"><Archive /></Link></h3>
                </div>
                <PoemNavButton poem={nextPoem} text="next" />
            </div>
            <Divider />
        </div>
    </div >
}

export default PoemFooter