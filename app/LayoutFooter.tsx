import { BookMania } from './fonts/Bookmania'
import Swash from './fonts/Swash'
import Image from 'next/image'
import uplandsImg from './images/uplands.svg'
import UplandsSvg from "./images/UplandsSvg"
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'

const LayoutFooter = () => {
    const unused1 = <UplandsSvg width="80" />
    const unused2 = <Image className="pb-2" src={uplandsImg} alt="Tutor House" width="120" />

    const { theme } = resolveConfig(tailwindConfig)
    const regal = theme.colors.regal

    const p = <Swash letter="p" codes={["14"]} />

    return <div className="my-14">
        <div className="flex items-center justify-center">
            <h3 className={`${BookMania.className} text-2xl p-2 text-center text-regal-700`}><span className="underline">little</span> <span className="underline">{p}oetry box</span></h3>
        </div>
        <div className="flex items-center justify-center">
            <div className="px-7">
                <UplandsSvg className="" width="120" stroke={regal["500"]} />
            </div>
        </div>
        <h3 className="text-center text-regal-500">A project by K+M</h3>
        <h3 className="text-center text-regal-500">Berkeley, California</h3>
    </div >
}

export default LayoutFooter