import React from 'react';
import { Category, H3, H6, List } from 'styles/styledComponents';
import CardComponent from './CardComponent';
import CarouselComponent from './Carousel';

const Restaurants = () => {
  return (
    <div>
      <div style={{display:'flex', alignItems:'center', gap:'.5rem', marginTop:'2rem', marginLeft:'.8rem'}}>
        <span><img src="https://i.ibb.co/ThSfbf5/Svg.png" alt="" /></span>
        <div style={{display: 'flex', flexDirection:'column'}}>
          <H6>DEVLIVERY TO</H6>
          <h4>882 Well St, New-York</h4>
        </div>
      </div>

      <div style={{width:'90%', margin: '1rem auto 2rem auto'}}>
        <CarouselComponent/>
      </div>
      <div>
      <H3>Restaurants and cafes</H3>

      <Category>
        <List>All</List>
        <List>
          <span><img src="https://i.ibb.co/jMNVBQ8/image-4.png" alt="" /></span>
          <span>Fast Food</span>
        </List>
        <List>
          <span><img src="https://i.ibb.co/ysckB5j/img234.png" alt="Pizza" /></span>
          <span>Pizza</span>
        </List>
        <List>
          <span><img src="https://i.ibb.co/ysckB5j/img234.png" alt="" /></span>
          <span>Pizza</span>
        </List>
      </Category>

      </div>
      <CardComponent/>
      
    </div>
    
  )
}

export default Restaurants