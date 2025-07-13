import styles from "../styles/price_card_details.module.css"

export default function PriceCardDetails({firstTitle, SecondTitle}) {
    return (
        <div className={styles.container}>
            <div>{firstTitle}</div>
            <div>{SecondTitle}</div>
        </div>
    )
}