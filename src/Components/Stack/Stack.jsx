import React from 'react';
import jiraa from "../../assets/icons/jiraa.png";
import teamss from "../../assets/icons/teamss.png";
import slackk from "../../assets/icons/slackk.png";
import linearr from "../../assets/icons/linearr.png";
import trelloo from "../../assets/icons/trelloo.png";
import asanaa from "../../assets/icons/asanaa.png";
import "./Stack.css";

function Stack() {
  return (
    <section className="stack">
      <div className="stack-inner">
        <h1 id="stack">PROJECT TOOLS</h1>
        <div className="stack-container">
          <img src={jiraa} alt="jira" className="tools-img" />
          <img src={trelloo} alt="trello" className="tools-img" />
          <img src={linearr} alt="linear" className="tools-img mt-4" />
          <img src={teamss} alt="teams" className="tools-img tools-img-teams" />
          <img src={asanaa} alt="asana" className="tools-img" />
          <img src={slackk} alt="slack" className="tools-img mt-5" />
        </div>
      </div>
    </section>
  );
}

export default Stack;
