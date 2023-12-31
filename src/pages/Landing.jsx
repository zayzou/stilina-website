import { FeaturedProducts, Hero, Media, OurBrands } from "../components";
import { customAxiosInstance } from "../utils/index";
import { products } from "../data/links";
const url = "products?featured=true";

export const loader = async () => {
  const response = await customAxiosInstance(url);
  const products = response.data.data;
  return { products };
};
function Landing() {
  return (
    <>
      <Hero />
      <FeaturedProducts products={products} />
      <OurBrands />
      <Media />
    </>
  );
}

export default Landing;
