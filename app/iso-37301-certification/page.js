import IsoStandardPage from "../../components/IsoStandardPage";
import { isoStandardsByCode } from "../../data/isoStandards";

export default function Iso37301Page() {
  return <IsoStandardPage standard={isoStandardsByCode["ISO 37301"]} />;
}
