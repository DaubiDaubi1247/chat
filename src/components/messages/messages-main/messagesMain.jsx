import Message from "./message/message";


const MessagesMain = (props) => {
    const getArrMsg = props.arrMsgs.map(el => <Message {...el}/>)
    const getArrUsers = props.arrUsers.map(el => <div>{el}</div>)
    return (
        <div>
            <div>
                {getArrMsg}
                <h3>Online Users</h3>
                {getArrUsers}
            </div>
        </div>
    );
}

export default MessagesMain;