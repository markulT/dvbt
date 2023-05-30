import {MapContainer, Marker, Polyline, TileLayer, useMapEvents} from "react-leaflet";
import {useEffect, useState} from "react";
import L, {polyline} from 'leaflet'
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';


interface IMarker {
    lat: number,
    long: number,
    name?: string
}

export default function UtilMap({edit}) {
    //48.76220603701694, 30.21884818569823
    const [marker, setMarker] = useState<IMarker>({
        lat: 48.76220603701694, long: 30.21884818569823
        // lat:48.76220603701694, long:30.21884818569823
    })
    const dvbtArr: IMarker[] = [
        {lat: 49.84795747305524, long: 24.036910502596022, name: "Lviv tower"},
        {lat: 49.956321096529564, long: 24.394270653331052, name: "Хз де"},
        {lat: 47.03442571455317, long: 28.861008978888464, name: "цигани і вино"},
        {lat: 48.54372460927545, long: 32.23876684264849}
    ]
    const rad = (x): number => x * Math.PI / 180;
    const getDistance = (p1: IMarker, p2: IMarker): number => {
        const R: number = 6378137
        const dLat = rad(p1.lat - p2.lat)
        const dLong = rad(p1.long - p2.long)
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(p1.lat)) *
            Math.cos(rad(p2.lat)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const d = R * c;
        return d;
    }

    //a

    function findClosest(current: IMarker, arr: IMarker[]): IMarker {
        let closest: IMarker = arr[0];
        for (let marker of arr) {
            let d = getDistance(current, marker)
            let currentPos = getDistance(current, closest)
            if (d < currentPos) {
                closest = marker;
            }
        }
        return closest
    }

    const closestTower = findClosest(marker, dvbtArr)
    const customIcon = L.icon({
        iconUrl: 'marker-icon.png',
        iconSize: [30, 30]
    })
    const userLocation = L.icon({
        iconUrl:'graydot.png',
        iconSize:[30,30]
    })

    // useEffect(() => {
    //     const map = L.map('map')
    //     // @ts-ignore
    //     const geocoder = L.Control.Geocoder.nominatium()
    //     // @ts-ignore
    //     const control = L.Control.geocoder({
    //         geocoder
    //     }).addTo(map)
    //
    //     control.on('markgeocode', (e) => {
    //         // e.geocode.center.lat
    //         setMarker({lat:e.geocode.center.lat, long: e.geocode.center.long});
    //     });
    //
    //     map.locate({ setView: true });
    //     map.on('locationfound', (e) => {
    //         setMarker({lat:e.latlng.lat, long:e.latlng.lng});
    //     });
    //
    // }, [])

    useEffect(()=>{
        if('geolocation' in navigator) {
            getCurrentPosition()
        }
    },[])

    useEffect(()=>{
        if('geolocation' in navigator) {
            getCurrentPosition()
        }
    }, [edit])
    function getCurrentPosition() {
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                setMarker({lat:position.coords.latitude, long:position.coords.longitude})
            }, (error) => {
                console.log('error')
                console.error(error.message)
            }
        )
    }

    function MapClickHandler() {
        const map = useMapEvents({
            click(e) {
                setMarker({lat:e.latlng.lat, long:e.latlng.lng})
            }
        })
        return null
    }

    return (
        <div id={"map"} className={"w-full h-full"}>
            <MapContainer
                zoom={5}
                center={[marker.lat, marker.long]}
                className={"w-full h-full"}
            >
                <MapClickHandler />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker icon={customIcon} position={[marker.lat, marker.long]} className={"w-[50px] h-[50px]"}></Marker>
                <Marker icon={customIcon} position={[closestTower.lat, closestTower.long]}/>
                <Polyline positions={[
                    [marker.lat, marker.long],
                    [closestTower.lat, closestTower.long]
                ]} color={"red"}/>
            </MapContainer>
        </div>
    )
}
