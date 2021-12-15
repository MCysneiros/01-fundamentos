import { RepositoryItem } from './RepositoryItem';

const repository = {
  name: 'unform',
  description: 'Forms in ReactJs',
  link: 'https://github.com/unform/unform',
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  );
}