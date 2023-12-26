import { FeaturedProducts, Hero, Media, OurBrands2 } from "../components";
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
      <OurBrands2 />
      <Media />
    </>
  );
}

export default Landing;
