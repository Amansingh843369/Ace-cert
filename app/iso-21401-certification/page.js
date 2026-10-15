import IsoStandardPage from "../../components/IsoStandardPage";
import { isoStandardsByCode } from "../../data/isoStandards";

export default function Iso21401Page() {
  return <IsoStandardPage standard={isoStandardsByCode["ISO 21401"]} />;
}
