import Link from 'next/link'
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`contenedor ${styles.contenido}`}>
                <nav className={styles.nav}>
                    <Link href='/'>Inicio</Link>
                    <Link href='/nosotros'>Nostros</Link>
                    <Link href='/blog'>Blog</Link>
                    <Link href='/tienda'>Tienda</Link>
                </nav>
                <p className={styles.copyrigth}>Todos los derechos reservados</p>
            </div>
        </footer>
    )
}

export default Footer