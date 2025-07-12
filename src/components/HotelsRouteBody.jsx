import HotelsRouteUpperSection from "../components/HotelsRouteUpperSection"
import HotelsRouteLowerSection from "../components/HotelsRouteLowerSection"
import styles from "../styles/hotels_route_body.module.css"
export default function HotelsRouteBody() {

    return (
        <section className={styles.container}>
            <HotelsRouteUpperSection/>
            <HotelsRouteLowerSection/>
        </section>
    )
}