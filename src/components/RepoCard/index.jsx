import React from "react";
import './style.css';

const RepoCard = ({
    repoName,
    url,
    forks,
    openIssues,
    watchers,
    stargazers,
  }) => {
    return (
      <div id="card">
        <a id="repo-name" target="_blank" href={url}>
          {repoName}
        </a>
  
        <div id="details">
          <p>Forks: {forks}</p>
          <p>Open Issues: {openIssues}</p>
          <p>Watchers: {watchers}</p>
          <p>
            Stars: {stargazers}
          </p>
        </div>
      </div>
    );
  };
  
  export default RepoCard;