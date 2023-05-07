import React from 'react';

function Popap({ isVisible = false, onClose }) {
    const keydownHandler = ({ key }) => {
        switch (key) {
          case 'Escape':
            onClose();
            break;
          default:
        }
      };
      React.useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
      });


    return !isVisible ? null : (
        <div className="modal" onClick={onClose}>
            <div className="modal-dialog" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                Contakt me
                    <span className="modal-close" onClick={onClose}>
                        +
                    </span>
                </div>
                <div className="modal-body">
               
                <a className='link-item' target="_blank" href="https://www.linkedin.com/in/elena-andrysh/">LinkedIn</a>
                <a className='link-item' target="_blank" href="https://github.com/lenokand">GitHub</a>
                <a className='link-item' target="_blank" href="https://t.me/lenok_a">Telegram</a>
                <a className='link-item' target="_blank" href="mailto:shtanko1991@gmail.com">shtanko1991@gmail.com</a>
                <a className='link-item' target="_blank" href="tel:shtanko1991@gmail.com">076 223 98 03</a>

                </div>
            
            </div>
    </div>
    );
}

export default Popap;