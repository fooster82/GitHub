import React from "react";

const RepoCard = ({
    repoName,
    url,
    forks,
    openIssues,
    watchers,
    stargazers,
    language,
  }) => {
    return (
      <div id="card">
        <a target="_blank" href={url}>
          {repoName}
        </a>
  
        <span className="language">{language}</span>
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