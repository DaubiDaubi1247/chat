

const SelfControlItem = (props) => {
    return (
        <li>
            <span>{props.textQuest}</span>
            <button onClick={() => props.removeTask(props.index)}>Delete Task</button>
        </li>
    )
}

export default SelfControlItem