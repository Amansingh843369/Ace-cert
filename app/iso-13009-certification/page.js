import IsoStandardPage from "../../components/IsoStandardPage";
import { isoStandardsByCode } from "../../data/isoStandards";

export default function Iso13009Page() {
  return <IsoStandardPage standard={isoStandardsByCode["ISO 13009"]} />;
}
