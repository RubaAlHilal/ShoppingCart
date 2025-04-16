import "./App.css";
import HomePage from "./pages/Home";
import { CartProvider } from "./context/cartContext"; // استيراد الـ Provider الصحيح
import Login from "./pages/login";
import { useState } from "react";
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUserData(user);
  };

  return (
    <CartProvider>
    {isLoggedIn ? <HomePage user={userData} /> : <Login onLogin={handleLogin} />}
  </CartProvider>
  );
}

export default App;