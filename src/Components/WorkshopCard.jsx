import React from 'react'
import { useNavigate } from 'react-router'
function WorkShopCard({workShopName,Deptname,workShopImage}) {
  const navigate = useNavigate();
 

  const formattedWorkshopName = workShopName.toLowerCase().replace(/\s+|\//g, '-');
  return (
    
     <div className="card text-center cardWorkshop workShopCard " onClick={() => navigate(formattedWorkshopName)}>
        <div className="card-header workShopHead">
            <i className='primaryColor'># </i>{workShopName}           
        </div>
        <div className="card-body workShopBody">
             <img src={workShopImage}  />
             <p style={{"marginTop":"1rem"}}><i className='primaryColor'>// </i>Conducted by experts from <i className='primaryColor'>{Deptname}</i> Staffs</p>
        </div>
    </div>
    
  )
}

export default WorkShopCard