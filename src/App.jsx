import "./App.css";
import HomePage from "./pages/Home";
import { CartProvider } from "./context/cartContext"; // استيراد الـ Provider الصحيح

function App() {
  return (
    <CartProvider>
      <HomePage />
    </CartProvider>
  );
}

export default App;