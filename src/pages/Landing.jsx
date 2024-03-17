import {FeaturedProducts, Hero, Media, OurBrands} from "../components";
import {customAxiosInstance} from "../utils/constants";

const url = "/products?page=1&size=3&brand=STILINA";

export const loader = async () => {
    const response = await customAxiosInstance(url);
    const products = response.data.productDto;
    return {products};
};

function Landing() {
    return (
        <>
            <Hero/>
            <FeaturedProducts/>
            <OurBrands/>
            <Media/>
        </>
    );
}

export default Landing;
