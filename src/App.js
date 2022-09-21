import React, {useState} from "react";
import ThemeContext from "./context/ThemeContext";
import TogglerEntry from "./components/TogglerEntry";
import ApplyTogglerPortion from "./components/ApplyTogglerPortion";


const App = () => {
  const themeHook = useState("light");
  return(
    <ThemeContext.Provider value={themeHook}>
      <div>
        <TogglerEntry />
        <ApplyTogglerPortion />
      </div>
    </ThemeContext.Provider>
  )
}
export default App;
