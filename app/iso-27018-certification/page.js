import IsoStandardPage from "../../components/IsoStandardPage";
import { isoStandardsByCode } from "../../data/isoStandards";

export default function Iso27018Page() {
  return <IsoStandardPage standard={isoStandardsByCode["ISO 27018"]} />;
}
