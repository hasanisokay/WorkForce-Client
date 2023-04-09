import React, { createContext } from 'react';
import Header from './components/Header';
import { useLoaderData } from 'react-router-dom';
import Footer from './components/Footer';



export const ApiContext = createContext([])

const App = () => {
  const jobsData = useLoaderData()
  return (
    <div>
      <ApiContext.Provider value={jobsData}>
        <Footer></Footer>
      </ApiContext.Provider>
      
    </div>
  );
};

export default App;