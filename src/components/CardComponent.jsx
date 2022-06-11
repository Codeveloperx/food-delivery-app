import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContainerCard, ContainerImg } from 'styles/styledComponents';


const CardComponent = () => {

  
  const [equipo, setEquipo] = useState([])

  useEffect(()=>{
    // console.log("effect");
    getData()

  }, []);

  const getData = async() =>{
    const data = await fetch('https://food-delivery-geek.herokuapp.com/Restaurants')
    const restaurants = await data.json()
    // console.log(restaurants)
    setEquipo(restaurants)


  }
  return (

    <div style={{display:'flex', flexWrap:'wrap', gap:'1rem', marginBottom:'5rem'}}>
    {
      equipo.map(item =>(
        <ContainerCard>
        <Link to={`/restaurants/${item.id}`}>
        <ContainerImg><img src={item.src} alt="" /></ContainerImg>
        </Link>
        <div>
          <h2>{item.nombre}</h2>
          <span>Estrellas: {item.estrellas}</span>
          <h5>{item.wortime}</h5>
          <p>Before you {item.price}$</p>
          </div>
      </ContainerCard>   
      ))
    }
      </div>
  )
}

export default CardComponent