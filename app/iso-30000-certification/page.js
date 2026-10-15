import IsoStandardPage from "../../components/IsoStandardPage";
import { isoStandardsByCode } from "../../data/isoStandards";

export default function Iso30000Page() {
  return <IsoStandardPage standard={isoStandardsByCode["ISO 30000"]} />;
}
