import React, {useState} from 'react';

function hook(){

    let random = 0;

    const [name, setName] = useState();


    const listOfNames = [
        'Pedro',
        'Angelo',
        'Julio',
        'Cesar',
        'Julian',
        'Angelina',
        'Angel'
    ]

    function randomPostion(){

        Math.random(1, listOfNames.length)

        return random
    }
        
    const changeName = () =>{
        setName(listOfNames[randomPostion()]);
    }; 

    return(

        <h1 onClick = {changeName()} className = 'semibold font-[3rem]'>{name}</h1>

    )

}