import {FeaturedProducts, Hero, Media, OurBrands} from "../components";
import {customAxiosInstance} from "../utils/constants";
import {useLoaderData} from "react-router-dom";

const url = "/products?page=1&size=3";

export const loader = async () => {
    const response = await customAxiosInstance(url);
    const products = response.data.productDto;
    return {products};
};

function Landing() {

    const {products} = useLoaderData();
    return (
        <>
            <Hero/>
            <FeaturedProducts products={products}/>
            <OurBrands/>
            <Media/>
        </>
    );
}

export default Landing;
