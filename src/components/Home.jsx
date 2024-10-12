import React from "react";
import '../index.css'; 
import Navbar from "./Navbar";

function Home() {

    const cv = `cv.pdf`;
    return (
        <div className="flex flex-col">
            <Navbar/>
            <div className="flex flex-row w-full min-h-screen bg-black items-center text-white tracking-wider">
                <div className="Homeleft ml-16 flex flex-col w-3/5 h-full">
                    <h1 className="text-lg">Hey, I'm  <span className="font-bold text-2xl gradient-text"> MUJAHID ABDI</span></h1>
                    <h1 className="text-8xl font-sans gradient-text ">FRONTEND DEVELOPER</h1>
                    <p className="text-xl ">Passionate about creating engaging user experience</p>
                    <button className="mt-8 p-2 w-48 font-medium bg-white text-black rounded hover:bg-slate-400 hover:text-white"><a href={cv} download='cv'>Download Resume</a></button>
                </div>
                <div className="HomeRight w-2/5  h-full">
                    <img src='jija.png' className="w-full" alt="hero" />
                </div>
            </div>

            <div className="bg bg-yellow-100 w-18 h-18 m-auto">
                <div className="flex items-center justify-center border-4 border-red-500 w-20 h-20 rounded-full">
                   <img src="react.png" className="w-20 h-18 rounded-full" />
                </div>


            </div>
        </div>
    );
}

export default Home;



