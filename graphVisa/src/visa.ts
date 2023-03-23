import { VisaMinted as VisaMintedEvent } from "../generated/visa/visa";
import { VisaMinted } from "../generated/schema";

export function handleVisaMinted(event: VisaMintedEvent): void {
  let entity = new VisaMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.holder = event.params.holder;
  entity.tokenId = event.params.tokenId;
  entity.fromDate = event.params.fromDate;
  entity.endDate = event.params.endDate;
  entity.tokenURI = event.params.tokenURI;

  entity.save();
}
