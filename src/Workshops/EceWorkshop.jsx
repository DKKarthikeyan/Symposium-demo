import React from 'react'
import ECEImage from '../assets/img/Workshops/ECEworkshop.png'
import WorkshopSpecficCard from '../Components/WorkshopSpecficCard';
import QueryCard from '../Components/QueryCard';
function EceWorkshop() {

  const Ece ={
    title:"Embedded Systems with Raspberry Pi",
    image:ECEImage ,
    dept:"ECE",
    para1:"This workshop explores Embedded Systems with Raspberry Pi, providing hands-on experience in developing real-world applications. Participants will learn about Raspberry Pi architecture, GPIO interfacing, Python programming, and sensor integration.",
    para2:" Topics include IoT applications, automation, real-time data processing, and AI integration using Raspberry Pi. The session covers hardware-software interaction, Linux fundamentals, and networking for embedded solutions",
    para3:"By the end, attendees will gain expertise in building efficient, scalable, and innovative embedded solutions using Raspberry Pi. Join us and explore limitless possibilities!",
    para4:"Pre-requisites: Participants are required to bring laptops. No prior knowledge is needed.",
    date:"21-Feb (Friday)",
    venue:"Dept of ECE"

}
const contacts = [
  { name: "Dr.S.Manikandan", number: "98948 28127" },
  { name: "Ms.M.Pothini", number: "63790 61588" },
  { name: "Mr.A.Janagan", number: "90035 69857" },
 
  // { name: "Ms V.Shriharini ", number: "9345828047" },
]


  return (
    <>
    <div><WorkshopSpecficCard Workshop={Ece}/></div>
    <QueryCard contacts={contacts} />
    </>
  )
}

export default EceWorkshop