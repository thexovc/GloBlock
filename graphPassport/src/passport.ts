import { PassportMinted as PassportMintedEvent } from "../generated/passport/passport";
import { PassportMinted } from "../generated/schema";

export function handlePassportMinted(event: PassportMintedEvent): void {
  let entity = new PassportMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.holder = event.params.holder;
  entity.tokenId = event.params.tokenId;
  entity.tokenURI = event.params.tokenURI;

  entity.save();
}
