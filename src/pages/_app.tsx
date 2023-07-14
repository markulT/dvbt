import '@/styles/globals.css'
import Layout from "@/components/Layout";
import {Provider} from "react-redux";
import {store} from "@/store";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {Head} from "next/document";

//@ts-ignore
export default function App({Component, pageProps}) {

    const router = useRouter()
    useEffect(()=>{
        //@ts-ignore
        const handleRouteChange = (url) => {
            if (performance.navigation.type === 2) {
                // Page is being loaded from back/forward cache
                // Perform necessary actions here
            }
        }
        router.events.on('routeChangeStart', handleRouteChange);

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    },[])

    return (
        <Provider store={store}>

            <Component {...pageProps} />
        </Provider>
    )
}
