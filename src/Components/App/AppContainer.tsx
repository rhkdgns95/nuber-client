import React from "react";
import { graphql } from "react-apollo";
import { IS_LOGGED_IN } from "./AppQueries";
import AppPresenter from "./AppPresenter";

const AppContainer = ({data}) => <AppPresenter isLoggedIn={data.auth.isLoggedIn}/>;

// IS_LIGGED_IN은 쿼리로부터의 데이터가된다.
export default graphql(IS_LOGGED_IN)(AppContainer);