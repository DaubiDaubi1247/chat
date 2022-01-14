import { Form, Field } from 'react-final-form'
import socket from '../../../../common/socket';


const MessageInput = (props) => {
    const onSubmit = (e) => {
        const msg = {
            userName:props.userData.userName,
            roomId:props.userData.roomId,
            msg:e.first
        }
        props.setMessage(msg);
        socket.emit("ROOM:NEW_MESSAGE",msg);
        e.first = "";
    }
    const validate = (e) => {
        const error = {};
        if (!(e.first?.length)) {
            error.first = "you have not entered a message"
        }
        return error
    }
    return (
            <Form onSubmit={onSubmit}
            validate={validate} 
            render={({handleSubmit}) => (
                <form action="" onSubmit={handleSubmit}> 
                {/* при отправке передает передает имя поля и его value в функцию onSubmit */}
                    <div>
                        <Field name="first" 
                        render={({input,meta}) => (
                            <div>
                                <textarea {...input}/>   
                                {meta.touched && meta.error && <span>{meta.error}</span>}
                            </div>
                            )}
                        />
                    </div>
                    <button type="submit">add Message</button>
                </form>
            )
            }
        />)
}

export default MessageInput