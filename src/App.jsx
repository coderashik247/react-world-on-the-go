import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries'

const fetchCountries = async() =>{
  const res = await fetch('https://openapi.programming-hero.com/api/all')
  return res.json();
}

const CountriesPromise = fetchCountries();

function App() {

  return (
    <>
      <h1>React World on the go...</h1>
      <Suspense fallback={<p>Waiting for message....</p>}>
        <Countries CountriesPromise={CountriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
