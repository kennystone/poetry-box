import { HeaderText } from "../PoemHeader"
import PoemHeader from '../PoemHeader'
import PoemFooter from "../PoemFooter/PoemFooter"
import { PoemParagraph } from "../PoemParagraph"
import { foraNewBeginning } from "../poems"


interface PPProps {
    children: string | JSX.Element | JSX.Element[],
}

const PP = ({ children }: PPProps): JSX.Element => {
    return <PoemParagraph serif={true}>{children}</PoemParagraph>
}

export default function ForANewBeginning() {
    const headerTextData: HeaderText[] = [
        ["Fo", []],
        ["r", ["20"]],
        [" a ", ["small-caps"]],
        ["N", ["19", "20"]],
        ["ew ", []],
        ["Beginning", [""]],
    ]
    return (
        <div>
            <PoemHeader headerData={headerTextData} poem={foraNewBeginning} styleProps={{}} />
            <div>
                <PP>
                    <div>
                        <p>
                            In out-of-the-way places of the heart,
                        </p>
                        <p>
                            Where your thoughts never think to wander,
                        </p>
                        <p>
                            This beginning has been quietly forming,
                        </p>
                        <p>
                            Waiting until you were ready to emerge.
                        </p>
                    </div>
                </PP>
                <PP>
                    <div>
                        <p>
                            For a long time it has watched your desire,
                        </p>
                        <p>
                            Feeling the emptiness growing inside you,
                        </p>
                        <p>
                            Noticing how you willed yourself on,
                        </p>
                        <p>
                            Still unable to leave what you had outgrown.
                        </p>
                    </div>
                </PP>
                <PP>
                    <div>
                        <p>
                            It watched you play with the seduction of safety
                        </p>
                        <p>
                            And the gray promises that sameness whispered,
                        </p>
                        <p>
                            Heard the waves of turmoil rise and relent,
                        </p>
                        <p>
                            Wondered would you always live like this.
                        </p>
                    </div>

                </PP>
                <PP>
                    <div>
                        <p>
                            Then the delight, when your courage kindled,
                        </p>
                        <p>
                            And out you stepped onto new ground,
                        </p>
                        <p>
                            Your eyes young again with energy and dream,
                        </p>
                        <p>
                            A path of plenitude opening before you.
                        </p>
                    </div>
                </PP>
                <PP>
                    <div>
                        <p>
                            Though your destination is not yet clear
                        </p>
                        <p>
                            You can trust the promise of this opening;
                        </p>
                        <p>
                            Unfurl yourself into the grace of beginning
                        </p>
                        <p>
                            That is at one with your life&apos;s desire.
                        </p>
                    </div>
                </PP>
                <PP>
                    <div>
                        <p>
                            Awaken your spirit to adventure;
                        </p>
                        <p>
                            Hold nothing back, learn to find ease in risk;
                        </p>
                        <p>
                            Soon you will be home in a new rhythm,
                        </p>
                        <p>
                            For your soul senses the world that awaits you.
                        </p>
                    </div>
                </PP>
            </div>
            <PoemFooter poem={foraNewBeginning} />
        </div >
    )
}
