import React from 'react'
import { connect } from 'react-redux'
import { setSubscr } from '../../../redux/reducers/news-reducer';
import NewsGroup from './news-group/newsGroup'
import styled from "styled-components"

const WrapperHeader = styled.header`
    display:flex;
    justify-content:center;
    margin-bottom:10px
`

const HeaderNews = (props) => {
    let groups = props.arrSubscr.map(el => <NewsGroup setSubscr={props.setSubscr} {...el}/>);

    return (
        <WrapperHeader>
            {groups}
        </WrapperHeader>
    )
}

const mapStateToProps = (state) => {
    return {
        arrSubscr:state.news.arrSubscr,
    }
}
export default connect (mapStateToProps,{
    setSubscr,
})(HeaderNews)