import Course from '../components/Course';
import Layout from '../components/Layout';
import List from '../components/List';
import BlogList from '../components/BlogList';

export default function Home({ guitarras, curso, entrys, carrito }) {

  return (
    <Layout page='Home' guitarra={guitarras[3]} carrito={carrito}>
      <main className='contenedor'>
        <h1 className='heading'>Nuestra Colección</h1>
        <List guitarras={guitarras} />
      </main>
      <Course
        curso={curso}
      />
      <section className='contenedor'>
        <BlogList
          entrys={entrys}
        />
      </section>
    </Layout>
  )
}

export async function getServerSideProps() {
  // consultando dos API's en forma simultanea
  const urlGuitarras = `${process.env.API_URL}/guitarras`;
  const urlCurso = `${process.env.API_URL}/cursos`;
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`;
  const [resGuitarras, resCurso, resBlog] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCurso),
    fetch(urlBlog)
  ])

  const [guitarras, curso, entrys] = await Promise.all([
    resGuitarras.json(),
    resCurso.json(),
    resBlog.json()
  ])

  return {
    props: {
      guitarras,
      curso,
      entrys
    }
  }
}
