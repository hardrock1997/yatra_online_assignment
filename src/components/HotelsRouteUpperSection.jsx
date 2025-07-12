import styles from "../styles/hotels_route_body.module.css"
import {useHotelContext} from "../app/HotelDetailsContextProvider"

export default function HotelsRouteUpperSection() {

        const {hotelDetails,queryParams} = useHotelContext()

        function formatDateRange(start, end) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };

        const startDate = new Date(start).toLocaleDateString('en-US', options);
        const endDate = new Date(end).toLocaleDateString('en-US', options);

        return `${startDate} - ${endDate}`;
    }

    return (
        <div >
            <section className={styles.upper_section_container}>
                <section className={styles.left_sub_section_container}>
                    <h3 className={styles.location}>Hotels in {hotelDetails?.city?.length>0 ? hotelDetails?.city?.length>0:queryParams.city}</h3>
                    <h3 className={styles.dates}>
                        {formatDateRange(hotelDetails?.checkin, hotelDetails?.checkout)}
                        {
                            hotelDetails?.guests > 0 && (
                                <>
                                    <span> • </span>
                                    <span>{hotelDetails?.guests} Guest{hotelDetails?.guests > 1 ? "s" : ""}</span>
                                </>
                            )
                        }
                    </h3>
                </section>

                <section className={styles.right_sub_section_container}>
                    {
                        (
                            <h4 className={styles.hotelCount}>
                                {hotelDetails?.hotelsCount} Hotel{hotelDetails?.hotelsCount > 1 ? "s" : ""} Found
                            </h4>
                        )
                    }
                </section>
            </section>
        </div>
    )
}