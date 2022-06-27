import React from "react";
class Card extends React.Component {

  
    Cards() {

        const Fruits = [
            { id: 1, name: "Apple", color: "Yellow" },
            { id: 2, name: "Strawberry", color: "Red" },
            { id: 3, name: "Kiwi", color: "Green" }
        ];
    
        return (
            <>
            {Fruits.map( (Fruit) => (
            <div class="card" style={{width:' 18rem', display:'inline-block',marginLeft:'15px'}}>
                <img src="https://i.pinimg.com/originals/aa/02/78/aa02780bbc7e6c5e2d52d9b0e919fbf6.jpg" class="card-img-top" alt="..."></img>           
                <div class="card-body">
                    <h5 class="card-title">{Fruit.name}</h5>    
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="hello" class="btn btn-primary">Go somewhere</a>
                
                </div>  
            </div>
      ))}</>
        );

    }
    render()
     {

       return( 
           <>
        {this.Cards()}  

    </>
);

    }
}
export default Card;