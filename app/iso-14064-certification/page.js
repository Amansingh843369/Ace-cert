import IsoStandardPage from "../../components/IsoStandardPage";
import { isoStandardsByCode } from "../../data/isoStandards";

export default function Iso14064Page() {
  return <IsoStandardPage standard={isoStandardsByCode["ISO 14064"]} />;
}
