import ProductCard from "@/comps/ProductCard";
import {AiOutlinePlus} from "react-icons/ai";
import ExpandableInput from "@/comps/ExpandableInput";
import React, {FC, useEffect, useRef, useState} from "react";
import Navbar from "@/comps/Navbar";
import {useAppDispatch, useAppSelector} from "@/store/hooks/redux";
import {FaMinus, FaPlus} from "react-icons/fa";
import {orderSliceActions} from "@/store";
import {intentOrder} from "@/store/reducers/orders/orderThunks";
import CheckoutProductCard from "@/comps/CheckoutProductCard";
import {useRouter} from "next/router";
import Head from "next/head";
import {getSettlements, getWarehouses} from "@/store/services/NovaPostService";
import Select, {ActionMeta, GroupBase, StylesConfig} from "react-select";
import AsyncSelect from "react-select/async";
import {ValueType} from "tailwindcss/types/config";
import {BiTrash, BiErrorCircle} from "react-icons/bi";
import {Product} from "@/store/models/Product";
import PopupLogin from "@/comps/PopupLogin";

const Checkout:FC = () => {

    const dispatch = useAppDispatch()
    const orderItemList = useAppSelector((state)=>state.order.createOrder.productList)
    const [locationText, setLocationText] = useState<string>('')
    const router = useRouter()

    function increaseQuantity(quantity:number, id:string) {
        dispatch(orderSliceActions.addQuantity({id:id, quantity:quantity}))
    }
    function decreaseQuantity(quantity:number, id:string) {
        dispatch(orderSliceActions.subtractQuantity({id:id, quantity:quantity}))
    }

    const userEmail = useAppSelector((state)=>state.auth.email)
    async function submit() {
        console.log("email")
        console.log(userEmail)
        if(!userEmail) {
            setLoginPopupVisible(true);
        } else {
            //@ts-ignore
            let location = `${searchedCityRef.current} ${searchedWarehouseRef.current.label}`
            console.log(location)
            console.log(searchedCityRef.current)
            console.log(searchedWarehouseRef.current)
            //@ts-ignore
            if (orderItemList == [] || location === '') {
                return
            }
            const orderItemListRequest = orderItemList.map(orderItem=>{
                return {productId:orderItem.product.id?.toString(), quantity:orderItem.quantity}
            })
            // @ts-ignore
            await dispatch(intentOrder({productList:orderItemListRequest, location:location || ""}))
            dispatch(orderSliceActions.clearCart())
            router.push('checkout/status');
        }
    }


    interface SettlementOption {
        value: string;
        label: string;
    }

    interface WarehouseOption {
        value: string;
        label: string;
    }

    const [searchedCity, setSearchedCity] = useState<string>('');
    const searchedCityRef = useRef<string>('');

    const [searchedWarehouse, setSearchedWarehouse] = useState<string>('')
    const searchedWarehouseRef = useRef<string>('');

    const [settlementsOptions, setSettlementsOptions] = useState<SettlementOption[]>([]);
    const [warehousesOptions, setWarehousesOptions] = useState<WarehouseOption[]>([]);

    const filterSettlements = (inputValue: string) => {
        return settlementsOptions.filter((settlement) =>
            settlement.label.toLowerCase().includes(inputValue.toLowerCase())
        );
    };

    const filterWarehouses = (inputValue: string) => {
        const normalizedInput = inputValue.toLowerCase().trim();
        return warehousesOptions.filter((warehouse) =>
            warehouse.value.toLowerCase().includes(normalizedInput)
        );
    };


    const promiseOptions = (inputValue: string) =>
        new Promise<SettlementOption[]>(async (resolve) => {
            try {
                const settlements = await getSettlements(inputValue);
                const formattedOptions = settlements.map((settlement) => {
                    const regions = settlement.RegionsDescription.trim() === '' ? '' : ' - ' + settlement.RegionsDescription;
                    const label = settlement.AreaDescription + regions + ' - ' + settlement.Description;
                    return {
                        value: settlement.Description,
                        label: label,
                    };
                });
                setSettlementsOptions(formattedOptions);
                resolve(filterSettlements(inputValue));
            } catch (error) {
                console.error('Error fetching settlement settlementsOptions:', error);
                resolve([]); // If there's an error, pass an empty array as settlementsOptions
            }
        });

    const promiseWarehousesOptions = (inputValue: string) =>
        new Promise<WarehouseOption[]>(async (resolve) => {
                setWarehousesOptions([]);
                console.log(searchedCityRef.current + 'current')
                const warehouses = await getWarehouses(inputValue, searchedCityRef.current);
                const formattedOptions = warehouses.map((warehouse) => {
                    const warehousesAddress = '№'+ warehouse.Number + ', ' + warehouse.ShortAddress
                    return {
                        value: warehouse.Number,
                        label: warehousesAddress,
                    };
                });
                setWarehousesOptions(formattedOptions);
                resolve(formattedOptions);
        });

    useEffect(() => {
        promiseWarehousesOptions('1')
    }, [searchedCityRef.current]);

    useEffect(() => {
        console.log('searchedCityRef:', searchedCityRef.current);
    }, [searchedCityRef.current]);

    useEffect(() => {
        console.log('searchedWarehouseRef:', searchedWarehouseRef.current);
    }, [searchedWarehouseRef.current]);

    //@ts-ignore
    const colourStyles: StylesConfig = {
        control: (styles) => ({ ...styles,
            backgroundColor: 'white',
            borderWidth: 0,
            outlineWidth: 0,
            paddingTop: 6,
            paddingBottom: 6,
            borderRadius: 8,
            outlineColor: "yellow",
            borderColor: "yellow"

        }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            const color = "yellow";
            return {
                ...styles,
                borderWidth: 0,
                outlineWidth: 0,
                borderColor: "#1B2845",
                backgroundColor: isDisabled ? 'red' : 'white',
                color: '#1B2845',
                cursor: isDisabled ? 'not-allowed' : 'default',
            };
        },
    };

    const handleSettlementChange = (newValue: SettlementOption, actionMeta: ActionMeta<SettlementOption>) => {
        if (newValue) {
            const selectedOption = newValue;
            setSearchedCity(selectedOption.value);
            searchedCityRef.current = selectedOption.value;
            console.log(searchedCityRef.current);
        }
    };
    //@ts-ignore
    const handleWarehouseChange = (selectedOption) => {
        setSearchedWarehouse(selectedOption);
        searchedWarehouseRef.current = selectedOption;
        console.log(searchedWarehouseRef.current);
    };

    function removeFromCart(product:Product) {
        dispatch(orderSliceActions.removeFromCartAction(product))
    }
    const [loginPopupVisible, setLoginPopupVisible] = useState<boolean>(false);

    return (

        <div className="bg-white-bg min-h-screen w-full">
            <Head>
                <title>My T2 - Кошик</title>
                <meta name="description" content="Зробіть своє замовлення простим і зручним на сторінці My T2 - вашого надійного постачальника антен та передатчиків DVB-T2. Заповнюйте форму замовлення згідно своїх вподобань і потреб, і додавайте бажані товари до свого кошика. Наша інтуїтивно зрозуміла система кошика дозволить вам легко переглядати та керувати своїми замовленнями перед оформленням. З My T2 ви можете бути впевнені, що ваші антени та передатчики будуть відповідати найвищим стандартам якості. Зробіть своє замовлення простим і зручним з My T2 - вашим надійним партнером у покупці антен та передатчиків DVB-T2." />
                <meta name="keywords" content="DVB-T2 антени, DVB-T2 передатчики, ефірні антени, ефірне телебачення, антени для цифрового телебачення, передатчики для ефірного телебачення"/>
            </Head>
            <PopupLogin visible={loginPopupVisible} setVisible={setLoginPopupVisible}/>
            <Navbar />
            <main className="flex flex-col w-full relative">
                <article>
                    <section className="mx-4 sm:mx-10 md:mx-20 lg:mx-28 flex flex-col">
                        <h1 className="lg:text-4xl text-2xl text-blue-5 font-bold">Каталог зовнішніх антен</h1>
                        <div className="w-full p-3 bg-white drop-shadow-2xl rounded-xl mt-4">
                            <div className="flex justify-center flex-col lg:flex-row lg:justify-between">
                                <div className="flex flex-col items-center lg:items-start">
                                    <p className="text-blue-5 text-2xl font-medium">Кошик:</p>
                                    <div className="lg:flex lg:gap-4 items-center justify-start">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4">
                                            {orderItemList.map((orderItem)=> {
                                                    return (
                                                        <div key={orderItem.product.id?.toString()}>
                                                            <ProductCard title={orderItem.product.title}
                                                                         imgName={orderItem.product.imgName}
                                                                         price={orderItem.product.price}
                                                                         id={orderItem.product.id?.toString() || ""}
                                                                         name={orderItem.product.name}/>
                                                            <div className={"text-blue-6 flex items-center w-full justify-around my-4 lg:my-6"}>
                                                                <BiTrash className={"cursor-pointer"} onClick={()=>{
                                                                    removeFromCart(orderItem.product)
                                                                }} />
                                                                <FaMinus className={"cursor-pointer"} onClick={()=>{
                                                                    //@ts-ignore
                                                                    decreaseQuantity(1, orderItem.product.id?.toString())
                                                                }} />
                                                                <span className={"text-2xl"}>
                                                                {orderItem.quantity}
                                                                </span>
                                                                <FaPlus className={"cursor-pointer"} onClick={()=>{
                                                                    //@ts-ignore
                                                                    increaseQuantity(1, orderItem.product.id?.toString())
                                                                }} />
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            )}
                                        </div>
                                        <div
                                            className="flex rounded-full justify-center hover:scale-110 transition-all duration-500 mt-4 lg:mt-0">
                                            <button
                                                className="flex items-center justify-center p-4 bg-white drop-shadow-xl rounded-full cursor-pointer" onClick={()=>{router.push('/catalogue')}}>
                                                <AiOutlinePlus className={"text-blue-6"}/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-end justify-center font-medium mt-4 lg:mt-0">
                                    <p className="text-2xl text-blue-5">До сплати: {orderItemList.reduce((total, orderItem)=>total + (orderItem.product.price * orderItem.quantity), 0)} грн</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="mx-4 sm:mx-10 md:mx-20 lg:mx-28 mt-10">
                        <h1 className="lg:text-4xl text-2xl text-blue-5 font-bold">Доставка та оплата</h1>
                        <div className="mt-4 grid lg:grid-cols-3 lg:grid-rows-3 md:grid-cols-2 md:grid-rows-2  gap-4 lg:gap-x-60">

                            {/*<ExpandableInput label="Місто доставки" options={['Львів', 'Київ', 'Івано-Франківськ']}/>*/}

                            {/*<ExpandableInput label="Відділення/адреса" options={['Львів', 'Київ', 'Івано-Франківськ']}/>*/}


                            {/*<SearchInput placeholder={"Виберіть місто"} handleInputChange={handleSettlementsInputChange} handleOptions={handleSettlementsOptions} disabled={settlementsDisabled}/>*/}
                            {/*<SearchInput placeholder="Виберіть відділення" handleInputChange={handleWarehousesInputChange} handleOptions={handleWarehousesOptions} disabled={warehousesDisabled}/>*/}

                            <div className={"w-full"}>
                                <label className="tracking-wide text-blue-5 text-xs font-bold ml-2" htmlFor="grid-state">
                                    Місто доставки
                                </label>
                                <AsyncSelect
                                    //@ts-ignore
                                    styles={colourStyles}
                                    placeholder={"Виберіть місто"}
                                    //@ts-ignore
                                    onChange={handleSettlementChange}
                                    cacheOptions
                                    //@ts-ignore
                                    loadOptions={promiseOptions}
                                />
                            </div>
                            <div>
                                <label className="tracking-wide text-blue-5 text-xs font-bold ml-2" htmlFor="grid-state">
                                    Відділення Нової Пошти
                                </label>
                                <AsyncSelect
                                    styles={colourStyles}
                                    placeholder={"Виберіть відділення"}
                                    onChange={handleWarehouseChange}
                                    cacheOptions
                                    loadOptions={promiseWarehousesOptions}
                                />
                            </div>


                            {/*<div className={" flex flex-col min-w-[60%]"}>*/}
                            {/*    <label htmlFor={"location"} className={"text-blue-6 text-xl font-medium mb-0.5"}>Локація</label>*/}
                            {/*    <input className={"drop-shadow-2xl p-2 rounded-lg text-blue-6 bg-white w-full"} id={"location"} placeholder={""} type="text" value={locationText || ""} onChange={(e)=>{setLocationText(e.target.value)} }/>*/}
                            {/*</div>*/}

                            <button className={"px-8 mb-8  lg:w-auto w-full py-2 md:py-3 mt-4 bg-gradient-to-l from-yellow-4 to-blue-1 text-white rounded-lg md:text-2xl duration-500 transition-all hover:from-blue-1 hover:to-yellow-4 hover:bg-gradient-to-r"}
                                    onClick={submit}>
                                Замовити
                            </button>


                        </div>
                    </section>
                </article>
            </main>
        </div>
    );
}
export default Checkout;
