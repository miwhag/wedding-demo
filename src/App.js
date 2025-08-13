/** @format */
import Body from "./components/Body";
import "./index.css";
import { GuestProvider } from "./context/GuestContext";

function App() {
  return (
    <GuestProvider>
      <Body />
    </GuestProvider>
  );
}

export default App;
