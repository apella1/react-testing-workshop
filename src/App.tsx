import HelloWorld from "./components/HelloWorld";
import ProductDescriptionToggle from "./components/ProductDescriptionToggle";
import UserAgreement from "./components/UserAgreement";

function App() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen px-8 md:px-16 lg:px-24 xl:px-44 2xl:px-60">
      <div className="flex flex-col space-y-8 w-full">
        <HelloWorld />
        <UserAgreement />
        <ProductDescriptionToggle description={"hello ".repeat(50)} />
      </div>
    </section>
  );
}

export default App;
