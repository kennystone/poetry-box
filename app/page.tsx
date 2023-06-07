import styles from './page.module.css'
import Swash from "./swash"


export default function Home() {
  //const ss = (n: number) => ({ fontFeatureSettings: `"ss${n}"` })
  return (
    <main className={styles.main}>
      <div className={styles.poem}>
        <h1><Swash letter="J" codes={["10"]} />ust a Simple Declaration of Love</h1>
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

        <p>
          I look at the clouds push off against the lighter blue
        </p>

        <p>
          and
        </p>
        <p>
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
