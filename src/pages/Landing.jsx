import { Hero } from "../components";
import { customAxiosInstance } from "../utils/index";

const url = "products?featured=true";

export const loader = async () => {
  const response = await customAxiosInstance(url);
  const products = response.data.data;
  console.log(response);
  return { products };
};
function Landing() {
  return <Hero />;
}

export default Landing;
