import {FC} from "react";

interface CategoryItemProps {
    name: string,
    id: string,
    onClick:Function
}

const CategoryItem: FC<CategoryItemProps> = ({name, id, onClick}) => {
    return (
        //@ts-ignore
        <div className={"rounded-xl px-4 bg-blue-4 hover:bg-blue-5 transition-all duration-500 flex items-center justify-items-center cursor-pointer"} onClick={onClick}>
            <span className={"text-white text-xl p-3"}>
                {name}
            </span>
        </div>
    )
}
export default CategoryItem
