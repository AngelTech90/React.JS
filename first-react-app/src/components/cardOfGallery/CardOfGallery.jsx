import React, {useState} from 'react';

function CardOfGallery(){
    
    const idOfCard = 0;

    //*Hook for name:
    const [cardName, setName] = useState('Name');

    //*Hook for ages:
    const [age, setAge] = useState(0);

    //*Hook for state:
    const [status, setStatus] = useState('false');
    
    //*Hook for ID:
    const [id, setId] = useState(100000000);

    const setAllHooks = (newName, newAge, newStatus, newId) => {
        setName(newName);
        setAge(newAge);
        setStatus(newStatus);
        setId(newId);
    }

    return(
        <div className = 'card' id = {idOfCard}>
            <h2 className = 'cardName'>{cardName}</h2>
            <ul className = 'cardImage'></ul>
            <p className = 'informationTitle'>Information about students<strong></strong></p>
            <div className = 'infoContainer'>
                <p className = 'infoText'>{age}</p>
                <p className = 'infoText'>{id}</p>
                <p className = 'infoText'>{status}</p>
            </div>
        </div>
    )
}

export default CardOfGallery;