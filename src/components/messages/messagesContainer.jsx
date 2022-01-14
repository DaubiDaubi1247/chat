import { useEffect } from "react";
import { connect } from "react-redux";
import socket from "../../common/socket";
import { getOnlineUsersAndMsg, addMessage, setUserData, setUsers } from "../../redux/reducers/messages-reducer";
import MessagesMain from "./messages-main/messagesMain";
import MessagesStart from "./messagesStart";
import MessageInput from "./messages-main/message-input/messageInput"

const MessagesContainer = (props) => {

    useEffect(() => {
        socket.on("ROOM:JOINED", users => {
            props.setUsers(users);
        })
        socket.on("ROOM:LEAVE",users => {
            props.setUsers(users);
        })
        socket.on("ROOM:ADD_MESSAGE", msg => {
            props.setMessage(msg)
        })
    },[])

    return ( 
        <div>
            <MessagesStart getOnlineUsers={props.getOnlineUsersAndMsg} setUser={props.setUserData}/>
            <MessagesMain arrUsers={props.arrUsers} arrMsgs={props.messages} userData={props.userData}/>
            <MessageInput setMessage={props.addMessage} userData={props.userData}/>
        </div> 
    );
}


const mapStateToProps = (state) => {
    return {
        userData: state.messages.userData,
        arrUsers:state.messages.users,
        messages:state.messages.messages
    }
}

export default connect(mapStateToProps,{
    setUserData,setUsers,getOnlineUsersAndMsg,addMessage
})(MessagesContainer);
