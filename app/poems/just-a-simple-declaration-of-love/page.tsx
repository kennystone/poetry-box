import Poem from "../poem"
import PoemAuthor from "../PoemAuthor"
import { HeaderText } from "../PoemHeader"
import PoemHeader from '../PoemHeader'
import PoemFooter from "../PoemFooter"
import { PoemParagraph } from "../PoemParagraph"

export const justASimpleDeclarationOfLove: Poem = new Poem(
    "just-a-simple-declaration-of-love",
    "Nikki Giovanni",
    "Just a Simple Declaration of Love",
    new Date("2023-10-01")
)

interface PPProps {
    children: string | JSX.Element | JSX.Element[],
}

const PP = ({ children }: PPProps): JSX.Element => {
    return <PoemParagraph serif={true}>{children}</PoemParagraph>
}

export default function JustASimpleDeclarationOfLove() {
    const headerTextData: HeaderText[] = [
        ["Just ", []],
        ["a", ["01"]],
        [" Simple ", []],
        ["D", ["11"]],
        ["e", ["01"]],
        ["cl", []],
        ["a", ["01"]],
        ["r", ["19"]],
        ["a", ["01"]],
        ["tion o", []],
        ["f", ["16"]],
        [" Love", []],
    ]
    return (
        <div>
            <PoemHeader headerData={headerTextData} styleProps={{}} />
            <div>
                <PoemAuthor author={justASimpleDeclarationOfLove.author} />
            </div>
            <PP>
                In the reddish gray of morning just before night concedes I know the
                silhouette of Sunflowers turning their heads to the east
            </PP>

            <PP>
                I hear birds gathering at the bird bath chattering away singing warning gossiping about the cat in the bushes
            </PP>

            <PP>
                I watch the rabbits starting for the warren under my shed to rest from another night of survival
            </PP>

            <PP>
                Mother &apos;Possum with six youngsters on her back slowly like any other overburdened woman makes her way back home
            </PP>

            <PoemParagraph narrow={true} serif={true}>
                I look at the clouds push off against the lighter blue
            </PoemParagraph>

            <PoemParagraph narrow={true} serif={true} style={{ marginLeft: "34%" }}>
                and
            </PoemParagraph>

            <PoemParagraph narrow={true} serif={true}>
                making coffee I hear the friendly gurgle of the drip maker the sigh of the toast softly browning
            </PoemParagraph>

            <PP>
                I watch my world come awake sitting in my kitchen hearing smelling tasting another day but nothing is clear until you
            </PP>

            <PP>
                Smile
            </PP>

            <PP>
                Calling the sun to work
            </PP>
            <PoemFooter date={justASimpleDeclarationOfLove.date} />
        </div>
    )
}
