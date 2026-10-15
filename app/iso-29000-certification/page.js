import IsoStandardPage from "../../components/IsoStandardPage";
import { isoStandardsByCode } from "../../data/isoStandards";

export default function Iso29000Page() {
  return <IsoStandardPage standard={isoStandardsByCode["ISO 29000"]} />;
}
