import Layout from '../components/Layout'
import List from '../components/List';

const Tienda = ({ guitarras, carrito }) => {

  return (
    <Layout page='Tienda Virtual' carrito={carrito}>
      <main className='contenedor'>
        <h1 className='heading'>Nuestra Colección</h1>
        <List guitarras={guitarras} />
      </main>

    </Layout>
  )
}

export async function getServerSideProps() {
  // en la url de la consulta agregamos un filtro para ordenar los resultados
  const url = `${process.env.API_URL}/guitarras?_sort=precio:desc`;
  const response = await fetch(url);

  return {
    props: {
      guitarras: await response.json()
    }
  }
}

export default Tienda