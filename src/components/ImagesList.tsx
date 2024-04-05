export default function ImagesList({ imageUrls }: { imageUrls: string[] }) {
  if (imageUrls.length === 0) return null;

  return (
    <ul>
      {imageUrls.map((url) => (
        <li key={url}>
          <img src={url} alt="" />
        </li>
      ))}
    </ul>
  );
}
