import Image from 'next/image';
import styles from '../../styles/Guitar.module.css';
import Layout from '../../components/Layout';
import { useState } from 'react';

const Product = ({ guitarra, carrito, agregarCarrito }) => {
    const [cantidad, setCantidad] = useState(1);
    const { nombre, precio, imagen, descripcion, _id } = guitarra[0];
    
    const handleSubmit = e => {
        e.preventDefault();
        if (cantidad < 1) {
            alert('Cantidad no válida');
            return
        }
        const guitarraSeleccionada = {
            _id,
            imagen: imagen.url,
            nombre, 
            precio,
            cantidad
        }
        agregarCarrito(guitarraSeleccionada);
    }

    return (
        <Layout page={`Guitarra ${nombre}`} carrito={carrito}>
            <div className={styles.guitarra}>
                <Image layout='responsive' width={180} height={350} alt={`Imagen guitarra ${nombre}`} src={imagen.url} />
                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>$ {precio}</p>

                    <form className={styles.formulario} onSubmit={handleSubmit}>
                        <label>Cantidad:</label>
                        <select value={cantidad} onChange={e => setCantidad(parseInt(e.target.value))}>
                            <option value='0'>-- Seleccione --</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                        </select>
                        <input
                            type='submit'
                            value='Agregar al Carrito'
                        />
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps({ query: { url } }) {
    const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`;
    const response = await fetch(urlGuitarra);
    const guitarra = await response.json();

    return {
        props: {
            guitarra
        }
    }
}

export default Product