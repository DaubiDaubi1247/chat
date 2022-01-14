import { useEffect, useState } from "react"
import styled from "styled-components"
import Post from "./GroupContent"

const Memes = styled.div`
    margin:0 auto;
    max-height:1000px;
    margin-bottom:20px
    max-width:500px
    img {
        width:100%;
        height:100%;
        object-fit:cover;
    }
`

const MessageIfNotSubcr = styled.div`
    margin:0 auto;
    max-width:600px;
    font-size:18px
    font-weight:bold;
`

const NewsContent = (props) => {
   
    const getArrContent = (fromArr,toArr) => {
        let tempArr = [...toArr]
        if (fromArr.length !== 0) {
            for (let i = tempArr.length,j = 0; j < 2; j++,i++) {
                tempArr = [...tempArr,<Memes><img src={fromArr[i].url || fromArr[i]}/></Memes>]
            }
        }
        return tempArr
    }
    const [memesArr,addMemContent] = useState([]);
    const [dogArr,addDogContent] = useState([]);
    
    useEffect(() => {
        if (props.memesArr.length) {
            addMemContent(getArrContent(props.memesArr,memesArr))
        }
    },[props.memesArr.length])

    useEffect(() => {
        if (props.dogsArr.length) {
            addDogContent(getArrContent(props.dogsArr,dogArr))
        }
    },[props.dogsArr.length])

    return (
        <div>
            <Post arr={memesArr} getMore={() => addMemContent(getArrContent(props.memesArr,memesArr))}/>
            <Post arr={dogArr} getMore={() => addDogContent(getArrContent(props.dogsArr,dogArr))}/>
            {!(dogArr.length || memesArr.length) ? 
                <MessageIfNotSubcr>
                    <span>Что бы просматривать новостную ленту вам нужно быть подписанным хотя бы на одну группу</span>
                </MessageIfNotSubcr>
                : null
            }
        </div>
    )
}

export default NewsContent