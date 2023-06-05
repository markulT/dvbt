import {FC, useRef} from "react";


export default function Slider({...children}) {

    const slider = useRef(null)

    return (
        <div className={"flex"} ref={slider}>

        </div>
    )
}