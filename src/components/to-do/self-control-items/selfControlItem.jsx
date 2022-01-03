import SelfControlItem from "./sel-control-item/selfControlitem"


const SelfControlItems = (props) => {
    const selfControlItems = props.arr.map((el,index) => <SelfControlItem textQuest={el} removeTask={props.removeTask} index={index}/>)
    return (
        <ul>
            {selfControlItems}
        </ul>
    )
}

export default SelfControlItems