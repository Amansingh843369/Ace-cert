import IsoStandardPage from "../../components/IsoStandardPage";
import { isoStandardsByCode } from "../../data/isoStandards";

export default function Iso26000Page() {
  return <IsoStandardPage standard={isoStandardsByCode["ISO 26000"]} />;
}
