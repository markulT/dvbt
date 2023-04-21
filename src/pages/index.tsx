import Image from 'next/image'
import { Inter } from 'next/font/google'
import {useEffect, useState} from "react";
import {MapContainer} from "react-leaflet";
import UtilMap from "@/components/utilMap";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ['latin'] })

interface IMarker {
  lat:number,
  long:number
}

const MapWithNoSSR = dynamic(()=>import('@/components/utilMap'), {ssr:false})

export default function Home() {

  const [marker, setMarker] = useState<IMarker | null>({
    lat:49.86953090832337, long:23.94880905239156
  })
  const [inBrowser, setInBrowser] = useState<boolean>(false)
  useEffect(()=>{
    setInBrowser(true)
    console.log('nigga')
    return ()=>{
      setInBrowser(false)
    }
  },[])

//asfasdf
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {inBrowser && <MapWithNoSSR />}
    </main>
  )
}
