import React from 'react';
import { connect } from 'react-redux';
import { requestLogin } from '../../redux/reducers/auth-reducer';
import Header from './Header/Header';

class HeaderContainer extends React.Component {
    
    componentDidMount = () => {
        this.props.requestLogin();
    }

    render() {
        return (
            <Header isLogin={this.props.isLogin} info={this.props.userInfo}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isLogin,
        userInfo: state.auth.info
    }
}

export default connect(mapStateToProps,{
    requestLogin,
})(HeaderContainer)