import React, { useState, useContext } from "react";
import axios from "axios";
import { RepoContext } from "../../context/RepoContext";

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
      const array = data.reverse().map((repo) => {
        let username = repo.owner.login;
        let repoName = repo.name;
        let url = repo.html_url;
        let forks = repo.forks;
        let openIssues = repo.open_issues;
        let watchers = repo.watchers;
        let language = repo.language;
        let stargazers = repo.stargazers_count;
        return {
          username,
          repoName,
          url,
          forks,
          openIssues,
          watchers,
          language,
          stargazers,
        };
      });
      setRepos(array);
      console.log(array);
    } catch (err) {
      setError("That's not a valid Username");
    }
  };

  return (
    <div id="search-wrapper">
      <form onSubmit={handleSubmit} aria-label="search">
        <input
          className="search-input"
          type="text"
          aria-label="Repo"
          value={user}
          name="user"
          placeholder="Get Spying!"
          onChange={updateInput}
        />
        <input className="search-btn" type="submit" value="Search" />
      </form>
      {repos && repos[0] && (
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${
            repos[0] && repos[0].username
          }
        `}
        />
      )}
      <p>{error}</p>
    </div>
  );
};

export default Form;