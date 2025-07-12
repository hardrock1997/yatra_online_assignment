"use client"

import Header from "@/components/Header"
import styles from "../../../styles/hotels_route_body.module.css"
import back_button from "../../../assets/back_button.svg"
import Image from "next/image"
import { useRouter } from "next/navigation"
import {useHotelContext} from "../../HotelDetailsContextProvider"
import HotelContentBody from "../../../components/HotelContentBody"


export default function HotelById() {

    const {queryParams} = useHotelContext()
    const router = useRouter()

    function handleBack() {
        const query = new URLSearchParams({...queryParams}).toString();
        router.push(`/hotels?${query}`);
    }

    return (
        <div>
              <Header headerButton={
                <button className={styles.custom_back_button} onClick={handleBack}>
                    <Image src={back_button} width={30} height={30} alt="back_button_header"/>
                        Back to Results
                </button>
            }
            />
            <HotelContentBody/>
        </div>
    )
}