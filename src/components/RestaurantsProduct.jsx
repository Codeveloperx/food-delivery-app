import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Category, ContainerCard, ContainerImg, H1, List } from 'styles/styledComponents';
import CardProducts from './CardProducts';

const RestaurantsProduct = () => {
    const {id} = useParams()
    const [restaurante, setRestaurante] = useState([])

  useEffect(()=>{
    getData()
  }, []);

  const getData = async() =>{
    const data = await fetch(`https://food-delivery-geek.herokuapp.com/Restaurants/${id}`)
    const restaurants = await data.json()
    // console.log(restaurants)
    setRestaurante(restaurants)


  }

  return (
    <>
        <div style={{display:'flex', justifyContent:'center', gap: '1rem', marginTop: '3rem', marginBottom: '2rem'}}>
            <span><img src="https://i.ibb.co/LNNrhhq/Logo.png" alt="" /></span>
            <H1>{restaurante.nombre}.</H1>
        </div>

        <ContainerCard>
        <ContainerImg><img src={restaurante.src} alt="" /></ContainerImg>
        <div>          
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit Itaque magni magnam.</p>
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <span>Estrellas: {restaurante.estrellas}</span>
              <span>15-20 min</span>
            </div>
        </div>
      </ContainerCard>  

      <Category>
          <List>All</List>
          <List>Salates</List>
          <List>Pizza</List>
          <List>Pizza</List>
      </Category>
      <div style={{display: 'flex', flexWrap:'wrap', gap:'1rem', justifyContent:'center', marginBottom:'5rem'}}>
      <CardProducts/>
      </div>
    </>
  )
}

export default RestaurantsProduct