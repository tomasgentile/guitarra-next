import Layout from '../components/Layout';
import BlogList from '../components/BlogList';

const Blog = ({ entrys, carrito }) => {
  return (
    <Layout page='Blog' carrito={carrito}>
      <main className='contenedor'>
        <BlogList 
          entrys={entrys}
        />
      </main>
    </Layout>
  )
}

export async function getStaticProps() {

  const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`;
  const response = await fetch(url);

  return {
    props: {
      entrys: await response.json()
    }
  }
}

export default Blog