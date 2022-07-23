const Navbar = () => {
return (
    <>
<header>
<div className ="logo">
  <img
            src="./src/images/LogoLili_14-removebg-preview.png"
            alt="Logo de la marca"
            width="240px"
          />
</div>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Novedades</a></li>
    <li><a href="#">Contacto</a></li>
    <li><a href="#">Carrito</a></li>
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