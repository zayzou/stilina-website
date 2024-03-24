import {FaMinus, FaPlus} from "react-icons/fa";
import {useState} from "react";
import {useLoaderData} from "react-router-dom";
import {FaPlus, FaMinus} from "react-icons/fa";
import {useEffect, useState} from "react";
export const Cart = () => {

    const {product} = useLoaderData();
    console.log(product)
    const {
        name,
        description,
        brand,
        category,
        packagings,
        images,
        productVariants
    } = product
    const handlePvSelect = (sku) => {
        setProductRef(sku)
    }
    const [amount, setAmount] = useState(0);

    const [productRef, setProductRef] = useState(productVariants[0]?.sku);
    return (
        <div className="mt-6" id="cart">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div>
                    <h3 className="text-md font-medium tracking-wider capitalize col-span-1">
                        Produit :
                    </h3>
                    <div className="mt-2 col-span-2">
                        <select className="select select-bordered w-full max-w-xs"
                                onChange={(e) => handlePvSelect(e.target.value)}>
                            {productVariants.map((pv) => {
                                return (
                                    <option key={pv.sku} value={pv.sku}>{pv.packaging.name}</option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                <div>
                    <h3 className="text-md font-medium tracking-wider capitalize col-span-1">
                        Emballage :
                    </h3>

                    {packagings.map((p) => {
                        return <div key={p.id} className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">{p.name}</span>
                                <input readOnly type="radio" name="radio-10"
                                       className="radio checked:bg-blue-500"
                                       checked/>
                            </label>
                        </div>
                    })}

                </div>
            </div>

            <div className="flex items-center mt-10 gap-4">
                <div className="join rounded-box border-2 ">
                    <button
                        className="btn btn-ghost join-item hover:bg-transparent"
                        onClick={() => amount > 0 && setAmount(amount - 1)}
                    >
                        <FaMinus/>
                    </button>
                    <input
                        type="text"
                        className="join-item text-3xl w-16 text-center bg-transparent"
                        value={amount}
                        readOnly
                    />

                    <button
                        className="btn btn-ghost join-item hover:bg-transparent"
                        onClick={() => setAmount(amount + 1)}
                    >
                        <FaPlus/>
                    </button>
                </div>
                <button
                    className="btn btn-primary btn-md"
                    onClick={() => console.log(amount)}
                >
                    Ajouter au panier
                </button>
            </div>
        </div>
    )
}
