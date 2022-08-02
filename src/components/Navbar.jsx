import {Link} from 'react-router-dom'

const Navbar = () => {
return (
    <>
<header>
<div  className ="logo" >
  <img      
            src="./src/images/LogoLili_14-removebg-preview.png"
            alt="Logo de la marca"
            width="240px"
          />
</div>
  <ul>
    <li><Link to = {'/'} >Home</Link></li>
    <li><Link to = {'/categoria/aros'} >Aros</Link></li>
    <li><Link to = {'/categoria/pulseras'} >Pulseras</Link></li>
    <li><Link to = {'/categoria/collares'} >Collares</Link></li>
    <li><Link to = {'/categoria/anillos'} >Anillos</Link></li>
  </ul>
  <div className ="carrito">
  <img
            src="./src/images/carrito-lila-removebg-preview.png"
            alt="Logo de la marca"
            width="50px"
          />
</div>
</header>
</>
)
}

export default Navbar