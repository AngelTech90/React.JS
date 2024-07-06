import catImage from "./assets/29484396147_f0818dbe4c.webp";

import 'tailwindcss/tailwind.css'

function Card(){

    const userName = 'Jose Roberto';

    return(

        <div className="w-[200px] text-[1.2rem] h-[320px] flex flex-col items-center p-[1rem] text-[black] bg-white">
        
            <img src={catImage} alt="" />

            <h2 > {userName} cat</h2>

            <p>The {userName} cat is a very nice, soft and good cat</p>

        </div>

    );
    

}

export default Card