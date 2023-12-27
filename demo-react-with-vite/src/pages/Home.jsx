import { useContext } from "react";
import ThemeContext from "../ThemeContext";

const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Welcome to the Fancy Homepage!</h1>
      <p>Feel free to add your own content here.</p>
      <button onClick={() => toggleTheme()}>{theme}</button>
    </div>
  );
};

export default Home;
