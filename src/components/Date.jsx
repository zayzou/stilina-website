import { formatDate } from "../utils";
function Date({ date }) {
  return <span className="text-sm">Le {formatDate(date)}</span>;
}

export default Date;
