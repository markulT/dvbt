
import {BiErrorCircle} from 'react-icons/bi';
import {useRouter} from "next/router";
import React from "react";

interface PopupModalProps {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopupModal: React.FC<PopupModalProps> = ({ visible, setVisible }) => {
    const router = useRouter();

    return (
        <div
            className={`popup absolute min-w-screen left-0 right-0 top-0 backdrop-blur-sm z-[9999] items-center justify-center min-h-full ${visible ? "flex" : "hidden"}`}
        onClick={(e) => {
            //@ts-ignore
            if (e.target.closest('div.popup') == e.target) {
                setVisible(false)
            }
        }}
        >
            <div
                className="bg-white text-blue-5 self-center drop-shadow-2xl absolute z-50 flex flex-col p-4 md:p-6 rounded-xl">
                <BiErrorCircle className="self-center text-yellow-4 text-6xl md:text-8xl mb-4"/>
                <h3 className="self-center text-center text-blue-500 text-xl md:text-2xl font-bold mb-2 max-w-2xs">Упс, щось <br/>пішло не так :(</h3>
                <p className="self-center text-sm sm:text-md md:text-lg text-center text-blue-500 max-w-xs">Щоб зробити замовлення - вам слід <br/>ввійти або зареєструватись</p>
                <div className="flex xl:flex-row flex-col gap-4 justify-around mt-4">
                    <button className="bg-gradient-to-l from-yellow-4 to-blue-1 text-white font-semibold py-2.5 px-16 rounded-xl hover:scale-105 transition-all duration-500"
                    onClick={() => router.push('/auth/login')}
                    >Ввійти</button>
                    <button className="bg-gradient-to-l from-blue-3 to-blue-1 text-white font-semibold py-2.5 px-16 rounded-xl hover:scale-105 transition-all duration-500"
                    onClick={() => setVisible(false)}
                    >Пізніше</button>
                </div>
            </div>
        </div>
    );
};

export default PopupModal;
