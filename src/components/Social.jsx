import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-envelope",
    link: "biz.forahia@gmail.com",
  },
  { iconName: "fa fa-linkedin-square", link: "https://www.linkedin.com/in/chijindu-nwokeohuru/" },
  {
    iconName: "fa fa-github",
    link: "https://github.com/Chi-G",
  },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
