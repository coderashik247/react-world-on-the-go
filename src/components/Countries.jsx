import React, { use } from 'react';
import Country from './Country';

const Countries = ({CountriesPromise}) => {
    const countriesData = use(CountriesPromise);
    const countries = countriesData.countries;
    return (
        <div>
            <h3>In the Countries {countries.length} </h3>
            {
                countries.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Countries;