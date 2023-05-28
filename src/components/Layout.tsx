import Navbar from "@/comps/Navbar";


export default function Layout({children}) {
    return (
        <>
            <Navbar />
            <main className={"min-h-screen"}>
                {children}
            </main>
        </>
    )
}