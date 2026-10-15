import IsoStandardPage from "../../components/IsoStandardPage";
import { isoStandardsByCode } from "../../data/isoStandards";

export default function Iso31000Page() {
  return <IsoStandardPage standard={isoStandardsByCode["ISO 31000"]} />;
}
