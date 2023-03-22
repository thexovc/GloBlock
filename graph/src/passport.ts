import { BigInt, Address } from "@graphprotocol/graph-ts";
import { PassportMinted as PassportMintedEvent } from "../generated/passport/passport";
import { PassportMinted } from "../generated/schema";

export function handlePassportMinted(event: PassportMintedEvent): void {
  let passportMinted = PassportMinted.load(
    getIdFromEventParams(event.params.tokenId, event.params.holder)
  );
  if (!passportMinted) {
    passportMinted = new PassportMinted(
      getIdFromEventParams(event.params.tokenId, event.params.holder)
    );
  }
  passportMinted.holder = event.params.holder;
  passportMinted.tokenId = event.params.tokenId;

  passportMinted.save();
}

function getIdFromEventParams(tokenId: BigInt, nftAddress: Address): string {
  return tokenId.toHexString() + nftAddress.toHexString();
}
