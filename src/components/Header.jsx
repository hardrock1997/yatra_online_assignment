import styles from "../styles/header.module.css"
export default function Header(props) {

    const {image, headerTitle}=props

    
    const containerClass = image && headerTitle
    ? styles.container_with_image_and_yatra_heading
    : styles.container_with_stats_and_button;

    return (
        <header className={containerClass}>
        <div>{image}</div>
        <div className={styles.yatra_heading}>{headerTitle}</div>
        </header>
    )

}