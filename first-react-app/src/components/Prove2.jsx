
/* *We import the properties types object: */
import PropTypes from "prop-types";

function Prove2(props){

    const loggedInMessage = <p className= "text-[3rem]  ">Your are logged in</p>;
    const notLoggedInMessage = <p className= "text-[3rem]  ">Your are not logged in</p>;

    return(

        <div className= "w-[400px] h-[360px] bg-red-600">

        {props.loggedIn ? loggedInMessage : notLoggedInMessage
        }
            
        </div>

    )

}

Prove2.PropTypes = {

    loggedIn: PropTypes.bool

}

export default Prove2