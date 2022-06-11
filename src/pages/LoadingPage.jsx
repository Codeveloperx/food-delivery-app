import React, { useEffect, useState } from 'react';
import Loading from 'components/Loading';
import ConfigComponente from 'components/ConfigComponente';


const LoadingPage = () =>{
const [showComponent, setShowComponent] = useState(false);

    useEffect(() =>{
      Load();
    },[]);
  
    const Load = () =>{
      setInterval(() => {
        setShowComponent(true);
      }, 5000);
    }
  return (
      showComponent ? <ConfigComponente/> : <Loading/>
  )
}

export default LoadingPage;