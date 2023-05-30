import './index.css'

const suggestionList = props => {
  const {list, key} = props
  const {suggestion} = list
  console.log(suggestion)
  return <p className="para">{suggestion}</p>
}

export default suggestionList
