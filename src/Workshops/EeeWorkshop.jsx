import React from 'react'
import EEEImage from '../assets/img/Workshops/EEEworkshop.jpeg'
import WorkshopSpecficCard from '../Components/WorkshopSpecficCard';
import QueryCard from '../Components/QueryCard';
function EeeWorkshop() {

  const Eee ={
    title:"EV Retrofit",
    image:EEEImage,
    dept:"EEE",
    para1:"This workshop provides a comprehensive understanding of electric vehicles (EVs), their technology, and their role in shaping a sustainable future. Participants will explore EV components, battery technology, charging infrastructure, and energy management systems.",
    para2:"The session covers motor controllers, regenerative braking, smart connectivity, and government policies on EV adoption..",
    para3:"Hands-on demonstrations and discussions will help attendees understand EV design, efficiency optimization, and real-world applications. Ideal for students, engineers, and EV enthusiasts, this workshop equips participants with the knowledge and skills to contribute to the growing EV industry",
    para4:"Pre-requisites: Participants are required to bring laptops. No prior knowledge is needed.",
    date:"20-Feb (Thursday)",
    venue:"Dept of EEE"

}
const contacts = [
  { name: "Dr. K. Rajesh ", number: " 9942305401" },
  { name: "Mr. J. Jeffry ", number: "9442583263" },
  { name: "Mr. P. Keerthiga ", number: "9080474770" },
 
  // { name: "Ms V.Shriharini ", number: "9345828047" },
]


  return (
    <>
    <div><WorkshopSpecficCard Workshop={Eee}/></div>
    <QueryCard contacts={contacts} />
    </>
  )
}

export default EeeWorkshop