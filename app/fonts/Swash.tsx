
const Swash = ({ letter, codes, smallCaps }: { smallCaps: boolean, letter: string, codes: Array<string> }) => {
    const codesStr = codes.map((c) => { return `'ss${c}'` }).join(', ')
    const fontVariant = smallCaps ? "small-caps" : ""
    return <span style={{ fontFeatureSettings: `${codesStr}`, fontVariant: fontVariant }}>{letter}</span>
};

export default Swash