// AppPresenter  로그인의 참, 거짓 여부를 골라야한다.
// route를 만들지 / 안만들지를 정하기 위해서
import React from "react";
import PropTypes from "prop-types";

interface IProps {
    isLoggedIn: boolean
};

const AppPresenter: React.SFC<IProps> = ({isLoggedIn}) => isLoggedIn ? <span>Logged In!</span> : <span>Logged Out!</span>;

AppPresenter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};



export default AppPresenter;