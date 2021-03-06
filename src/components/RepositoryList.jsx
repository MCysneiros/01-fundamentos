import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss';
import { useState, useEffect } from 'react';

// https://api.github.com/orgs/rocketseat/repos

export function RepositoryList() {
  const [repList, setRepList] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then((response) => response.json())
      .then((data) => setRepList(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>
      <ul>
        {repList.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}
