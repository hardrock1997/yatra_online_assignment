"use client"

import Header from "@/components/Header"
import back_button from "../../assets/back_button.svg"
import HotelsRouteBody from "../../components/HotelsRouteBody"
import { useEffect} from "react"
import { useRouter } from "next/navigation"
import {useHotelContext} from "../HotelDetailsContextProvider"
import Loading from "@/components/Loading"
import Button from "@/components/Button"



export default function HotelsRoutePage({ searchParams }) {

    const {setQueryParams, hotelDetails, queryParams,loading} = useHotelContext();
    const router = useRouter()

    async function getQueryParams() {
        const details=await searchParams
        setQueryParams(details)
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