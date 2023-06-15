import { BookMania } from "./fonts/Bookmania";
import Swash from "./Swash";

export type HeaderText = [string, string[]]

interface Props {
    headerData: HeaderText[],
    styleProps?: React.CSSProperties
}

export default function PoemHeader({ headerData, styleProps }: Props) {
    const header = headerData.map(([text, codes], index) => {
        if (codes.length == 0) {
            // if no swash codes, just return the text
            return text
        } else {
            // else, use the Swash Component to build out the font feature settings span
            return <Swash key={`swash-${index}`} letter={text} codes={codes} />
        }
    })
    return <h1 className={`${BookMania.className} my-0.5 md:my-3.5 text-2xl md:text-4xl text-emerald-900`} style={styleProps}>{header}</h1>
}