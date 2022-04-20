import "./KeyData.css"

const KeyData = (props) => {
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

export default KeyData
