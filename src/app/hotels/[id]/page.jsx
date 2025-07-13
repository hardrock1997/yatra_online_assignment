"use client"

import Header from "@/components/Header"
import back_button from "../../../assets/back_button.svg"
import { useRouter } from "next/navigation"
import {useHotelContext} from "../../HotelDetailsContextProvider"
import HotelContentBody from "../../../components/HotelContentBody"
import Button from "@/components/Button"
import { useEffect} from "react"


export default function HotelById({ params }) {


    const {queryParams,setQueryParams} = useHotelContext()
    const router = useRouter()

    async function getHotelId() {
        const param = await params
        const queryParamsCopy = structuredClone(queryParams)
        queryParamsCopy.id=param.id
        setQueryParams(queryParamsCopy)
    }

    useEffect(()=>{
        getHotelId()
    },[queryParams.city])




    function handleBack() {
        const query = new URLSearchParams({...queryParams}).toString();
        router.push(`/hotels?${query}`);
    }

    return (
        <div>
              <Header headerButton={
                <Button onClick={handleBack} styleType="custom" buttonText="Back to Results" imageSrc={back_button}/>
            }
            />
            <HotelContentBody/>
        </div>
    )
}