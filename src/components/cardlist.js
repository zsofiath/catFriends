import React from "react";
import Card from './card.js';

const CardList = ({cats}) => {

    if (cats.length === 1 && cats[0].title === 'delectus aut autem') {
        throw new Error({message: 'Not allowed to search this cat.'});
    }

    return (
        <div>
            {cats.map((cat, i) => {
                return <Card
                    key={i}
                    id={cats[i].id}
                    name={cats[i].title}
                    email={cats[i].title}/>
            })}
        </div>
        
    )
}


export default CardList;