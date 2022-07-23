import Cards from "./Cards"

const CardsContainer = () => {
 
    return (
        <>
            <div id="ID_cardContainer" className="cardContainer">
                <Cards cartImg= "../src/images/Ring_resized.jpg" cartTitle="Ethereal" cartPrice="12500" />
                <Cards cartImg= "../src/images/Earrings_resized.jpeg" cartTitle="Avar" cartPrice="15900" />
                <Cards cartImg= "../src/images/Necklace_resized.jpeg" cartTitle="Cyon" cartPrice="16500" />
            </div>  
        </>
    )
    }
    
    export default CardsContainer