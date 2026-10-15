import IsoStandardPage from "../../components/IsoStandardPage";
import { isoStandardsByCode } from "../../data/isoStandards";

export default function Iso10002Page() {
  return <IsoStandardPage standard={isoStandardsByCode["ISO 10002"]} />;
}
