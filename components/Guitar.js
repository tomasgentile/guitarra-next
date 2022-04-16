import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Guitar.module.css';

const Guitar = ({ guitarra }) => {
    const { nombre, precio, imagen, descripcion, url } = guitarra;

    return (
        <div className={styles.guitarra}>
            <Image layout='responsive' width={180} height={350} alt={`Imagen guitarra ${nombre}`} src={imagen.url} />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>$ {precio}</p>
                <Link href={`/guitarras/${url}`}>
                    <a className={styles.enlace}>Ver producto</a>
                </Link>
            </div>
        </div>
    )
}

export default Guitar