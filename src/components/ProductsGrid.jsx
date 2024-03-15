import {Link, useLoaderData} from "react-router-dom";
import Reveal from "../utils/Reveal.jsx";

function ProductsGrid() {
    const {products, meta} = useLoaderData();
    const {categories} = meta
    return (
        <>
            {
                categories.map((categorie) => {
                    const prod = products.filter((p) => p.category.name === categorie);
                    {
                        if (prod.length > 0) {
                            return (<div key={categorie.trim().toLowerCase()}>
                                    <div className="divider mt-10  uppercase tracking-wider font-bold">{categorie}</div>
                                    <div key={categorie} className=" grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                        {prod.map(({id, name, image, brand}) => {
                                            return (
                                                <Reveal key={id}>
                                                    <Link
                                                        to={`/products/${id}`}
                                                        className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
                                                    >
                                                        <figure className="px-4 pt-4">
                                                            <img
                                                                src={image ? image : "https://picsum.photos/200/300"}
                                                                alt={name}
                                                                className="rounded-xl h-64 md:h-48 w-full object-cover"
                                                            />
                                                        </figure>
                                                        <div className="card-body items-center text-center">
                                                            <h2 className="card-title capitalize tracking-wider">
                                                                {name}
                                                            </h2>
                                                            <span className="text-secondary">{brand.name}</span>
                                                        </div>
                                                    </Link>
                                                </Reveal>
                                            );
                                        })}
                                    </div>

                                </div>
                            )
                        }
                    }
                })
            }
        </>


    );


}

export default ProductsGrid;
