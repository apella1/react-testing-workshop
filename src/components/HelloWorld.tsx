export default function HelloWorld({ text }: { text?: string }) {
  if (text) return <h1 className="text-2xl font-medium self-center">{text}</h1>;
  return (
    <p role="paragraph" className="text-2xl font-medium self-center">
      Providing a sample text would&apos;ve been great.
    </p>
  );
}
