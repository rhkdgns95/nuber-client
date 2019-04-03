import {gql} from "apollo-boost";

// 이 영역은 API에 자동으로 실행될 쿼리가 된다. //
// 하지만 원하지 않는다. 왜냐면 API에 auth resolver가 존재하지 않기 때문이다.
// 그래서 캐쉬에 보낸다.

// IS_LOGGED_IN은
// graphql tags들을 입력하는걸 가능하게 해준다.
// 그리고 tags들은 backtics(`)와 함께 묶여야한다.
// gql``안에 {} 내용은 쿼리이다.

// 어디서 로그인 상황을 물어봐야하는가?
// 바로 apollo.ts에서 auth부분이다.
// 원래는 API로 보내서 resolvers에서 구현한것을 확인할테지만, 
// 우리는 client측에서 확인을 원하므로 API에 보내지않고 @client입력후 캐쉬에 보내게된다.

export const IS_LOGGED_IN = gql`
    {
        auth {
            isLoggedIn @client
        }
    }
`;