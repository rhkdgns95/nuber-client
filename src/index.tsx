import React from "react";
import {ApolloProvider} from "react-apollo";
import ReactDOM from "react-dom";
import client from "./apollo";
import App from "./Components/App/AppContainer";
import GlobalStyle from './global-style';


ReactDOM.render(
<ApolloProvider client={client}>
    <GlobalStyle/>
    <App />
</ApolloProvider>,
 document.getElementById("root") as HTMLElement);