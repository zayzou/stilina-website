import { FeaturedProducts, Hero, OurBrands } from "../components";
import { customAxiosInstance } from "../utils/index";

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
      <FeaturedProducts />
      <OurBrands />
    </>
  );
}

export default Landing;
