const { gql } = require("@apollo/client");

const GET_My_VISA = gql`
  query DataQuery($holder: String) {
    visaMinteds(first: 5, where: { holder: $holder }) {
      id
      holder
      tokenId
      fromDate
      endDate
      tokenURI
    }
  }
`;

export default GET_My_VISA;
