import styled from "styled-components"

const Wrapper = styled.div`
    text-align: center
    margin-right:10px;
`

const Button = styled.button`
    display:block;
`

const NewsGroup = (props) => {
    return (
        <Wrapper>
            <span>{props.groupName}</span>
            <img src={props.image} alt="" />
            
            {!props.subscr ? 
                <Button onClick={() => props.setSubscr(props.groupName,true)}>Подписаться</Button>
                :
                <Button onClick={() => props.setSubscr(props.groupName,false)}>Отписатьсся</Button>}
        </Wrapper>
    )
}

export default NewsGroup