import { PoemParagraph } from '../PoemParagraph'
import { HeaderText } from "../PoemHeader"
import PoemHeader from '../PoemHeader'
import PoemFooter from "../PoemFooter/PoemFooter"
import { patience } from "../poems"



interface PPProps {
    children: string | JSX.Element | JSX.Element[],
}

const PP = ({ children }: PPProps): JSX.Element => {
    return <PoemParagraph narrow={true}>{children}</PoemParagraph>
}

export default function Patience() {
    const headerTextData: HeaderText[] = [
        ["patie", []],
        ["n", ["18"]],
        ["ce ", []]]
    return (
        <div>
            <PoemHeader headerData={headerTextData} poem={patience} styleProps={{}} />
            <div>
                <PP>
                    Call it sloth; call it sleaze;
                </PP>
                <PP>
                    call it bummery if you please;
                </PP>
                <PP>
                    I’ll call it patience;
                </PP>
                <PP>
                    I’ll call it joy, this,
                </PP>
                <PP>
                    my supine congress
                </PP>
                <PP>
                    with the newly yawning grass
                </PP>
                <PP>
                    and beetles chittering
                </PP>
                <PP>
                    in their offices
                </PP>
                <PP>
                    beneath me, as I
                </PP>
                <PP>
                    nearly drifting to dream
                </PP>
                <PP>
                    admire this so-called weed which,
                </PP>
                <PP>
                    if I guarded with teeth bared
                </PP>
                <PP>
                    my garden of all alien breeds,
                </PP>
                <PP>
                    if I was all knife and axe
                </PP>
                <PP>
                    and made a life of hacking
                    would not have burst gorgeous forth and beckoning
                </PP>
                <PP>
                    these sort of phallic spires
                </PP>
                <PP>
                    ringleted by these sort of vaginal blooms
                </PP>
                <PP>
                    which the new bees, being bees, heed;
                </PP>
                <PP>
                    and yes, it is spring, if you can’t tell
                </PP>
                <PP>
                    from the words my mind makes
                </PP>
                <PP>
                    of the world, and everything
                </PP>
                <PP>
                    makes me mildly or more
                </PP>
                <PP>
                    hungry—the worm turning
                </PP>
                <PP>
                    in the leaf mold; the pear blooms
                </PP>
                <PP>
                    howling forth their pungence
                </PP>
                <PP>
                    like a choir of wet-dreamed boys
                </PP>
                <PP>
                    hiking up their skirts; even
                </PP>
                <PP>
                    the neighbor cat’s shimmy
                </PP>
                <PP>
                    through the grin in the fence,
                </PP>
                <PP>
                    and the way this bee
                </PP>
                <PP>
                    before me after whispering
                </PP>
                <PP>
                    in my ear dips her head
                </PP>
                <PP>
                    into those dainty lips
                </PP>
                <PP>
                    not exactly like one entering a chapel
                </PP>
                <PP>
                    and friends
                </PP>
                <PP>
                    as if that wasn’t enough
                </PP>
                <PP>
                    blooms forth with her forehead dusted gold
                </PP>
                <PP>
                    like she has been licked
                </PP>
                <PP>
                    and so blessed
                </PP>
                <PP>
                    by the kind of God
                </PP>
                <PP>
                    to whom this poem is prayer.
                </PP>
            </div>
            <PoemFooter poem={patience} />
        </div>
    )
}
