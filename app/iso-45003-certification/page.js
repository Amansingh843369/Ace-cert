import IsoStandardPage from "../../components/IsoStandardPage";
import { isoStandardsByCode } from "../../data/isoStandards";

export default function Iso45003Page() {
  return <IsoStandardPage standard={isoStandardsByCode["ISO 45003"]} />;
}
