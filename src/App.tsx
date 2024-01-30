import Navbar from "./components/NavBar";
// import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Home } from "./pages/home";

function App() {
  return (
    <>
      {/* <ShoppingCartProvider> */}
        <Navbar></Navbar>
        <Home />
      {/* </ShoppingCartProvider> */}
    </>
  );
}

export default App;
