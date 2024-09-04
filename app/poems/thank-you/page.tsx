import { HeaderText } from "../PoemHeader"
import PoemHeader from '../PoemHeader'
import PoemFooter from "../PoemFooter/PoemFooter"
import { PoemParagraph } from "../PoemParagraph"
import { thankYou } from "../poems"


interface PPProps {
    children: string | JSX.Element | JSX.Element[],
}

const PP = ({ children }: PPProps): JSX.Element => {
    return <PoemParagraph serif={true}>{children}</PoemParagraph>
}

export default function ThankYou() {
    const headerTextData: HeaderText[] = [
        ["T", ["01"]],
        ["hank ", []],
        ["Y", ["11"]],
        ["ou", []],
    ]
    return (
        <div>
            <PoemHeader headerData={headerTextData} poem={thankYou} styleProps={{}} />
            <PP>
                <p>
                    If you find yourself half naked
                </p>
                <p>
                    and barefoot in the frosty grass, hearing,
                </p>
                <p>
                    again, the earth's great, sonorous moan that says
                </p>
                <p>
                    you are the air of the now and gone, that says
                </p>
                <p>
                    all you love will turn to dust,
                </p>
                <p>
                    and will meet you there, do not
                </p>
                <p>
                    raise your fist. Do not raise
                </p>
                <p>
                    your small voice against it. And do not
                </p>
                <p>
                    take cover. Instead, curl your toes
                </p>
                <p>
                    into the grass, watch the cloud
                </p>
                <p>
                    ascending from your lips. Walk
                </p>
                <p>
                    through the garden's dormant splendor.
                </p>
                <p>
                    Say only, thank you.
                </p>
                <p>
                    Thank you.
                </p>
            </PP>
            <PoemFooter poem={thankYou} />
        </div>
    )
}
