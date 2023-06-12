import { BookMania } from "./fonts/Bookmania";
import Swash from "./swash";

export default function PoemHeader({ headerData, styleProps }: { headerData: [string, string[]][], styleProps: React.CSSProperties }) {
    const header = headerData.map(([text, codes], index) => {
        if (codes.length == 0) {
            // if no swash codes, just return the text
            return text
        } else {
            // else, use the Swash Component to build out the font feature settings span
            return <Swash key={`swash-${index}`} letter={text} codes={codes} />
        }
    })
    return <h1 className={`${BookMania.className} my-2.5 md:my-3.5 text-2xl md:text-4xl`} style={styleProps}>{header}</h1>
}