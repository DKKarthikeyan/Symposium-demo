import React from 'react'

import MechImage from '../assets/img/Workshops/MECHworkshop.jpeg'
import WorkshopSpecficCard from '../Components/WorkshopSpecficCard';
import QueryCard from '../Components/QueryCard';


function MechWorkshop() {

  const Mech ={
    title:"Drone-o-topia",
    image:MechImage,
    dept:"MECH",
    para1:"Join us for an immersive workshop experience, 'Drone-o-topia', where we'll delve into the exciting world of drone technology and its limitless possibilities. This hands-on workshop is designed to inspire innovation, foster creativity, and equip participants with the skills to shape the future of drones.",
    para2:"Participants will learn about aerial robotics, autonomous flying, and drone-based solutions in fields like surveillance, agriculture, and disaster management.",
    para3:" Ideal for tech enthusiasts, students, and professionals, this workshop provides practical insights into building, operating, and optimizing drones. ",
    para4:"Chance to operate the Drone",
    date:"21-Feb (Friday)",
    venue:"Dept of Mech"

}
const contacts = [
  { name: "Mr. R. Deepak ", number: " 9942305401" },
  { name: "Mr. M. Mohamed aslam ", number: "9952893601" },
 
 
  // { name: "Ms V.Shriharini ", number: "9345828047" },
]


  return (
   <>
    <div><WorkshopSpecficCard Workshop={Mech}/>
   </div>
   <QueryCard contacts={contacts} />
   </>
  )
}

export default MechWorkshop