import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Nosotros.module.css'

const Nosotros = ({carrito}) => {
  return (
    <Layout page='Nosotros' carrito={carrito}>
      <main className='contenedor'>
        <h2 className='heading'>Nosotros</h2>
        <div className={styles.contenido}>
          <Image layout='responsive' width={600} height={450} src={'/img/nosotros.jpg'} alt='Imagen nosotros' />

          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt dui nec iaculis laoreet. Phasellus placerat sed sapien eu euismod. Sed ac lectus ante. Etiam facilisis lorem tortor, eu posuere mauris molestie non. Aliquam vel purus laoreet, interdum mi ut, fringilla augue. Pellentesque scelerisque mi ante, sit amet malesuada arcu commodo et. Maecenas dapibus dui sed est sodales, condimentum auctor mauris feugiat. Aenean libero turpis, gravida vel imperdiet facilisis, condimentum sit amet magna. In egestas tortor magna, in gravida enim vulputate eu.</p>
            <p>Integer bibendum hendrerit ligula, et aliquam erat congue ut. Pellentesque tempor dui tortor, vel vulputate augue iaculis quis. Nam eu sollicitudin purus. Integer finibus nisl ut lacus gravida, quis ultricies magna posuere. Nulla id orci massa. Ut tempor venenatis lorem vel vulputate. Ut pretium eu justo quis faucibus. Fusce viverra accumsan orci nec pellentesque. Nulla facilisi. Cras ut nibh at est pellentesque accumsan. Sed eget venenatis leo. Vestibulum vehicula quam quis est facilisis ullamcorper.</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Nosotros