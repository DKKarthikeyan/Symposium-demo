import React from "react";
import '../assets/style/event3.css';
import styled from 'styled-components';
import uiuxignite from '../assets/img/CSE/uiux-ignite.png';
import codeunravelled from '../assets/img/CSE/code-unravelled1.png';
import { useNavigate } from "react-router-dom";
import QueryCard from "../Components/QueryCard";

const EventContainer = styled.div`
  display: flex;
  width: 90%; // Adjust as needed
  max-width: 960px; // Optional max-width
  margin: 20px auto; // Center the container
  background-color: #282c34; // Dark background like your image
  color: white;
  border-radius: 8px;
  overflow: hidden; // Ensure image stays within container
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Add a subtle shadow
`;

const ImageSide = styled.div`
  flex: 1; // Takes up 1/2 the container width
  overflow: hidden; // For image containment
`;

const EventImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; // Maintain aspect ratio and cover the area
  display: block; // Prevents a small gap below the image
`;

const TextSide = styled.div`
  flex: 1; // Takes up 1/2 the container width
  padding: 20px;
`;

const Prize = styled.div`
  background-color: #f0506e; // Example prize color
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 10px;
  display: inline-block; // So it only takes up necessary width
`;

const Title = styled.h2`
  color: #61dafb; // Example title color
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ReadMore = styled.a`
  background-color: #61dafb; // Example button color
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4fa3d1; // Darker on hover
  }
`;
function csetech() {
    const navigate = useNavigate();
    const contacts = [
  
      { name: "Mr R .Keerthi Haran", number: "9345996914" },
      { name: "Mr. C. Vishnu Balaji", number: "8072044568" },
      { name: "Ms. R. Akshal", number: "7418990030" },
      { name: "Ms. P. Sruthi", number: "7604872819" },
    ];
  return (

    <>
   <h1 className='ps-5 mt-4 bigText fontOne'><i className='primaryColor'>/ </i>Events</h1>
    <div className="event-container"> {/* Use class names from external CSS */}
      <div className="image-side">
      <div class="ribbon ribbon-top-right "><span>&nbsp;&nbsp;&nbsp; Exciting Rewards</span></div>
        <img className="event-image" src={codeunravelled} alt="Starlight Coding Event" />
      </div>
      <div className="text-side">
        <h2 className="title">&lt; Code Unravelled /&gt;</h2>
        <p className="description pb-3">
        Teams will be given multiple pieces of code containing intentional errors,The challenge duration is 30 minutes.Participants must find and fix as many errors as possible,Points are awarded based on the total count of errors identified and fixed correctly

        </p>
        <a className="btn btn-outline-warning border-3 read-more"  onClick={() => navigate('/cse/csetec1')} >Read More &lt;-&gt;</a>
      </div>
    </div>


    <div className="event-container"> {/* Use class names from external CSS */}
      <div className="image-side">
      <div class="ribbon ribbon-top-right"><span>&nbsp;&nbsp;&nbsp; Exciting Rewards</span></div>
        <img className="event-image" src={uiuxignite} alt="Starlight Coding Event" />
      </div>
      <div className="text-side">
        <h2 className="title">&lt; UI/UX Ignite /&gt;</h2>
        <p className="description pb-3">
        This is an individual competition where participants must design  using toold like Figma. The topic will be given on the spot. Creativity, originality, and visual appeal are key factors in the evaluation. Participants should focus on clear composition, effective use of color and typography, and maintaining a balanced layout.
        </p>
        <a className="btn btn-outline-warning border-3 read-more" onClick={() => navigate('/cse/uiuxignite')} >Read More &lt;-&gt;</a>
      </div>
    </div>
    <QueryCard contacts={contacts} />
    
    </>
    
  );
}
export default csetech;