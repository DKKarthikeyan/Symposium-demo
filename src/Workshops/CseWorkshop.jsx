import React from 'react'
import CseImage from '../assets/img/Workshops/CSEworkshop.jpeg'
import WorkshopSpecficCard from '../Components/WorkshopSpecficCard';
import QueryCard from '../Components/QueryCard';
function CseWorkshop() {
     const Cse ={
              title:"Blockchain Technology",
              image:CseImage ,
              dept:"CSE/IT/AI&DS",
              para1:"We are excited to announce an exclusive Blockchain Technology Workshop designed to provide a deep understanding of blockchain, its applications, and its impact on industries",
              para2:"This workshop bridges the gap between theoretical knowledge and practical implementation, helping participants gain hands-on experience with blockchain development,.",
              para3:"Our workshop covers fundamental blockchain concepts, including its structure, working principles, consensus mechanisms, and real-world applications.",
              para4:"Pre-requisites: Participants are required to bring laptops. No prior knowledge is needed.",
              date:"20-Feb (Thursday)",
              venue:"Dept of CSE"
  
          }
          const contacts = [
            { name: "Mrs. V. Sujitha", number: "9965630155" },
            { name: "Mrs. C. Priyadharshini", number: "9360407403" },
            { name: "Mr.N.Siva Subramanian ", number: "6381332167" },
           
            { name: "Ms V.Shriharini ", number: "9345828047" },
          ]

  return (
    <>
        <div><WorkshopSpecficCard Workshop={Cse}/></div>
        <QueryCard contacts={contacts} />
    </>

    
  )
}

export default CseWorkshop