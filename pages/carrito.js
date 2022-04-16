import Layout from '../components/Layout'
import styles from '../styles/Carrito.module.css'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const Carrito = ({ carrito, actualizarCantidad, eliminarProducto }) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0);
        setTotal(calculoTotal);
    }, [carrito])

    return (
        <Layout page={'Carrito de compras'} carrito={carrito}>
            <h1 className='heading'>Carrito</h1>
            <main className={`contenedor ${styles.contenido}`}>
                <div className={styles.carrito}>
                    <h2>Articulos</h2>
                    {carrito.length === 0 ? 'Carrito Vacio' : (
                        carrito.map(producto => (
                            <div key={producto._id} className={styles.producto}>
                                <div>
                                    <Image layout='responsive' width={200} height={400} src={producto.imagen} alt={producto.nombre} />
                                </div>
                                <div>
                                    <p className={styles.nombre}>{producto.nombre}</p>
                                    <div className={styles.cantidad}>
                                        <label htmlFor='cantidad'>Cantidad: </label>
                                        <select
                                            id='cantidad'
                                            value={producto.cantidad}
                                            className={styles.select}
                                            onChange={e => actualizarCantidad({
                                                cantidad: parseInt(e.target.value),
                                                id: producto._id
                                            })}
                                        >
                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                        </select>
                                    </div>
                                    <p className={styles.precio}>Precio: $
                                        <span>{producto.precio}</span>
                                    </p>
                                    <p className={styles.subtotal}>Subtotal: $
                                        <span>{producto.precio * producto.cantidad}</span>
                                    </p>
                                </div>
                                <button
                                    type='button'
                                    className={styles.eliminar}
                                    onClick={() => eliminarProducto(producto._id)}
                                >X</button>
                            </div>
                        ))
                    )}
                </div>
                <div className={styles.resumen}>

                    {total > 0 ? (
                        <>
                            <h3>Resumen del pedido</h3>
                            <p>Total a pagar: $ {total}</p>
                        </>
                    ) : (
                        <p>No hay productos en el carrito</p>
                    )}
                </div>
            </main>
        </Layout>
    )
}

export default Carrito