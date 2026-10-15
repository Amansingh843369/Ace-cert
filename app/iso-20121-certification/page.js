import IsoStandardPage from "../../components/IsoStandardPage";
import { isoStandardsByCode } from "../../data/isoStandards";

export default function Iso20121Page() {
  return <IsoStandardPage standard={isoStandardsByCode["ISO 20121"]} />;
}
