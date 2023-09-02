import { BookMania } from './fonts/Bookmania'
import Image from 'next/image'
import uplandsImg from './images/uplands.svg'
import UplandsSvg from "./images/UplandsSvg"
import resolveConfig from 'tailwindcss/resolveConfig'
import { content, theme } from '../tailwind.config.js'


const getRegal = () => {
    const fullConfig = resolveConfig({
        content,
        theme,
    })
    const colors = fullConfig?.theme?.colors

    let regal = "black" // fallback color if undefined

    if (colors !== undefined) {
        if (typeof colors.regal !== 'string' && colors.regal !== undefined) {
            if (typeof colors.regal["500"] === 'string')
                regal = colors.regal["500"]
        }
    }
    return regal
}

const LayoutFooter = () => {
    const unused1 = <UplandsSvg width="80" />
    const unused2 = <Image className="pb-2" src={uplandsImg} alt="Tutor House" width="120" />

    return <div className="my-14">
        <div className="flex items-center justify-center">
            <h3 className={`${BookMania.className} text-2xl p-2 text-center text-regal-700 underline`}>little poetry box</h3>
        </div>
        <div className="flex items-center justify-center">
            <div className="px-7">
                <UplandsSvg className="" width="120" stroke={getRegal()} />
            </div>
        </div>
        <h3 className="text-center text-regal-500">A project by K+M</h3>
        <h3 className="text-center text-regal-500">Berkeley, California</h3>
    </div >
}

export default LayoutFooter