import styles from "./poems.module.css"

export default function Author(props: { author: string }) {
    return (
        <h3 className={styles.author}>
            by <span style={{ textTransform: "none" }}> {props.author} </span>
        </h3>
    )
}