import {Link, useLoaderData} from "react-router-dom";
import Reveal from "../utils/Reveal.jsx";
import placeholder from "../assets/images/placeholder.png"

function ProductsGrid() {
    const {products} = useLoaderData();
    return (
        <div className=" grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {
                products.map(({id, name, image, brand}) => {
                    return (
                        <Reveal key={id}>
                            <Link to={`/products/${id}`}
                                  className="card rounded-none w-full shadow-xl hover:shadow-2xl transition duration-300">
                                <figure className="px-4 pt-4">
                                    <img
                                        src={image ? image : placeholder}
                                        alt={name}
                                        className="h-64 md:h-48 w-full object-cover"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title capitalize tracking-wider text-sm">
                                        {name}
                                    </h2>
                                    <span className="text-secondary">{brand.name}</span>
                                </div>
                            </Link>
                        </Reveal>
                    );
                })
            }
        </div>
    );
}

export default ProductsGrid;
