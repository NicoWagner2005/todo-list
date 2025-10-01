import { DisplayModeContext } from "../context/DisplayModeContext";
import { useContext } from "react";

function Header() {

    const {displayMode, setDisplayMode} = useContext(DisplayModeContext);
    
    return (
        <>
            <h1>Mi Lista de Tareas</h1>
            <p>
                DisplayMode: 
                <select value={displayMode} onChange={(e) => setDisplayMode(e.target.value)}>
                    <option value="compact">Compact</option>
                    <option value="detailed">Detailed</option>
                </select>
            </p>
        </>
    );
}

export default Header;