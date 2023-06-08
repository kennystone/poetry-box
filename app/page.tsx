import styles from './page.module.css'
import Swash from "./swash"


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.poem}>
        <h1 style={{ fontSize: "2em", color: "rgb(157, 58, 53);" }}>
          Just <Swash letter="a" codes={["01"]} /> Simple <Swash letter="D" codes={["11"]} />ecl<Swash letter="a" codes={["01"]} /><Swash letter="r" codes={["19"]} /><Swash letter="a" codes={["01"]} />tion o<Swash letter="f" codes={["14", "16"]} /> Lov<Swash letter="e" codes={[""]} />
        </h1>
        <div>
          <h3 style={{ fontSize: "1.1em" }}><span className="author">Nikki Giovanni</span></h3>
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
          Mother 'Possum with six youngsters on her back slowly like any other overburdened woman makes her way back home
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
    </main >
  )
}
