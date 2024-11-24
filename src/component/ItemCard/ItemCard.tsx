import { itemList } from "../interface/itemList";
import { Link } from "react-router-dom";

interface RenderedItemProps {
    item: itemList;
    toggle: boolean;
    opacity: number;
}


function ItemCard({ item, toggle, opacity }: RenderedItemProps) {

    const imgUrl = `https://cdn.cloudflare.steamstatic.com/${item.img}`;

    return (
        <div
            className="flex  m-2 border border-gray-300 p-2 rounded-lg"
            key={item.id} >
            <Link
                to={`/item/detail/${item.dname}`}
            >
                <div className="relative">
                    <img
                        className="w-full"
                        src={imgUrl}
                        alt={item.dname}
                        style={{ opacity }}
                    />
                    {toggle && (<span className="absolute bottom-0 left-0 w-20 truncate bg-opacity-30 bg-black text-white text-center">{item.dname}</span>)}
                    <img />
                </div>
            </Link>
        </div>
    )

}

export default ItemCard