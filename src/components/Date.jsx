import { formatDate } from "../utils/helpers";
function Date({ date }) {
  return <span className="text-sm">Le {formatDate(date)}</span>;
}

export default Date;
