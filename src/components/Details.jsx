import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Details = () => {

  const {id, id_product} = useParams()
  // const Idplato = parseInt(id_product);

  const [plato, setPlato] = useState([])
  // const [detalle, setDetalle] = useState([])

useEffect(()=>{
  getData();
}, []);

const getData = async() =>{
  const resp = await fetch(`https://food-delivery-geek.herokuapp.com/Restaurants/${id}`)
  const data = await resp.json()
  setPlato(data.products)  
}


  return (
    <div> 

      <div>
        <img src="http://www.comedera.com/wp-content/uploads/2014/08/IMG_4792111111.jpg" alt="" />
        </div>
        <div><h1>Caesar salad without sauge</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ducimus laudantium officia similique sapiente. Ab officia perspiciatis laborum odio, rerum debitis alias doloribus mollitia reprehenderit veritatis! Reiciendis cum fuga dolorum!</p>
        </div>

        <div>
          <h3>Aditional Ingredients</h3>
          <ul>
            <li>Tomatoes</li>
            <li>Grain</li>
            <li>Lettuce leatt</li>
          </ul>
        </div>

        <div>
          <div>contador</div>
          <div>
            <button>Add</button>
            <span>14.00$</span>
          </div>
        </div> 


    </div>
  )
}

export default Details