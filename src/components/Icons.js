import { FaToggleOn, FaToggleOff } from "react-icons/fa";



const Icons = ({mode}) => {
    if(mode === "light"){
        return <FaToggleOn className="icons" size='50' />
    }else{
        return <FaToggleOff className="icons" size='50' />
    }
    
}


export default Icons;