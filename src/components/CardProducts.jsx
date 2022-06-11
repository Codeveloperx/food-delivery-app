import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';

const CardProducts = () => {
    const {id} = useParams()
    const [prodct, setProdct] = useState([])

  useEffect(()=>{
    getData();

  }, []);

  const getData = async() =>{
    const resp = await fetch(`https://food-delivery-geek.herokuapp.com/Restaurants/${id}`)
    const data = await resp.json()
    setProdct(data.products)
    // console.log(data.products)
  }

  return (
    <>
    {
        prodct.map(item=>(
            <Card style={{ width: '12rem', border:'1px solid #efebebc4' }}>
            <Link to={`/restaurants/${id}/details/${item.id}`}>
            <Card.Img style={{borderRadius:'15px'}} variant="top" src={item.src} />
            </Link>
            <Card.Body>
            <Card.Title>{item.nombre}</Card.Title>
            <Card.Text>${item.price}</Card.Text>
            </Card.Body>
            </Card>
        ))
    }
</>
  )
}

export default CardProducts