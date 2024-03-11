import {Link} from "react-router-dom";
import Reveal from "../utils/Reveal.jsx";

function ProductsList({products}) {
    console.log(products)
    return (
        <div className="mt-12 grid gap-y-8">
            {products.map(({id, name, image, category, brand}) => {
                console.log(brand,category)
                return (
                    <Reveal key={id}>
                        <Link
                            to={`/products/${id}`}
                            className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group"

                        >
                            <img
                                src={image ? image : "https://picsum.photos/200/300"}
                                alt={name}
                                className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300"
                            />
                            <div className="ml-0 sm:ml-16">
                                <h3 className="capitalize font-medium text-lg">{name}</h3>
                                <h4 className="capitalize text-md text-neutral-content">
                                    {brand.name}
                                </h4>

                                {/* COLOR */}
                            </div>

                            <p className="font-medium ml-0 sm:ml-auto text-lg">
                                {category.name}
                            </p>
                        </Link>
                    </Reveal>
                );
            })}
        </div>
    );
}

export default ProductsList;
