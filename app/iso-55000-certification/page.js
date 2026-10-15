import IsoStandardPage from "../../components/IsoStandardPage";
import { isoStandardsByCode } from "../../data/isoStandards";

export default function Iso55000Page() {
  return <IsoStandardPage standard={isoStandardsByCode["ISO 55000"]} />;
}
