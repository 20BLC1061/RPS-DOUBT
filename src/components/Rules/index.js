import './index.css'
import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'

const Rules = () => (
  <Popup
    trigger={
      <button className="rulesBtn" type="button">
        Rules
      </button>
    }
    modal
    nested
  >
    {close => (
      <div className="modal">
        <div className="rules-content">
          <button className="close" onClick={close} type="button">
            <RiCloseLine />
          </button>

          <img
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
            className="rulesImage"
          />
        </div>
      </div>
    )}
  </Popup>
)

export default Rules
