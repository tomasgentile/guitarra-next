import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import Image from 'next/image'
import { dateFormat } from '../../helpers'
import styles from '../../styles/Entry.module.css'

const BlogEntry = ({ entry, carrito }) => {
    const router = useRouter();
    const { titulo, imagen, published_at, contenido } = entry[0];

    return (
        <Layout page={titulo} carrito={carrito}>
            <main className='contenedor'>
                <h1 className='heading'>{titulo}</h1>
                <article className={styles.entrada}>
                    <Image layout='responsive' width={800} height={600} src={imagen.url} alt={`Imagen entrada ${titulo}`}/>
                    <div className={styles.contenido}>
                        <p className={styles.fecha}>{dateFormat(published_at)}</p>
                        <p className={styles.texto}>{contenido}</p>
                    </div>
                </article>
            </main>
        </Layout>
    )
}

// StaticProps
export async function getStaticPaths() {
    const url = `${process.env.API_URL}/blogs`;
    const response = await fetch(url);
    const entrys = await response.json();

    const paths = entrys.map(entry => ({
        params: { url: entry.url }
    }))
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({ params: { url } }) {
    const urlBlog = `${process.env.API_URL}/blogs?url=${url}`;
    const response = await fetch(urlBlog);
    const entry = await response.json();

    return {
        props: {
            entry
        }
    }
}



// // Server Side Props
// export async function getServerSideProps({ query: { id } }) {
//     // query se obtiene por destructuring de router
//     const url = `${process.env.API_URL}/blogs/${id}`;
//     const response = await fetch(url);
//     const entry = response.json();

//     return {
//         props: {
//             entry
//         }
//     }
// }

export default BlogEntry