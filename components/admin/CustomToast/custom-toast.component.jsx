import React, { useEffect } from 'react';
import { useState } from 'react';
import Toast from 'react-bootstrap/Toast';

import './custom-toast.styles.css'


const CustomToast = ({title,  message, trigger, smallText, variant}) => {

  useEffect(() => {
    setShow(trigger)
  }, [trigger]);

  const [show, setShow] = useState(trigger);

  return(
        <Toast onClose={() => setShow(false)} show={show} delay={4000} autohide bg={variant?.toLowerCase()} className='toast'>
          <Toast.Header>
            {
              variant == "Danger" ? 
              (
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                  <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
                  <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
                </svg>
              ) :
              (
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              )
            }
            <strong className="me-auto">{ title }</strong>
            <small>{ smallText }</small>
          </Toast.Header>
          <Toast.Body className={ variant === 'Dark' ? '' : 'text-white'}>{ message }</Toast.Body>
        </Toast>
    )
}

export default CustomToast;