import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNodejs } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandHtml5 } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { PiFileCssBold } from "react-icons/pi";

const Technology = () => {
    return(
        <div className=" pb-24">
            <h2 className="text-center text-4xl my-10">Technology</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">

                <div className="rounded-4xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-5xl text-cyan-400" />
                </div>

                <div className="rounded-4xl border-4 border-neutral-800 p-4">
                < SiMongodb className="text-5xl text-emerald-400" />
                </div>

                <div className="rounded-4xl border-4 border-neutral-800 p-4">
                <TbBrandNodejs className="text-5xl text-emerald-700" />
                </div>

                <div className="rounded-4xl border-4 border-neutral-800 p-4">
                <TbBrandJavascript className="text-5xl text-amber-200" />
                </div>

                <div className="rounded-4xl border-4 border-neutral-800 p-4">
                <TbBrandHtml5  className="text-5xl text-orange-400" />
                </div>

                <div className="rounded-4xl border-4 border-neutral-800 p-4">
                < PiFileCssBold className="text-5xl text-blue-500" />
                </div>

            </div>
        </div>
    )
}
export default Technology