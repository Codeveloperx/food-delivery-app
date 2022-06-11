import React from 'react';
import { Spinner } from 'react-bootstrap';
import { ContainerPrincipal } from 'styles/styledComponents';
import Logo from '../images/logoPrincipal.png';
import '../styles/styles.css';


const Loading = () => {

  return (
      <ContainerPrincipal color='#FFE031' gap='2rem'>
        <div>
          <img src={Logo} alt='Loading Logo'/>
        </div>
        <Spinner animation="grow"> <span style={{textAlign:'center'}}>Loading.....</span></Spinner>
    </ContainerPrincipal>
  )
}

export default Loading