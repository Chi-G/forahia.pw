import React from "react";

const educationContent = [
  {
    year: "2024",
    degree: "MASTERS DEGREE",
    institute: "AHMADU BELLO UNIVERSITY",
    details: `  Masters in Information Management`,
  },
  {
    year: "2016",
    degree: "BACHELORS DEGREE",
    institute: "ADELEKE UNIVERSITY",
    details: `Computer Science And Mathematics`,
  },
  {
    year: "2009",
    degree: "DIPLOMA DEGREE ",
    institute: "MICHAEL OKPARA UNIVERSITY",
    details: `Diploma in Computer Science`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
