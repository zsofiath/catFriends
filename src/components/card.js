import React, { Fragment } from "react";

const Card = ({name, email, id}) => {

    const formatName = (text) => {
        let i = 0;
        let arr = text.split(' ').map(word => {
            i++;
            return (<Fragment key={i}><span className="dark-blue">{word[0].toUpperCase()}</span>{word.substr(1,word.length-1)} </Fragment>)
        });
        return arr;
    }

    return (
        <div className="bg-lightest-blue dib br3 pa3 ma2 grow">
            <img img='cat' alt={id} src={`https://robohash.org/${id}?set=set4&100x100`}/>
            <div>
                <h2 className="blue">{formatName(name)}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}


export default Card;