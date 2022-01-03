import SelfControlItems from "./self-control-items/selfControlItem"
import SelfControlNewTask from "./self-control-new-task/selfControlNewTask"
import { connect } from "react-redux"
import { removeTask, setTask } from "../../redux/reducers/self-control-reducer"


const SelfControlContainer = (props) => {
    return (
        <div>
            <h2>Задачи на сегодня</h2>
            <SelfControlItems arr={props.tasks} removeTask={props.removeTask}/>
            <SelfControlNewTask setTask={props.setTask}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tasks : state.selfControl.tasks
    }
}


export default connect(mapStateToProps,{
    setTask,removeTask
})(SelfControlContainer)