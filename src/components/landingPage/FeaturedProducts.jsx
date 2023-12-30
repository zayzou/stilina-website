import { ProductsGrid, SectionTitle } from "..";

function FeaturedProducts({ products }) {
  return (
    <div className="pt-24">
      <SectionTitle text="Nouveautées" align="text-start" />
      <ProductsGrid products={products} />
    </div>
  );
}

export default FeaturedProducts;
