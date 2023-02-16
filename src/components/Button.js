import React from "react";
import classNames from "classnames";

import "components/Button.scss";

export default function Button(props) {

   const disabled = props.disabled
   
   const handleClick = () => {
      alert('button clicked!')
   }

   const buttonClass = classNames("button", {"button--confirm": props.confirm, "button--danger": props.danger})

   return <Button className={buttonClass} onClick={handleClick} disabled={disabled}>{props.children}</Button>;
}
