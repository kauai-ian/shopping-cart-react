import Navbar from "./components/NavBar";
import { ShoppingCartProvider } from "./components/ShoppingCart";
import { Home } from "./pages/home";

function App() {
  return (
    <>
      <ShoppingCartProvider
        addItem={function (): void {
          throw new Error("Function not implemented.");
        }}
        removeItem={function (): void {
          throw new Error("Function not implemented.");
        }}
        quantity={0}
        id={""}
        cartQuantity={0}
        cartItems={[]}
      >
        <Navbar></Navbar>
        <Home />
      </ShoppingCartProvider>
    </>
  );
}

export default App;
