import styled from "styled-components";

const WrapperMsg = styled.div`
    border:1px solid black
`
const Message = (props) => {
    return (
        <WrapperMsg>
            <p>{props.msg}</p>
            <span>{props.userName}</span>
        </WrapperMsg>
    )
}

export default Message;