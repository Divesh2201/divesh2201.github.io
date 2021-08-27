import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo, workExperiences} from "../../portfolio";

export default function Education() {
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">Education</h1>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
        <h1 className="education-heading">Work</h1>
        <div className="education-card-container">
          {workExperiences.experience.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
      
    );
  }
  return null;
}
