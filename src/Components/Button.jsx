import React , { useState } from 'react';

import Popap from './Popap'

Button.propTypes = {
    
};

function Button() {
    const [isModal, setModal] = React.useState(false);
    return (
        <>
             <button onClick={() => setModal(true)} className="button_contact">
                <svg>
                            <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                </svg>
                Contact
            </button> 
            <Popap isVisible={isModal} onClose={() => setModal(false)}/> 
        </>
    );
}

export default Button;