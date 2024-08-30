import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Forahia" },
  { meta: "last name", metaInfo: "Enterprise" },
  { meta: "Email", metaInfo: "mailto:biz.forahia@gmail.com" },
  { meta: "LinkedIn", metaInfo: "https://www.linkedin.com/in/chijindu-nwokeohuru/" },
  { meta: "Github", metaInfo: "https://github.com/Chi-G" },
  { meta: "Resume", metaInfo: "https://docs.google.com/document/d/1bBtUzSRFdbAUjToRVkuR5E5Kg1v8lDQRKSi1nDsEVlQ/edit?usp=sharing" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {/* Check if the meta tag is one of the link types */}
            {["Email", "LinkedIn", "Github", "Resume"].includes(val.meta) ? (
              <a
                href={val.metaInfo}
                target="_blank"
                rel="noopener noreferrer"
              >
                {val.meta === "Email" ? "Link" : "Link"}
              </a>
            ) : (
              val.metaInfo
            )}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
