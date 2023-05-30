import {Component} from 'react'

import suggestionList from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  render() {
    const {suggestionsList} = this.props
    console.log(suggestionsList)

    return (
      <div className="bg-container">
        <div className="box-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="Google"
            className="logo"
          />
          <div className="search-box">
            <div className="search-bar">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search"
                className="search"
              />
              <input type="search" className="input" />
            </div>
            {suggestionsList.map(each => (
              <suggestionList key={each.id} list={each} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
