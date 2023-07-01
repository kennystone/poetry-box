const PoemFooter = ({ date }: { date: Date }) => {
    const dateStr = date.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
    });
    return <p className="text-slate-900">A poem for {dateStr}</p>
}

export default PoemFooter