import { BookMania } from "./fonts/Bookmania"
import Divider from "./Divider"

const PageHeader = ({ text }: { text: string }) => {
    return <div>
        <div className="">
            <h3 className="text-left sm:text-center text-base md:text-lg font-serif text-yellow-900">{text}</h3>
            <Divider />
        </div>
    </div>
}

export default PageHeader