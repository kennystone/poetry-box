import { BookMania } from './fonts/Bookmania'
import Image from 'next/image'
import UplandsSvg from "./images/UplandsSvg"
import Link from 'next/link'

const LayoutFooter = () => {
    return <div className="my-14">
        <div className="flex items-center justify-center">
            <Link href="/poems">
                <h3 className={`${BookMania.className} text-2xl p-2 text-center text-regal-700 underline`}>little poetry box</h3>
            </Link>
        </div>
        <div className="flex items-center justify-center">
            <div className="px-7">
                <UplandsSvg className="mt-4 mb-6 stroke-regal-500" width="120" />
            </div>
        </div>
        <h3 className="text-center text-regal-500 text-s">A project by K+M</h3>
        <h3 className="text-center text-regal-500 text-s">Berkeley, California</h3>
    </div >
}

export default LayoutFooter