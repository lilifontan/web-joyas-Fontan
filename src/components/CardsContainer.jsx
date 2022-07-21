const CardsContainer = () => {
   
    return (
        <>
    <div id="ID_cardContainer" class="cardContainer">
        <div class = "card">
        <div class="cartImg scale"> <img src="../src/images/Ring_resized.jpg" /> </div>
        <div class="cartTitle"><h2>Ethereal</h2></div>
        <div class="cartPrice"><h2>$12500</h2></div>
        <button data-id="${id}" class="buttonProd"> Agregar al Carrito </button>
        </div>     
    

        <div class = "card">
        <div class="cartImg scale"> <img src="../src/images/Earrings_resized.jpeg" /> </div>
        <div class="cartTitle"><h2>Ethereal</h2></div>
        <div class="cartPrice"><h2>$15900</h2></div>
        <button data-id="${id}" class="buttonProd"> Agregar al Carrito </button>
        </div>  

        <div class = "card">
        <div class="cartImg scale"> <img src="../src/images/Necklace_resized.jpeg" /> </div>
        <div class="cartTitle"><h2>Ethereal</h2></div>
        <div class="cartPrice"><h2>$16500</h2></div>
        <button data-id="${id}" class="buttonProd"> Agregar al Carrito </button>
        </div>  
    </div> 
    </>
    )
    }
    
    export default CardsContainer