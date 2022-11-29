import React from "react";
import "./Modal.css"

const Modal = ({active, setActive}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={event => event.stopPropagation()}>
                <h1>Hello my fellas</h1>
            </div>
        </div>
    );
}

export default Modal;