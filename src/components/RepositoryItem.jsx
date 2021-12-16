export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'Default'}</strong>
      <p>{props.repository?.description ?? 'Default'}</p>
      <a target="_blank" href={props.repository?.html_url}>
        acessar repositorio
      </a>
    </li>
  );
}
