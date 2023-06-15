import styles from "./poems.module.css"

export default function PoemAuthor(props: { author: string }) {
    return (
        <h3 className={`font-sans mb-4 md:mb-8 text-lg md:text-2xl text-amber-700`}>
            by <span style={{ textTransform: "none" }}> {props.author} </span>
        </h3>
    )
}