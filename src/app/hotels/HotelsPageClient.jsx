"use client"
export const dynamic = 'force-dynamic';

import Header from "@/components/Header"
import back_button from "../../assets/back_button.svg"
import HotelsRouteBody from "../../components/HotelsRouteBody"
import { useEffect} from "react"
import { useRouter } from "next/navigation"
import {useHotelContext} from "../HotelDetailsContextProvider"
import Loading from "@/components/Loading"
import Button from "@/components/Button"
import { useSearchParams } from 'next/navigation';

// { searchParams }

export default function HotelsRoutePage() {

    const {setQueryParams, hotelDetails, queryParams,loading} = useHotelContext();
    const router = useRouter()
    const searchParams = useSearchParams();  

    async function getQueryParams() {
            const obj = Object.fromEntries(searchParams.entries());
            console.log(obj)
            setQueryParams(obj);
    }

    function handleBack() {
        router.push("/")
    }

    useEffect(()=>{
        getQueryParams()
    },[])

    if(loading) {
        return <Loading/>
    }
    
    return (
        <div >
            {!loading && <Header headerButton={
                <Button onClick={handleBack} styleType="custom" buttonText="Back to Search" imageSrc={back_button}/>
            }
            hotelDetails={hotelDetails}
            />}
           {!loading && <HotelsRouteBody/>}
        </div>
    )
}