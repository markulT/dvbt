import Navbar from "@/comps/Navbar";
import {ReactNode} from "react";

type LayoutProps = {
    children:ReactNode;
}

const Layout = ({children}:LayoutProps) => {
    return (
        <>
            <Navbar />
            <main className={"min-h-screen"}>
                {children}
            </main>
        </>
    )
}
export default Layout