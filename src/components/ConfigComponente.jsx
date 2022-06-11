import React from 'react'
import { Link } from 'react-router-dom'
import { CustomButton } from 'styles/styledComponents'
import Svgicon from 'images/Svg.png'

const ConfigComponente = () => {
  return (
    <div style={{display: 'flex', flexDirection:'column', alignItems:'center', justifyContent: 'space-around', height: '90vh' }}>
    <div style={{margin: '5rem', display: 'flex',flexDirection: 'column', gap: '2rem',justifyContent: 'center',
    alignItems: 'center'}}>
        <img src={Svgicon} alt='Svg ICON'/>
        <p>Choose what to eat choosing from 
            a variety of restaurants from the list
        </p>
    </div>

    <div>
      <Link to='/home'>
        <CustomButton>Next</CustomButton>
      </Link>
    </div>
</div>
  )
}

export default ConfigComponente