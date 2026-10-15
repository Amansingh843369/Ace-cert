import IsoStandardPage from "../../components/IsoStandardPage";
import { isoStandardsByCode } from "../../data/isoStandards";

export default function Iso41001Page() {
  return <IsoStandardPage standard={isoStandardsByCode["ISO 41001"]} />;
}
