export default function HelloWorld({ text }: { text?: string }) {
  if (text) return <h1 className="text-2xl font-medium">{text}</h1>;
  return (
    <p role="paragraph" className="text-2xl font-medium">
      Providing a sample text would&apos;ve been great.
    </p>
  );
}
