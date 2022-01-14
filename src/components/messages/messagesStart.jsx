import {  useState } from "react";
import socket from "../../common/socket";


const MessagesStart = (props) => {
    const [roomId,setRoomId] = useState("");
    const [userName,setUserName] = useState("");
    const enterRoom = () => {
        props.setUser({roomId,userName});
        socket.emit("ROOM:JOIN",{roomId,userName});
        props.getOnlineUsers(roomId)  
    }
    
    return (
        <div>
            <input type="text" value={roomId} onChange={e => setRoomId(e.target.value)}></input>
            <input type="text" value={userName} onChange={e => setUserName(e.target.value)}></input>
            <button onClick={enterRoom}>SEND</button>
        </div>
    )
}

export default MessagesStart