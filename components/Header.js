import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.css'
import { useRouter } from 'next/router'

const Header = ({ guitarra, carrito }) => {
    const router = useRouter();

    return (
        <header className={styles.header}>
            <div className='contenedor'>
                <div className={styles.barra}>
                    <Link href='/'>
                        <a>
                            <Image src='/img/logo.svg' width={400} height={100} alt='Imagen logo' />
                        </a>

                    </Link>

                    <nav className={styles.nav}>
                        <Link href='/'>Inicio</Link>
                        <Link href='/nosotros'>Nostros</Link>
                        <Link href='/blog'>Blog</Link>
                        <Link href='/tienda'>Tienda</Link>
                        <Link href='/carrito'>
                            <a className={styles.linkq}>
                                <Image layout='fixed' width={30} height={25} src='/img/carrito.png' alt='Icono carrito'></Image>
                                <span>
                                    {carrito.length > 0 ? (
                                        <p className={styles.cantidad}>{carrito.length}</p>
                                    ) : null}
                                </span>
                            </a>
                        </Link>

                    </nav>
                </div>
                {guitarra && (
                    <div className={styles.modelo}>
                        <h2>Modelo: {guitarra.nombre}</h2>
                        <p>{guitarra.descripcion}</p>
                        <p className={styles.precio}>$ {guitarra.precio}</p>
                        <Link href={`/guitarras/${guitarra.url}`}>
                            <a className={styles.enlace}>Ver Producto</a>
                        </Link>
                    </div>)}
            </div>
            {router.pathname === '/' && (
                <div className={styles.guitarra} >
                    <Image width={500} height={1200} layout='fixed' src='/img/header_guitarra.png' alt='Imagen Header Guitarra' />
                </div>

            )}
        </header>
    )
}

export default Header