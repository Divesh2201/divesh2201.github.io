import React, {useContext} from "react";
import "./Achievement.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  if (achievementSection.display) {
    return (
      <div className="education-section" id="achievements">
        <h1 className="education-heading">Achievements</h1>
        <div className="education-card-container">
          {achievementSection.experience.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
