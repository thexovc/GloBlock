const { gql } = require("@apollo/client");

const GET_My_PASSPORT = gql`
  query DataQuery($holder: String) {
    passportMinteds(first: 5, where: { holder: $holder }) {
      id
      holder
      tokenId
      tokenURI
    }
  }
`;

export default GET_My_PASSPORT;
