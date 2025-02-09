import React from 'react'
import { useEffect } from 'react'
import WorkShopCard from './Components/WorkshopCard'
import CSE from './assets/img/Workshops/CSEworkshop.jpeg'
import ECE from './assets/img/Workshops/ECEworkshop.png'
import EEE from './assets/img/Workshops/EEEworkshop.jpeg'
import MECH from './assets/img/Workshops/MECHworkshop.jpeg'
import CIVIL from './assets/img/Workshops/CIVILworkshop.png'
import ContactCard from './Components/ContactCard'

function Workshops() {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
 
  const Civil={
    workShop:"3-D Modeling with AR/VR",
    name:"CIVIL",
    image:CIVIL

  }
  const Cse={
    workShop:"Blockchain Technology",
    name:"CSE/IT/AI&DS",
    image:CSE

  }
  const Ece={
    workShop:"Embedded Systems with Raspberry Pi",
    name:"ECE",
    image:ECE

  }
  const Mech={
    workShop:"Drone-o-topia",
    name:"MECH",
    image:MECH

  }
  const Eee={
    workShop:"EV Retrofit",
    name:"EEE",
    image:EEE

  }
  return (
    <div>
      <h1 className='ps-5 mt-3 bigText fontOne'><i className='primaryColor'>/ </i>workshops</h1>
      <div className="container-md pt-5 pb-4">
      <div className='d-flex flex-wrap gap-4 justify-content-center sponsorFlex'>
        <WorkShopCard  workShopName={Civil.workShop} Deptname={Civil.name} workShopImage={Civil.image} />
        <WorkShopCard workShopName={Cse.workShop} Deptname={Cse.name} workShopImage={Cse.image} />
        <WorkShopCard workShopName={Ece.workShop} Deptname={Ece.name} workShopImage={Ece.image} />
        <WorkShopCard workShopName={Mech.workShop} Deptname={Mech.name} workShopImage={Mech.image} />
        <WorkShopCard workShopName={Eee.workShop} Deptname={Eee.name} workShopImage={Eee.image} />
      </div>
      <div className="workshopQuery d-flex mx-auto flex-column border border-5 border-primary rounded mt-4 p-4">
        <h4><i className='primaryColor'>#</i>Contact</h4>
        <p className='greyColor mb-0'>For queries regarding workshops</p>
        <ContactCard name="Mr.S.Nagamani" number="6383994849"/>
      </div>

      </div>
      
    </div>
  )
}

export default Workshops