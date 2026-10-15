import IsoStandardPage from "../../components/IsoStandardPage";
import { isoStandardsByCode } from "../../data/isoStandards";

export default function Iso28000Page() {
  return <IsoStandardPage standard={isoStandardsByCode["ISO 28000"]} />;
}
