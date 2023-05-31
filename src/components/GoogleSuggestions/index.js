import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {inputSearch: ''}

  refreshSuggestion = event => {
    this.setState({inputSearch: event.target.value})
  }

  selectingList = suggestion => {
    this.setState({inputSearch: suggestion})
  }

  render() {
    const {inputSearch} = this.state
    const {suggestionsList} = this.props
    const filteredData = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(inputSearch.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="box-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="logo"
          />
          <div className="search-box">
            <div className="search-bar">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search"
              />
              <input
                type="search"
                className="input"
                placeholder="search google"
                onChange={this.refreshSuggestion}
                value={inputSearch}
              />
            </div>
            <ul>
              {filteredData.map(each => (
                <SuggestionItem
                  key={each.id}
                  selectingList={this.selectingList}
                  dataList={each}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
