
const Swash = ({ letter, codes }: { letter: string, codes: Array<string> }) => {
    const codesStr = codes.map((c) => { return `'ss${c}'` }).join(', ')
    return <span style={{ fontFeatureSettings: `${codesStr}` }}>{letter}</span>
};

export default Swash