import "./KeyData.css"
import PropTypes from "prop-types"

/**
 * Small component displaying a nutritional metric
 *
 * @param {Object} props
 *
 */

const KeyData = (props) => {
  console.log(props)

  return (
    <article className="keyData">
      <img className="keyDataIcon" src={props.src} alt="KeyData Icon"></img>
      <div className="keyDataInfos">
        <span className="keyDataNumber">{props.number}</span>
        <span className="keyDataName">{props.name}</span>
      </div>
    </article>
  )
}

KeyData.propTypes = {
  src: PropTypes.node,
  number: PropTypes.string,
  name: PropTypes.string,
}

export default KeyData
