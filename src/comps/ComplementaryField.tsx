import {FC} from "react";
import {useRouter} from "next/router";

interface ComplementaryFieldProps {
    title:string,
    id:string
}

const ComplementaryField:FC<ComplementaryFieldProps> = ({title, id}) => {

    const router = useRouter()

    return (
        <div className={"cursor-pointer"} onClick={()=>{
            router.push(`/product/${id}`)
        }}>
            <h3>{title}</h3>
        </div>
    )
}
export default ComplementaryField