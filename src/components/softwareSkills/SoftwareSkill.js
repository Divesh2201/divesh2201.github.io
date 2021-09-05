import React from "react";
import "./SoftwareSkill.scss";
import StyleContext from "../../contexts/StyleContext";
import {useState, useContext} from "react";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  const {isDark} = useContext(StyleContext);
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {
                  skills.skillName === 'C++' ? <img src={skills.src} width="50" height="55" /> : 
                  skills.skillName === 'Django' && isDark ? <img src='https://seeklogo.com/images/D/django-logo-F46C1DD95E-seeklogo.com.png' width="44" height="55" /> : 
                  skills.skillName === 'AWS' && isDark ? <img src='https://cdn.worldvectorlogo.com/logos/aws-logo.svg' width="55" height="55" /> : 
                  skills.skillName === 'AWS' ? <img src = {skills.src} width="55" height="38" />: 
                  skills.skillName === 'JavaScript' ? <img src = {skills.src} width="50" height="55" />: 
                  skills.skillName === 'CI/CD' && isDark ? <img src='https://user-images.githubusercontent.com/296864/90276707-f691d800-de29-11ea-8d36-a4a756e3b524.png' width="55" height="55" /> : 
                  <img src = {skills.src} width="55" height="55" />
                }
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
