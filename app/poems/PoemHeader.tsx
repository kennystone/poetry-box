import { BookMania } from "../fonts/Bookmania";
import Swash from "../fonts/Swash";
import Poem from "./poem";
import PageHeader from "../PageHeader";

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
            let smallCaps = false;
            if (codes[0] == "small-caps") {
                codes.shift()
                smallCaps = true;
            }
            // else, use the Swash Component to build out the font feature settings span
            return <Swash key={`swash-${index}`} letter={text} codes={codes} smallCaps={smallCaps} />
        }
    })

    const dateStr = poem.date.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
    })

    const pageHeaderText = "A little poem for " + dateStr

    return <div>
        <PageHeader text={pageHeaderText} />
        <div className="py-3.5 md:py-8 lg:py-8">
            <h1 className={`${BookMania.className} text-2xl md:text-4xl text-emerald-900`} style={styleProps}>{header}</h1>
            <h3 className={`font-sans mt-2.5 md:mt-5 text-lg md:text-xl text-teal-700`}>
                by <span style={{ textTransform: "none" }}> {poem.author} </span>
            </h3>
        </div>
    </div>
}