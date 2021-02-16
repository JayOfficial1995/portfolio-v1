import React from "react";
import SectionList from "../../components/SectionList/SectionList";

import {
  experianceData,
  hobbiesData,
  OverviewData,
  skillSData,
} from "../../jsonData/aboutData";

import { AboutStyle, ExperianceStyle, OverviewStyle } from "./About.style";

const Experiance = () => {
  return (
    <ExperianceStyle>
      <h1 className="title">Professional Experience</h1>

      <article className="experiance-tabs-wrapper">
        {experianceData.map((data) => {
          const { year, position, companyName, address, description } = data;
          return (
            <article className="experiance-box">
              <span className="work-year">{year}</span>
              <h1 className="box-title">{position}</h1>
              <article className="company-details">
                <h2 className="company-name">{companyName}</h2>
                <p className="address">{address}</p>
              </article>
              <ul className="job-description-wrapper">
                {description.map((jobData) => (
                  <li className="job-description">{jobData}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </article>
    </ExperianceStyle>
  );
};

const Overview = () => {
  return (
    <OverviewStyle>
      <h1 className="title">Overview</h1>
      {OverviewData.map((data) => (
        <p className="description">{data}</p>
      ))}
    </OverviewStyle>
  );
};

function About() {
  console.log(skillSData);
  return (
    <AboutStyle>
      <Overview />
      <SectionList title="Skills" listItems={skillSData} />
      <Experiance />
      <SectionList title="Hobbies" listItems={hobbiesData} />
    </AboutStyle>
  );
}

export default About;
