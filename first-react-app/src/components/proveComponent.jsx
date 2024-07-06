
/* * In react we have the properties that let us work with default information and datatype for our components */

import PropType from "prop-types";

function Prove(props){

    return(

        <ul className = "w-[250px] bg-rose-300 h-[320px]">

            <li>Name: {props.name}</li>
            <li>Age:{props.age}</li>
            <li>Id:{props.id}</li>

        </ul>

    )

}

/*  This is a good practice for avoid bugs */
Prove.propType = {

    name:PropType.string,
    age:PropType.number,
    id:PropType.number

}

Prove.defaultProps = {

    name:'tato',
    age:0,
    id:0

}

export default Prove
