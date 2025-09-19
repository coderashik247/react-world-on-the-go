import React, { use, useState } from "react";
import Country from "./Country";
import styles from "./Countries.module.css";

const Countries = ({ CountriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    // console.log("Visited Countries ", country);
    const alreadyVisited = visitedCountries.find(
      (c) => c.cca3 === country.cca3
    );

    if (alreadyVisited) {
      const newVisited = visitedCountries.filter(
        (c) => c.cca3 !== country.cca3
      );
      setVisitedCountries(newVisited);
    } else {
      const newVisited = [...visitedCountries, country];
      setVisitedCountries(newVisited);
    }
  };

  const [addFlag, setAddFlag] = useState([]);

  const handleAddFlag = (country) => {
    const alreadyAddFlag = addFlag.find((c) => (c.cca3 === country.cca3));

    if (alreadyAddFlag) {
      alert(" ❌ Already Exits !!");
    } else {
      const newAddFlag = [...addFlag, country];
      setAddFlag(newAddFlag);
    }
  };

  const countriesData = use(CountriesPromise);
  const countries = countriesData.countries;
  return (
    <div>
      <h3>In the Countries {countries.length} </h3>
      <h4>Visited Countries = {visitedCountries.length}</h4>
      <ol>
        {visitedCountries.map((country) => (
          <li>  {country.name.common} </li>
        ))}
      </ol>
      <h4>Visited Countries Flag = {addFlag.length}</h4>
      <div>
        {addFlag.map((flag, index) => (
          <img key={index} className={styles.addFlagImg} src={flag.flags.flags.png} ></img>
        ))}
      </div>
      <div className={styles.countriesContainer}>
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleAddFlag={handleAddFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
