import IsoStandardPage from "../../components/IsoStandardPage";
import { isoStandardsByCode } from "../../data/isoStandards";

export default function Iso27017Page() {
  return <IsoStandardPage standard={isoStandardsByCode["ISO 27017"]} />;
}
