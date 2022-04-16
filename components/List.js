import React from 'react';
import Guitar from './Guitar';
import styles from '../styles/List.module.css';

const List = ({ guitarras }) => {

    return (
        <div className={styles.listado}>
            {guitarras.map(guitarra => (
                <Guitar
                    key={guitarra._id}
                    guitarra={guitarra}
                />
            ))}
        </div>
    )
}

export default List