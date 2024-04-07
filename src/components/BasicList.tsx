export default function BasicList({ items }: { items: string[] }) {
  if (items.length === 0) return <p>No items provided.</p>;
  return (
    <ul>
      {items.map((item, index) => (
        <li role="listitem" key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
}
