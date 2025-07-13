"use client"

import Header from "@/components/Header"
import back_button from "../../assets/back_button.svg"
import Image from "next/image"
import styles from "../../styles/hotels_route_body.module.css"
import HotelsRouteBody from "../../components/HotelsRouteBody"
import { useEffect} from "react"
import { useRouter } from "next/navigation"
import {useHotelContext} from "../HotelDetailsContextProvider"
import Loading from "@/components/Loading"



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


    useEffect(()=>{
        localStorage.setItem('city',queryParams.city)

    },[queryParams])

    if(loading) {
        return <Loading/>
    }
    
    return (
        <div >
            {!loading && <Header headerButton={
                <button className={styles.custom_back_button} onClick={handleBack}>
                    <Image src={back_button} width={30} height={30} alt="back_button_header"/>
                        Back to Search
                </button>
            }
            hotelDetails={hotelDetails}
            />}
           {!loading && <HotelsRouteBody/>}
        </div>
    )
}