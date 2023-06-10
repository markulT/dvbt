import {FC, useEffect, useRef, useState} from "react";
import {useInView} from "react-intersection-observer";

interface CounterProps {
    endValue:number,
    duration:number
}

const CounterAnimation:FC<CounterProps> = ({endValue, duration}) => {

    const counter = useRef(null)
    const [count, setCount] = useState<number>(0)
    const [isVisible, setIsVisible] = useState<boolean>(false)
    // const {ref, inView} = useInView({
    //     triggerOnce:false,
    //     threshold:0.1
    // })

    useEffect(()=>{
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry=>{
                if(entry.isIntersecting) {
                    setIsVisible(true)
                    // observer.unobserve(entry.target)
                } else {
                    setIsVisible(false)
                }

            })
        }, {threshold:0.1})

        // @ts-ignore
        observer.observe(counter.current)

        return ()=> {
            observer.disconnect()
        }

    },[])

    useEffect(()=>{
        if (isVisible) {
            const start = 0;
            const step = 10;
            let current = start;

            const timer = setInterval(() => {
                if (current >= endValue) {
                    clearInterval(timer);
                    return;
                }

                current += step;
                setCount(current);
            }, duration);

            return () => clearInterval(timer);
        }
    },[isVisible, endValue, duration])

    return (
        <div ref={counter}>
            <h3 className={"text-7xl font-bold"}>{count.toFixed(0)}</h3>
        </div>
    )
}
export default CounterAnimation