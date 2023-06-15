interface Props {
    children: string | JSX.Element | JSX.Element[],
    narrow?: boolean,
    serif?: boolean,
    style?: React.CSSProperties
}

export const PoemParagraph = ({ children, style = {}, serif = false, narrow = false }: Props): JSX.Element => {
    const margin = narrow ? "my-0.5 md:my-2" : "my-4 md:my-8"
    const font = serif ? "font-serif" : "font-sans"
    return <p className={`text-base text-slate-800 md:text-lg ${margin} ${font}`} style={style}>{children}</p>
};