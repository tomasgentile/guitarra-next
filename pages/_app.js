import { useState, useEffect } from 'react';
import '../styles/normalize.css';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([]);

  // Load from LocalStorage
  useEffect(() => {
    const carritoLocalStorage = JSON.parse(localStorage.getItem("carrito")) ?? [];
    if (carritoLocalStorage.length > 0) {
      setCarrito(carritoLocalStorage);
    }
  }, []);

  // Save in LocalStorage
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito])

  const agregarCarrito = (producto) => {
    if (carrito.some((articulo) => articulo._id === producto._id)) {
      const carritoActualizado = carrito.map(articulo => {
        if (articulo._id === producto._id) {
          articulo.cantidad = producto.cantidad
        }
        return articulo;
      })
      setCarrito(carritoActualizado);
    }
    else {
      setCarrito([...carrito, producto]);
    }
  }

  const actualizarCantidad = (producto) => {
    const carritoActualizado = carrito.map(articulo => {
      if (articulo._id === producto._id) {
        articulo.cantidad = producto.cantidad
      }
      return articulo;
    });
    setCarrito(carritoActualizado);
  }

  const eliminarProducto = (id) => {
    const carritoActualizado = carrito.filter((articulo) => articulo._id !== id);
    setCarrito(carritoActualizado);
  }

  return <Component
    {...pageProps}
    carrito={carrito}
    agregarCarrito={agregarCarrito}
    actualizarCantidad={actualizarCantidad}
    eliminarProducto={eliminarProducto} />
}

export default MyApp
