import { PASSPORT_NFT_ADDRESS, PASSPORT_NFT_ABI } from "@/constants/constants";

export default function NFTBox({ tokenId, holder, tokenUri }) {
  const [imageURI, setImageURI] = useState("");
  const [passportholder, setPassportHolder] = useState("");

  async function updateUI() {
    if (tokenUri) {
      const requestURL = tokenUri.replace("ipfs//", "https://ipfs.io/ipfs/");
      const tokenURIResponse = await (await fetch(requestURL)).json();
      const imageURI = tokenURIResponse.image;
      const imageURIURL = imageURI.replace("ipfs://", "https://ipfs.io/ipfs/");
      setImageURI(imageURIURL);
    }
  }
}
