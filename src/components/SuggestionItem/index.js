import './index.css'

const SuggestionItem = props => {
  const {dataList, selectingList} = props
  const {suggestion} = dataList

  const selectTheItem = () => {
    selectingList(suggestion)
  }
  return (
    <li className="searchList">
      <p className="para">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={selectTheItem}
      />
    </li>
  )
}

export default SuggestionItem
