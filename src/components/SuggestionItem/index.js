import './index.css'

const SuggestionItem = props => {
  const {dataList, selectingList} = props
  const {suggestion} = dataList

  const selectTheItem = () => {
    selectingList(suggestion)
  }
  return (
    <div className="searchList">
      <li className="para">{suggestion}</li>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={selectTheItem}
      />
    </div>
  )
}

export default SuggestionItem
