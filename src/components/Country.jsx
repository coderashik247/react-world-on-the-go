import React, { useState } from 'react';
import styles from './Country.module.css';

const Country = ({country}) => {
    const [visited, setVisited] = useState(false)

    const handleVisited = () =>{
        if(visited){
            setVisited(false);
        }
        else{
            setVisited(true);
        }

        // setVisited(visited ? false : true)

        // setVisited(!visited)
    }
    return (
        <div className={`${styles.country} ${visited && styles.countryVisited }`}>
            <img className={styles.countryImg} src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common} </h3>
            <p>Population: {country.population.population} </p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? <span className={styles.span}>Large Country</span> : <span className={styles.span}>Small Country</span> } </p>
            <button onClick={handleVisited}>
                {
                    visited? "Visited" : "Not Visited"
                }
            </button>
        </div>
    );
};

export default Country;