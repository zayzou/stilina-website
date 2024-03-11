import ProductsGrid from "../ProductsGrid.jsx";
import {ProductsList} from "../index.js";

const ProductContainer = ({products}) => {
    return <ProductsList products={products}/>;
    // return <ProductsGrid products={products}/>;
};

export default ProductContainer;
