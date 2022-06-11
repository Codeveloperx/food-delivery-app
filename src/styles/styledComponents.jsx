import { Button } from 'react-bootstrap';
import styled from 'styled-components';


export const ContainerPrincipal = styled.div`
background-color: ${props => props.Bgwgite ? '#fff' : props.color};  
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:${props => props.gap};

div{
    width: 120px;
    height: fit-content;
    padding: 8px;
    background-color: #fff;
    border-radius: 10px;
}
img{
    width: 100%;
};`


export const ContainerCard = styled.div`
width: 25rem;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
gap: .5rem;
margin: 0 auto;
background-color: #fff;
padding: .5rem;`

export const ContainerImg =  styled.div`
clip-path: polygon(0 0, 100% 0, 72% 100%, 0% 100%);
width:100%;
img{
  width: 100%;
  border-radius: 15px;
}
`
export const H1 = styled.h1`
color:red;
font-weight: 900;
`

export const Category = styled.ul`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
    overflow-x: auto;
    padding: 0;
    margin-bottom: 2rem !important;`

export const MainContainer = styled.div`
background-color: ${props => props.Bgwgite ? '#fff' : props.color};  
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:${props => props.gap};

div{
    width: 120px;
    height: fit-content;
    padding: 8px;
    background-color: #fff;
    border-radius: 10px;
}
img{
    width: 100%;
}
`

export const List = styled.li`
background: #dddddda1;
padding: 0 1rem !important;
border-radius: 10px;
display: flex;
align-items: center;
height: 35px;
align-items: center;
gap: .5rem;
list-style: none;
&:hover {
      background-color: #FFE031;
      box-shadow: none;
    }
    &:active{
      background-color: #FFE031;
      box-shadow: none;
    }`


export const H3 = styled.h3`
margin-left: 1rem !important;`

export const H6 = styled.h6`
margin: 0;
color: #ffc107;`


export const CustomButton = styled(Button)({
    padding: '6px 160px',
    backgroundColor: '#FFE031',
    color: '#000',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: '#FFE031',
      borderColor: '#6c6209;',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#FFE031',
    }
});