import styles from './../poems.module.css'
import Swash from "../swash"
import Poem from "../poem"
import PoemAuthor from "../PoemAuthor"
import { BookMania } from "../fonts/Bookmania"
import PoemHeader from "../PoemHeader"

export const justASimpleDeclarationOfLove: Poem = new Poem(
    "just-a-simple-declaration-of-love",
    "Nikki Giovanni",
    "Just a Simple Declaration of Love",
    new Date("2023-10-01")
)

export default function JustASimpleDeclarationOfLove() {
    const headerStrData = [
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
        <div className={styles.poem}>
            <PoemHeader headerData={headerStrData} styleProps={{ color: "rgb(157, 58, 53)" }} />
            <div>
                <PoemAuthor author={justASimpleDeclarationOfLove.author} />
            </div>
            <p>
                In the reddish gray of morning just before night concedes I know the
                silhouette of Sunflowers turning their heads to the east
            </p>

            <p>
                I hear birds gathering at the bird bath chattering away singing warning gossiping about the cat in the bushes
            </p>

            <p>
                I watch the rabbits starting for the warren under my shed to rest from another night of survival
            </p>

            <p>
                Mother &apos;Possum with six youngsters on her back slowly like any other overburdened woman makes her way back home
            </p>

            <p className={styles.narrow}>
                I look at the clouds push off against the lighter blue
            </p>

            <p className={styles.narrow} style={{ marginLeft: "34%" }}>
                and
            </p>
            <p className={styles.narrow}>
                making coffee I hear the friendly gurgle of the drip maker the sigh of the toast softly browning
            </p>

            <p>
                I watch my world come awake sitting in my kitchen hearing smelling tasting another day but nothing is clear until you
            </p>

            <p>
                Smile
            </p>

            <p>
                Calling the sun to work
            </p>
        </div>
    )
}
