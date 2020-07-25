import React from 'react';
import '../../component-style/aboutme.css';

const Aboutme = (props) => {

    return(
        <div className="aboutme">
            <h1 className="Aboutme-heading">About me...</h1>
            <div className="aboutme-text">
                <p className="at">
                    Hello, I am Kartik Saxena. I am a third year student pursuing Bachelor of Engineering in the field of computer science. Well, yup computer science but not because its trendy out there but because its always trending within me.
                </p>
                <p className="at">
                    Taking you guys back to my young age i was a tech geek, i remember getting my first computer when i was about six years old, even before that i used to play games on my dad's PC in his office. so as one of my family member re-allocated abroad we bought a PC at home to do video call (Skype) to our relatives. These were the days when i was actually exposed to a computer and tried all the insane experiments with it. 
                </p>
                <p className="at">
                    In the early days i used to play games like Roadrash , Vice city, London racers and many more. If you guys have ever experienced watching a santaclaus movie like santabuddies or fantasy genre movies like Toy story etc.. i had the same experience with computers...
                </p>
                <p className="at">
                    Coming back to pro talks, After about one and a half years of massive deep dive into competitive programing and learning from the basics to training my mind for problem solving approach, I decided to switch for development. 
                </p>
                <p className="at">
                    Till date i have explored and worked on technologies starting from <span className="heighligh1">HTML</span>, <span className="heighligh1">CSS</span> ,<span className="heighligh1">Javascript</span> ,<span className="heighligh1">jQuery</span> ,<span className="heighligh1">Typescript</span> and some Javascript frameworks like <span className="heighligh1">Reactjs</span> ,<span className="heighligh1">Vuejs</span> ,<span className="heighligh1">jQuery</span> ,<span className="heighligh1">React Native</span>. i have also designed and developed many minor projects on the above stated technology and is now aiming to get some real life experience.
                </p>
                <h2 className="thankyou">Thankyou....</h2>
            </div>
        </div>
        
    );
}

export default Aboutme;