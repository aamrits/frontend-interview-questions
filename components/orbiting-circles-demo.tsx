import { OrbitingCircles } from "@/components/ui/orbiting-circles"
import { SiReact, SiCss } from "react-icons/si";
import { FaNodeJs, FaHtml5 } from "react-icons/fa";
import { MdCss } from "react-icons/md";

export function OrbitingCirclesComponent() {
    return (
        <div className="relative flex h-125 w-full flex-col items-center justify-center overflow-hidden">
            <OrbitingCircles iconSize={60}>
                <FaNodeJs className="text-black" size={'3em'} />
                <SiReact className="text-black" size={'3em'} />
                <FaHtml5 className="text-black" size={'3em'} />
                <MdCss className="text-black" size={'4em'} />
            </OrbitingCircles>

            <OrbitingCircles iconSize={40} radius={100} reverse speed={2}>
                <FaNodeJs className="text-yellow-400" size={'3em'} />
                <SiReact className="text-cyan-400" size={'3em'} />
                <FaHtml5 className="text-orange-500" size={'3em'} />
                <SiCss className="text-blue-500" size={'3em'} />
            </OrbitingCircles>
        </div>
    )
}
