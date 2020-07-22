import React,{useState} from 'react';
import Projectcard from '../project/projectcard';
import '../../component-style/projects.css';

const Project = () => {

    const [pro,setpro] = useState([
        {title:"myshoppie" ,pic:require('../../images/reactjs.png') ,techused:["Reactjs","HTML","CSS",] ,feature: "" ,github:"https://github.com/kartiks2000/Reactjs-myshoppie-project" ,hosted: "" ,guided: false},
        {title:"Vue Todo" ,pic:require('../../images/vuejs.png') ,techused:["Vuejs","HTML","CSS",] ,feature: "" ,github:"https://github.com/kartiks2000/Vuejs-Todo-webapp" ,hosted:"" ,guided: false},
        {title:"Beautiful quotes" ,pic:require('../../images/vuejs.png'),techused:["Vuejs","HTML","CSS",] ,feature: "" ,github:"https://github.com/kartiks2000/Vuejs-Beautiful-quote" ,hosted:"" ,guided: true},
        {title:"student portal" ,pic:require('../../images/vuejs.png') ,techused:["Vuejs","HTML","CSS",] ,feature: "" ,github:"https://github.com/kartiks2000/Vuejs-Student-portal-project" ,hosted:"" ,guided: false},
        {title:"React filter" ,pic:require('../../images/reactjs.png'),techused:["Reactjs","HTML","CSS"] ,feature: "" ,github:"https://github.com/kartiks2000/React-filter" ,hosted:"https://reactfilters.netlify.app/" ,guided: true},
        {title:"Vue Counter" ,pic:require('../../images/vuejs.png') ,techused:["Vuejs","HTML","CSS"] ,feature: "" ,github: "https://github.com/kartiks2000/Vuejs-counter",hosted:"" ,guided: false},
        {title:"React Todo" ,pic:require('../../images/reactjs.png') ,techused:["Reactjs","HTML","CSS"] ,feature: "" ,github: "https://github.com/kartiks2000/React-todo",hosted: "https://reactjstodoks.netlify.app/" ,guided: false},
        {title:"Vehicle inven." ,pic:require('../../images/reactjs.png') ,techused:["Reactjs","HTML","CSS"] ,feature: "" ,github:"" ,hosted:"" ,guided: false},
        {title:"React register" ,pic:require('../../images/reactjs.png'),techused:["Reactjs","HTML","CSS"] ,feature: "" ,github:"https://github.com/kartiks2000/React-info-register" ,hosted:"https://reactjsform.netlify.app/" ,guided: true},
        {title:"Form" ,pic:require('../../images/jquery.png') ,techused:["jQuery","HTML","CSS"] ,feature: "" ,github:"https://github.com/kartiks2000/Form-Jquery-" ,hosted:"https://formappjquery.netlify.app/" ,guided: false},
        {title:"Guessing game" ,pic:require('../../images/js.jpg') ,techused:["Vanilla JS","HTMl","CSS"] ,feature: "" ,github:"https://github.com/kartiks2000/guessing-game" ,hosted:"" ,guided: false},
        {title:"jQuery notes" ,pic:require('../../images/jquery.png'),techused:["Vanilla JS","HTML","CSS"] ,feature: "" ,github:"https://github.com/kartiks2000/notes-js-and-Jquery-" ,hosted:"" ,guided: true},
        {title:"notes app" ,pic:require('../../images/js.jpg') ,techused:["Vanilla JS","HTML","CSS"] ,feature: "" ,github:"https://github.com/kartiks2000/Notify-The-notes-app-Vanilla-JS-" ,hosted:"https://notifyks.netlify.app/" ,guided: false},
        {title:"Budget App" ,pic:require('../../images/js.jpg') ,techused:["Vanilla JS","HTML","CSS"] ,feature: "" ,github:"https://github.com/kartiks2000/Budget-App" ,hosted:"https://budgetappks.netlify.app/" ,guided: true},
        {title:"Color picker" ,pic:require('../../images/js.jpg') ,techused:["Vanilla JS","HTML","CSS"] ,feature: "" ,github:"https://github.com/kartiks2000/Picker-Picker" ,hosted:"https://colorpickerks.netlify.app/" ,guided: false},
        {title:"BMI Calculator" ,pic:require('../../images/js.jpg') ,techused:["Vanilla JS","HTML","CSS"] ,feature: "" ,github:"https://github.com/kartiks2000/BMI-Calculator" ,hosted:"https://bmicalculater.netlify.app/" ,guided: false},
        {title:"JS clock" ,pic:require('../../images/js.jpg') ,techused:["Vanilla JS","HTML","CSS"] ,feature: "" ,github:"https://github.com/kartiks2000/JS-clock" ,hosted:"https://jsclockks.netlify.app/" ,guided: true},
        {title:"Tip Calculator" ,pic:require('../../images/js.jpg') ,techused:["Vanilla JS","HTML","CSS"] ,feature: "" ,github:"https://github.com/kartiks2000/Tip-Calculator" ,hosted:"https://tipcalculatorks.netlify.app/" ,guided: false},
        {title:"Web agency" ,pic:require('../../images/htmlcss.jpg') ,techused:["Vanilla JS","HTML","CSS"] ,feature: "" ,github:"https://github.com/kartiks2000/Web-Agency" ,hosted:"https://webagencyks.netlify.app/" ,guided: true},
        {title:"Paradise In" ,pic:require('../../images/htmlcss.jpg') ,techused:["Vanilla JS","HTML","CSS"] ,feature: "" ,github:"https://github.com/kartiks2000/Paradise-Inn" ,hosted:"https://paradiseinn.netlify.app/" ,guided: false},
        {title:"Tea Station" ,pic:require('../../images/htmlcss.jpg') ,techused:["Vanilla JS","HTML","CSS"] ,feature: "" ,github:"https://github.com/kartiks2000/TeaStation" ,hosted:"https://teastationks.netlify.app/" ,guided: true},
        {title:"Backpacers cult" ,pic:require('../../images/htmlcss.jpg') ,techused:["Vanilla JS","HTML","CSS"] ,feature: "" ,github:"https://github.com/kartiks2000/Backpacker-s-Cult" ,hosted:"https://backpackerscult.netlify.app/" ,guided: false},
        {title:"BGN landing page" ,pic:require('../../images/htmlcss.jpg') ,techused:["JS","HTML","CSS"] ,feature: "" ,github:"https://github.com/kartiks2000/bgn-landing-page" ,hosted:"https://bgnks.netlify.app/" ,guided: false},
        {title:"Coding addict" ,pic:require('../../images/htmlcss.jpg') ,techused:["JS","HTML","CSS"] ,feature: "" ,github:"https://github.com/kartiks2000/Coding-Addict" ,hosted:"https://codingaddictks.netlify.app/" ,guided: true},
        {title:"Natours" ,pic:require('../../images/htmlcss.jpg'),techused:["JS","HTML","CSS"] ,feature: "" ,github:"https://github.com/kartiks2000/Natours" ,hosted:"https://natoursks.netlify.app/" ,guided: true},
        {title:"Img Coarousel" ,pic:require('../../images/js.jpg'),techused:["Vanilla JS","HTML","CSS"] ,feature: "" ,github:"https://github.com/kartiks2000/Automatic-Picture-Carousel" ,hosted:"https://autopicturecarousel.netlify.app/" ,guided: false},
        {title:"Trello" ,pic:require('../../images/htmlcss.jpg'),techused:["JS","HTML","CSS"] ,feature: "" ,github:"https://github.com/kartiks2000/Trello" ,hosted:"https://trilloks.netlify.app/" ,guided: true},
        // {title:"" ,pic:"",techused:["Vanilla JS","HTML","CSS"] ,feature: "" ,github:"" ,hosted:"" ,guided: true},
        // {title:"" ,techused:[] ,feature: "" ,github: ,hosted:"" ,guided: false},
    ]);

    return(
        <div className="projects">
            <h1 className="pro-note">NOTE-: Vue projects are not live but accept that al,ost all projects are live and excessible, for more information regarding projects kindly refer to the Github repository.</h1>
            {pro.map(pro => {
                return (<Projectcard title={pro.title} pic={pro.pic} techused={pro.techused} feature={pro.feature} github={pro.github} hosted={pro.hosted} guided={pro.guided}></Projectcard>);
            })
            } 
        </div>
    );
}

export default Project;