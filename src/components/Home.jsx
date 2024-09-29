import React from "react";
import { useTypewriter } from 'react-simple-typewriter'


function Home() {

    const [text] = useTypewriter({
        words : ['SOFTWARE DEVELOPER', 'DESIGNER'],
        loop : {},
        typeSpeed: 120,
        deleteSpeed: 80,
    })

    return (
      <div className="flex flex-col">


          <div className="flex flex-row w-full min-h-screen bg-black items-center text-white" >
            <div className="Homeleft ml-16 flex flex-col  w-1/2 h-full">
                <h1 className="text-2xl">Hey,  im <span className="font-bold"> MUJAHID ABDI</span></h1>
                <h1 className="text-white text-5xl font-extrabold">{text}</h1>
                <p className="text-2xl">Passionate about creating user friendly websites </p>
                <p className="text-2xl">and applications</p>
                <button className="mt-8 p-2 w-48 font-medium bg-red-500 text-white rounded hover:bg-white hover:text-black">Download Resume</button>
            </div>

            <div className="HomeRight w-1/2 h-full">
               <img src='hero.png' className="w-full" alt="hero" />
            </div>
        </div>

        
      </div>
    );
}

export default Home;
