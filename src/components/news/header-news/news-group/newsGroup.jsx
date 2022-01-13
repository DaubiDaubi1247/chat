import "./new-group.scss"

const NewsGroup = (props) => {
    return (
        <div className="group__wrapper">
            <span className="group__name">{props.groupName}</span>
            
            {!props.subscr ? 
                <button className="group__subscrBtn"onClick={() => props.setSubscr(props.groupName,true)}>Подписаться</button>
                :
                <button className="group__subscrBtn" onClick={() => props.setSubscr(props.groupName,false)}>Отписатьсся</button>}
        </div>
    )
}

export default NewsGroup