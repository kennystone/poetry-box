import styles from "./poems.module.css"

export default function PoemAuthor(props: { author: string }) {
    return (
        <h3 className={`${styles.author} text-xl md:text-2xl`}>
            by <span style={{ textTransform: "none" }}> {props.author} </span>
        </h3>
    )
}