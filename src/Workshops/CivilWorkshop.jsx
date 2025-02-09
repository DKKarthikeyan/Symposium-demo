import React from 'react';
import CivilImage from '../assets/img/Workshops/CIVILworkshop.png'

import { useEffect } from 'react';


import WorkshopSpecficCard from '../Components/WorkshopSpecficCard';
import QueryCard from '../Components/QueryCard';



const CivilWorkshop = () => {

     useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
        const Civil ={
            title:"3-D Modeling with AR/VR",
            image:CivilImage,
            dept:"CIVIL",
            para1:"Join us for an immersive experience into the world of 3-D Modeling with AR/VR. Discover how augmented reality and virtual reality are revolutionizing the field of civil engineering, providing new dimensions to design and visualization.",
            para2:"In this workshop, we'll delve into the transformative impact of AR/VR on 3-D modeling. Learn how to utilize these cutting-edge technologies to enhance your design process and create more interactive and realistic models.",
            para3:"Don't miss this chance to elevate your 3-D modeling skills with AR/VR. Register now and step into the future of civil engineering!",
            para4:"Pre-requisites: Participants are required to bring laptops. No prior knowledge is needed.",
            date:"20-Feb (Thursday)",
            venue:"Dept of Civil"

        }
        const contacts = [
          { name: "MR. P.M. Dhureen Karthik,", number: "9487144434" },
          { name: "MR. P. Jayaraj ", number: "8667797125" },
          { name: "MR. M. Krithik Ananth ", number: "7904406974" },
         
          { name: "Ms. G. Dharshana", number: " 7010213168" },
        ]

  return (
   <div>
    <WorkshopSpecficCard Workshop={Civil}/>
    <QueryCard contacts={contacts} /> 

   </div>
  );
};

export default CivilWorkshop;

