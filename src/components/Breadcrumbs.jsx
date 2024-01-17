import { Link } from "react-router-dom";
const Breadcrumbs = () => {
  return (
    <div className="text-md breadcrumbs">
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/products">Produits</Link>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
