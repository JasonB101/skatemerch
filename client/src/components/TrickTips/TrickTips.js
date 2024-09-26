import React, {useState} from "react"
import Styles from "./TrickTips.module.scss"
import Tip from "./Tip/Tip"

const TrickTips = ({ tips }) => {

  const [state, changeState] = useState(
    //Trick Tracks are FlipTricks, Slides, Grinds, Vert
    {
    trickTrackSelected: ""
  }
)
  const tipComponents = tips.map((tip) => <Tip tip={tip} />)
  return (
  <div className={Styles["trickTipsWrapper"]}>
    <h3>If there is a trick not listed, or if you think the order of progression is incorrect, let us know!</h3>
  {tipComponents}
  </div> )
}

export default TrickTips
