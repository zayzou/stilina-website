import { ProductsGrid, SectionTitle } from ".";

function FeaturedProducts() {
  return (
    <div className="pt-24">
      <SectionTitle text="Nouveautées" align="text-start" />
      <ProductsGrid />
    </div>
  );
}

export default FeaturedProducts;
