import embalage from "../assets/images/embalage.jpeg"

const PackagingListItem = ({name, image, sku}) => {
    return <li className="pb-3 sm:pb-4">
        <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
                <img className="w-12 h-14"
                     src={image ? image : embalage}
                     alt={name}/>
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate ">
                    {name}
                </p>
                {sku && <p className="text-sm truncate ">
                    REF: {sku}
                </p>
                }
            </div>
        </div>
    </li>;
}
export default PackagingListItem;