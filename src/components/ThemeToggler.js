import React, {useContext} from "react";
import ThemeContext from "../context/ThemeContext";
import Icons from "./Icons";

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext);
    return (
        <div onClick = {() => {
            setThemeMode( themeMode === "light" ? "dark" : "light" )}
        }>
            <Icons mode={themeMode} />
            <span className="">{themeMode === "light" ? "Its Light Theme. Toggle to dark" : "Its dark. Switch on the light" }</span>
        </div>
    );
};

export default ThemeToggler;
