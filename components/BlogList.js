import Entrys from '../components/Entrys'
import styles from '../styles/Blog.module.css'

const BlogList = ({ entrys }) => {
    return (
        <>
            <h2 className='heading'>Blog</h2>
            <div className={styles.blog}>
                {entrys.map(entry => (
                    <Entrys
                        key={entry._id}
                        entry={entry}
                    />
                ))}
            </div>
        </>
    )
}

export default BlogList