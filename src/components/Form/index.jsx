import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { RepoContext } from "../../context/RepoContext";
import './style.css';

const Form = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState(null);
  const [repos, setRepos] = useContext(RepoContext);
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRepos(user);
    setUser("");
  };

  const updateInput = (e) => {
    const input = e.target.value;
    setUser(input);
  };

  const fetchRepos = async (user) => {
    try {
      setError(null);
      const { data } = await axios.get(
        `https://api.github.com/users/${user}/repos`        
      );
      if (!data.length) {
        setError("Sorry, this user has no public repos");
      }
      const array = data.map((repo) => {
        let username = repo.owner.login;
        let repoName = repo.name;
        let url = repo.html_url;
        let forks = repo.forks;
        let openIssues = repo.open_issues;
        let watchers = repo.watchers;
        let stargazers = repo.stargazers_count;
        return {
          username,
          repoName,
          url,
          forks,
          openIssues,
          watchers,
          stargazers,
        };
      });
      setRepos(array);
      console.log(array);
    } catch (err) {
      setError("That's not a valid Username");
    }
  };

useEffect(() => {
  fetchRepos('fooster82')
}, [])

  return (
    <>
      <div id="search-wrapper">
        <form onSubmit={handleSubmit} aria-label="search">
          <input 
            id="form-textbox" 
            className = "expand-right"
            type="text"
            aria-label="Repo"
            value={user}
            name="user"
            placeholder="Username..."
            onChange={updateInput}
          />
        </form>      
      </div>
      {repos[0] && (
        <img 
          src={`https://github-readme-stats.vercel.app/api?username=${repos[0].username}`}
          id="stats-img"
        />
      )}
      <p id="error">{error}</p>
    </>
  );
};

export default Form;