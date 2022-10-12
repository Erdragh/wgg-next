import styles from "./footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.inner} confine-width`}>
                Developed by Erdragh
            </div>
        </footer>
    )
}