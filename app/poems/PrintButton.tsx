"use client"

import { BookMania } from "@/app/fonts/Bookmania"

const PrintButton = () => {
    return (
        <button
            type="button"
            onClick={() => window.print()}
            aria-label="Print this poem"
            className={`${BookMania.className} print:hidden fixed top-4 right-4 z-10 rounded-full border border-rose-800/30 bg-amber-50/80 px-4 py-1.5 text-rose-800 backdrop-blur hover:underline`}
        >
            print
        </button>
    )
}

export default PrintButton
