"use client"
import { CSSTransition } from "react-transition-group"
import DropdownItem from "./DropdownItem"
import { ArrowIcon, ChevronIcon, CogIcon } from "./Icons"
import { useRef, useState } from "react"
import { SiMarketo } from "react-icons/si";

const DropdownMenu = (props) => {
    const [active, setActive] = useState('main')
    const [menuHeight, setmenu] = useState(null)
    const nodeRef = useRef(null);

    function calcHeight(e){
        const height = e.offsetHeight;
        setmenu(height);
    }

  return (
    <div className="dropdown" style={{ height: menuHeight}}>
        <CSSTransition 
        nodeRef={nodeRef}
        in={active === 'main'} 
        unmountOnExit 
        timeout={500} classNames="menu-primary"
        onEnter={calcHeight}>
            <div className="menu">
                <DropdownItem left={<SiMarketo />}>
                    Marketing Tools
                </DropdownItem>
                <DropdownItem 
                left={<CogIcon />} 
                goToMenu="design" 
                setActive={setActive}>
                    Design Tools
                </DropdownItem>
            </div>
            
        </CSSTransition>
        <CSSTransition  in={active === 'design'} unmountOnExit timeout={500} classNames="menu-secondary">
            <div className="menu">
                <DropdownItem 
                left={<ArrowIcon />} 
                goToMenu="main" 
                setActive={setActive}>
                    Back
                </DropdownItem>
                <DropdownItem 
                left={<CogIcon />} 
                goToMenu="graphic" 
                setActive={setActive}>
                     Graphic Design 
                </DropdownItem>
                <DropdownItem > Web Design </DropdownItem>
                <DropdownItem > UI/UX Design </DropdownItem>
                <DropdownItem > Logo Design </DropdownItem>
            </div>
        </CSSTransition>
        <CSSTransition  in={active === 'graphic'} unmountOnExit timeout={500} classNames="menu-secondary">
            <div className="menu">
                <DropdownItem 
                left={<ArrowIcon />} 
                goToMenu="design" 
                setActive={setActive}>
                    Back
                </DropdownItem>
                <DropdownItem site="https://markodenic.com/tools/">
                    Markodenic
                </DropdownItem>
            </div>
        </CSSTransition>
    </div>
  )
}

export default DropdownMenu