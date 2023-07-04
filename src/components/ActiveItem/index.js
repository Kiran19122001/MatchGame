import {Component} from 'react'

import './index.css'

class ActiveItem extends Component {
  render() {
    const {tabsList, diplayActiveTab, isActive} = this.props
    const {tabId, displayText} = tabsList
    const onActiveClick = () => {
      diplayActiveTab(tabId)
    }
    const result = isActive ? 'active' : ''

    return (
      <li className="list-item">
        <button
          type="button"
          className={`active-tab${result}`}
          onClick={onActiveClick}
        >
          {displayText}
        </button>
      </li>
    )
  }
}
export default ActiveItem
