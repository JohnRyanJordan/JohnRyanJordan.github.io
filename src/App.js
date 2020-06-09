import React from 'react';
import useFetch from 'use-http';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';

import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';


import './App.css';

library.add(fas, fab);

function App() {

  const { loading, error, data = [] } = useFetch('/siteData.json', {}, [])
  console.log(loading, error, data);
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{JSON.stringify(error)}</div>;
  }
  return (
    <div className="App">
      <Header data={data.basic} />
      <About data={data.basic} />
      <Portfolio data={data.portfolio} />
      <Resume data={data.resume}/>
      <Footer data={data.basic}/>
    </div>
  );
}

export default App;
