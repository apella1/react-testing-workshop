import HelloWorld from "./components/HelloWorld";

function App() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen px-8 md:px-16 lg:px-24 xl:px-44 2xl:px-60">
      <div className="flex flex-col space-y-8 w-full">
        <HelloWorld />
      </div>
    </section>
  );
}

export default App;
