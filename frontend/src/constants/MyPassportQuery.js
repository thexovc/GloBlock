const { gql } = require("@apollo/client");

const GET_My_PASSPORT = gql`
  query DataQuery($tokenId: String) {
    passportMinteds(first: 5) {
      id
      holder
      tokenId
    }
  }
`;

export default GET_My_PASSPORT;
