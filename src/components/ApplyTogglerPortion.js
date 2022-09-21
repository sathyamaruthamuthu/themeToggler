import React, {useContext} from "react";
import ThemeContext from "../context/ThemeContext";
import AppTheme from "../colors";

const ApplyTogglerPortion = () => {
    //
    const themeMode = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[themeMode];
    return(
        <div style={{
                color: `${currentTheme.textColor}`,
                backgroundColor: `${currentTheme.backgroundColor}`,
                padding : "1rem",
                textAlign: "center"
            }}>
                <h1>Theme Toggler - Context API</h1>
                <p>This is a Paragraph</p>
                <button style={{
                    color: "#E07C24",
                    backgroundColor: "#F7CD2E",
                    padding: "10px 150px",
                    fontSize: "20px",
                    border: `${currentTheme.border}`
                }}>
                    Click Me
                </button>
            </div>
        
    )
}

export default ApplyTogglerPortion;