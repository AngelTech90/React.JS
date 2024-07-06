
function Button1(){

    let buttonMessage = "Click on me";

    let buttonOnClick = () => buttonMessage = "Don't click on me";


    return(

        <button onClick={() => buttonOnClick()} className= "w-[100px] h-[100px] bg-[red]">{buttonMessage}</button>

    )

}

export default Button1