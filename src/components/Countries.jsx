import React, { use } from "react";
import Country from "./Country";
import styles from './Countries.module.css';

const Countries = ({ CountriesPromise }) => {
  const countriesData = use(CountriesPromise);
  const countries = countriesData.countries;
  return (
    <div>
      <h3>In the Countries {countries.length} </h3>
      <div className={styles.countriesContainer}>
        {countries.map((country) => (
          <Country key={country.cca3.cca3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
