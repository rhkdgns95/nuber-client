import ApolloClient, {Operation} from "apollo-boost";

const client = new ApolloClient({
    clientState: {
        defaults: {
            auth: {
                __typename: "Auth", // 나중에 찾기위해서 이름 지정.
                isLoggedIn: Boolean(localStorage.getItem("jwt"))
            }
        },
        // 마치 resolvers의 API를 사용하는것 처럼 보인다. => login, logout이것들을 아폴로로 스테이트를 수정한다.
        resolvers: {
            Mutation: {
                // 1) token이 resolvers의 args가 된다.
                logUserIn: (_, {token}, {cache}) => {
                    localStorage.setItem("jwt", token);
                    cache.writeData({
                        data: {
                            auth:{
                                __typename: "Auth",
                                isLoggedIn: true
                            }
                        }
                    });
                    return null;
                },

                // 2) Cache객체가 resolvers의 컨텍스트 위에 있다.
                logUserOut: (_, __, {cache}) => {
                    localStorage.removeItem("jwt");
                    cache.writeData({
                        data: {
                            __typename: "Auth",
                            isLoggedIn: false
                        }
                    });
                    return null;
                }
            }
        }
    },
    request: async(operation: Operation) => {
        operation.setContext({
            // 헤더에 JWT을 보내는것이다.
            header: {
                "X-JWT": localStorage.getItem("jwt") || ""
            }
        });
    },
    // 우리의 grpahQL서버의 endpoint를 지정해주어야한다.
    uri: "http://localhost:4000/graphql"
});

export default client;