
export default function PoemAuthor(props: { author: string }) {
    return (
        <h3 className={`font-sans mb-4 md:mb-6 text-lg md:text-xl text-teal-700`}>
            by <span style={{ textTransform: "none" }}> {props.author} </span>
        </h3>
    )
}