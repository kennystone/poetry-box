import Poem from "../poem"
import ArchiveButton from "./ArchiveButton"
import { getPoemByIndex, getIndexForPoem } from "../poems";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";
import Divider from "@/app/Divider";

const PoemFooter = ({ poem }: { poem: Poem }) => {

    const poemIndex = getIndexForPoem(poem);
    const prevPoem = getPoemByIndex(poemIndex - 1);
    const nextPoem = getPoemByIndex(poemIndex + 1);

    return <div>
        <div className="">
            <Divider />
            <div className="grid grid-cols-3">
                <PrevButton poem={prevPoem} />
                <ArchiveButton />
                <NextButton poem={nextPoem} />
            </div>
        </div>
    </div>
}

export default PoemFooter