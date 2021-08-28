import React, {useContext} from "react";
import "./WorkExperience.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {workExperiences, communityWork} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <div className="education-section" id="experience">
        <h1 className="education-heading">Work Experience</h1>
        <div className="education-card-container">
          {workExperiences.experience.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
        <h1 className="education-heading" id="communitywork">Community Work</h1>
        <div className="education-card-container">
          {communityWork.communityWork.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
