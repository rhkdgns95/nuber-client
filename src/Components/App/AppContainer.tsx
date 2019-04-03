import React from "react";
import AppPresenter from "./AppPresenter";
import { graphql } from "react-apollo";
import { IS_LOGGED_IN } from "./AppQueries";
import styled, { ThemeProvider} from "../../typed-components";
import theme from "../../theme";

const Container = styled.div`
    width:100vh;
    height:100vh;
    background: ${prop => prop.theme.blueColor};
`;
const AppContainer = ({data}) => (
    <ThemeProvider theme={theme}>
        <Container>
            <AppPresenter isLoggedIn={data.auth.isLoggedIn}/>
        </Container>
    </ThemeProvider>
)

export default graphql(IS_LOGGED_IN)(AppContainer);

// IS_LIGGED_IN은 쿼리로부터의 데이터가된다.
// export default graphql(IS_LOGGED_IN)(AppContainer);