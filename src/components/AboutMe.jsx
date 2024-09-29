function AboutMe(){
    return(
        <div className="bg-black h-screen  flex flex-row items-center">
            <div className="left w-1/2 h-full">
             <img className="mt-28 ml-16" src="work1.png" alt="" />
            </div>

            <div className="w-1/2 h-full text-xl font-medium flex items-center">
             <div className="text-centre space-y-2 text-white"> 
             <p className="">I am a Fullstack Developer with passion for building beautiful </p>
             <p>and user-friendly websites and applications. I have a strong understanding</p>
             <p>of both frontend and backend, and i am excited to put my skills to use</p>
             <p>in a professional setting. I am a quick learner and a team player, and i</p>
             <p>am confident that i can be a value asset to any developemnt team</p>
             </div>
            </div>
        </div>
    )
}

export default AboutMe;