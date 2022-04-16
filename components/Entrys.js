import Image from 'next/image';
import { dateFormat } from '../helpers';
import styles from '../styles/Entry.module.css';
import Link from 'next/link';

const Entrys = ({ entry }) => {
    const { titulo, resumen, imagen, published_at, id, url } = entry;

    return (
        <article>
            <Image priority='true' src={imagen.url} width={800} height={600} layout='responsive' alt={`Imagen Blog ${titulo}`} />
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{dateFormat(published_at)}</p>
                <p className={styles.resumen}>{resumen}</p>
                <Link href={`/blog/${url}`}><a className={styles.enlace}>Leer Entrada</a></Link>
            </div>
        </article>
    )
}

export default Entrys