import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://wamy-style-api.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

// client
//   .query({
//     query: gql`
//       query {
//         allProducts {
//           name
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));
export default client;
