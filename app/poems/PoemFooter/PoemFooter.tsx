import Poem from "../poem"
import ArchiveButton from "./ArchiveButton"
import { getPoemByIndex, getIndexForPoem } from "../poems";
import NextButton from "./NextButton";
import PrevButton from "./PrevButton";

const PoemFooter = ({ poem }: { poem: Poem }) => {

    const poemIndex = getIndexForPoem(poem);
    const prevPoem = getPoemByIndex(poemIndex - 1);
    const nextPoem = getPoemByIndex(poemIndex + 1);
    console.log(['index', poemIndex], ['prev', prevPoem], ['next', nextPoem]);

    return <div>
        <div className="border-t-2 border-yellow-900">
            <div className="grid grid-cols-3">
                <PrevButton poem={prevPoem} />
                <ArchiveButton />
                <NextButton poem={nextPoem} />
            </div>
        </div>
    </div>
}

export default PoemFooter