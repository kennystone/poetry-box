import styles from './../poems.module.css'
import Swash from "../../swash"
import Poem from "../poem"
import Author from "../author"

export const justASimpleDeclarationOfLove: Poem = new Poem(
    "just-a-simple-declaration-of-love",
    "Nikki Giovanni",
    "Just a Simple Declaration of Love",
    new Date("2023-10-01")
)

export default function JustASimpleDeclarationOfLove() {
    return (
        <div className={styles.poem}>
            <h1 style={{ fontSize: "2em", color: "rgb(157, 58, 53)" }}>
                Just <Swash letter="a" codes={["01"]} /> Simple <Swash letter="D" codes={["11"]} /><Swash letter="e" codes={[]} />cl<Swash letter="a" codes={["01"]} /><Swash letter="r" codes={["19"]} /><Swash letter="a" codes={["01"]} />tion o<Swash letter="f" codes={["16"]} /> Lov<Swash letter="e" codes={[""]} />
            </h1>
            <div>
                <Author author={justASimpleDeclarationOfLove.author} />
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
