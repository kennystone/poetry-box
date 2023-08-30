import { BookMania } from "./fonts/Bookmania";
import PoemAuthor from "./PoemAuthor";
import Swash from "./Swash";
import Poem from "./poem";

export type HeaderText = [string, string[]]

interface Props {
    headerData: HeaderText[],
    poem: Poem,
    styleProps?: React.CSSProperties
}

export default function PoemHeader({ headerData, poem, styleProps }: Props) {
    const header = headerData.map(([text, codes], index) => {
        if (codes.length == 0) {
            // if no swash codes, just return the text
            return text
        } else {
            // else, use the Swash Component to build out the font feature settings span
            return <Swash key={`swash-${index}`} letter={text} codes={codes} />
        }
    })

    const dateStr = poem.date.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
    })

    return <div>
        <div className="">
            <p className="text-center text-base md:text-lg font-serif text-yellow-900">A little poem for {dateStr}</p>
        </div>
        <div className="border-t-2 border-yellow-900 py-3.5 md:py-9">
            <h1 className={`${BookMania.className} text-2xl md:text-4xl text-emerald-900`} style={styleProps}>{header}</h1>
            <h3 className={`font-sans mt-2.5 md:mt-5 text-lg md:text-xl text-teal-700`}>
                by <span style={{ textTransform: "none" }}> {poem.author} </span>
            </h3>
        </div>
    </div>
}