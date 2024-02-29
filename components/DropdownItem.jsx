

const DropdownItem = (props) => {

  function onClickHandler(e) {
      e.preventDefault();
      if (props.goToMenu) {
        props.setActive(props.goToMenu);
    }
  }

  return (
    <a href={`${props.site}`} 
    className="menu-item" 
    onClick={props.site ? undefined : onClickHandler}
    target="_blank" 
    >
        {props.left && <span className="icon-button">{ props.left }</span>}
        {props.children}
        {props.right && <span className="icon-button">{ props.right }</span>}

    </a>
  )
}

export default DropdownItem