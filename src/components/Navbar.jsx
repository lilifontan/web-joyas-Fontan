import {Link} from 'react-router-dom'
import React, {useContext} from 'react'
import { cartContext } from './Context/CartContextComponent'
import CartWidget from './Cart/CartWidget'

const Navbar = () => {
return (
    <>
<header>
<div  className ="logo" >
<Link to = {'/'} >
  <img      
            src="./src/images/LogoLili_14-removebg-preview.png"
            alt="Logo de la marca"
            width="240px"
          />
  </Link>
</div>
  <ul>
    <li><Link to = {'/'} >Home</Link></li>
    <li><Link to = {'/categoria/aros'} >Aros</Link></li>
    <li><Link to = {'/categoria/pulseras'} >Pulseras</Link></li>
    <li><Link to = {'/categoria/collares'} >Collares</Link></li>
    <li><Link to = {'/categoria/anillos'} >Anillos</Link></li>
  </ul>
  <div className ="carrito">
  <Link to = {'/cart'} >
  <CartWidget/>
  </Link>
</div>
</header>
</>
)
}

export default Navbar