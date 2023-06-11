import styles from './../poems.module.css'
import Swash from "../../swash"
import Poem from "../poem"
import Author from "../author"

export const patience: Poem = new Poem(
    "patience",
    "Ross Gay",
    "patience",
    new Date("2023-11-01")
)

export default function Patience() {
    return (
        <div className={styles.poem}>
            <h1 style={{ fontSize: "2em", color: "#111" }}>
                patie<Swash codes={["18"]} letter="n" />ce
            </h1>
            <Author author={patience.author} />
            <div className={styles.sansSerif}>

                <p className={styles.narrow}>
                    Call it sloth; call it sleaze;
                </p>
                <p className={styles.narrow}>
                    call it bummery if you please;
                </p>
                <p className={styles.narrow}>
                    I’ll call it patience;
                </p>
                <p className={styles.narrow}>
                    I’ll call it joy, this,
                </p>
                <p className={styles.narrow}>
                    my supine congress
                </p>
                <p className={styles.narrow}>
                    with the newly yawning grass
                </p>
                <p className={styles.narrow}>
                    and beetles chittering
                </p>
                <p className={styles.narrow}>
                    in their offices
                </p>
                <p className={styles.narrow}>
                    beneath me, as I
                </p>
                <p className={styles.narrow}>
                    nearly drifting to dream
                </p>
                <p className={styles.narrow}>
                    admire this so-called weed which,
                </p>
                <p className={styles.narrow}>
                    if I guarded with teeth bared
                </p>
                <p className={styles.narrow}>
                    my garden of all alien breeds,
                </p>
                <p className={styles.narrow}>
                    if I was all knife and axe
                </p>
                <p className={styles.narrow}>
                    and made a life of hacking
                    would not have burst gorgeous forth and beckoning
                </p>
                <p className={styles.narrow}>
                    these sort of phallic spires
                </p>
                <p className={styles.narrow}>
                    ringleted by these sort of vaginal blooms
                </p>
                <p className={styles.narrow}>
                    which the new bees, being bees, heed;
                </p>
                <p className={styles.narrow}>
                    and yes, it is spring, if you can’t tell
                </p>
                <p className={styles.narrow}>
                    from the words my mind makes
                </p>
                <p className={styles.narrow}>
                    of the world, and everything
                </p>
                <p className={styles.narrow}>
                    makes me mildly or more
                </p>
                <p className={styles.narrow}>
                    hungry—the worm turning
                </p>
                <p className={styles.narrow}>
                    in the leaf mold; the pear blooms
                </p>
                <p className={styles.narrow}>
                    howling forth their pungence
                </p>
                <p className={styles.narrow}>
                    like a choir of wet-dreamed boys
                </p>
                <p className={styles.narrow}>
                    hiking up their skirts; even
                </p>
                <p className={styles.narrow}>
                    the neighbor cat’s shimmy
                </p>
                <p className={styles.narrow}>
                    through the grin in the fence,
                </p>
                <p className={styles.narrow}>
                    and the way this bee
                </p>
                <p className={styles.narrow}>
                    before me after whispering
                </p>
                <p className={styles.narrow}>
                    in my ear dips her head
                </p>
                <p className={styles.narrow}>
                    into those dainty lips
                </p>
                <p className={styles.narrow}>
                    not exactly like one entering a chapel
                </p>
                <p className={styles.narrow}>
                    and friends
                </p>
                <p className={styles.narrow}>
                    as if that wasn’t enough
                </p>
                <p className={styles.narrow}>
                    blooms forth with her forehead dusted gold
                </p>
                <p className={styles.narrow}>
                    like she has been licked
                </p>
                <p className={styles.narrow}>
                    and so blessed
                </p>
                <p className={styles.narrow}>
                    by the kind of God
                </p>
                <p className={styles.narrow}>
                    to whom this poem is prayer.
                </p>
            </div>
        </div>
    )
}
