import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { itemList } from "../../component/interface/itemList";
import { getItem } from "../../services/itemsData";
import NavBar from "../../component/NavBar/NavBar";
import Footer from "../../component/Footer/Footer";

function ItemDetailPage() {
    const { itemName } = useParams<{ itemName: string }>();
    const [item, setItem] = useState<itemList | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getItem();
                const itemArray = Object.values(data);
                const itemData = itemArray.find((i: itemList) => i.dname === itemName);
                setItem(itemData || null);
            } catch (error) {
                console.error("Failed to fetch item stats:", error);
            }
        }
        fetchData();
    }, [itemName]);

    if (!item) return <div className="text-center text-white">Loading...</div>;

    const imgUrl = `https://cdn.cloudflare.steamstatic.com/${item.img}`;

    return (
        <div>
            <NavBar />
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white px-8 py-10 flex flex-col items-center">

                <div className="self-start my-4">
                    <Link
                        to="/item"
                        className="text-white bg-blue-600 px-4 py-2 rounded-full font-semibold shadow-md hover:bg-blue-700 transition duration-200"
                    >
                        Back
                    </Link>
                </div>


                <div className="w-full max-w-md mb-6">
                    <img
                        className="rounded-lg shadow-lg border border-gray-700 w-full object-cover"
                        src={imgUrl}
                        alt={item.dname}
                    />
                </div>


                <div className="mt-5 max-w-md bg-gray-800 rounded-lg shadow-md p-6 space-y-4">
                    <h5 className="text-3xl font-semibold tracking-tight text-blue-400 mb-3">{item.dname}</h5>
                    <div className="text-sm text-gray-300 space-y-4">


                        {item.abilities?.length > 0 && (
                            <div>
                                <span className="font-bold text-gray-400">Abilities:</span>
                                <ul className="ml-4 list-disc list-inside space-y-1">
                                    {item.abilities.map((ability, index) => (
                                        <li key={index} className="text-gray-300">{ability.description}</li>
                                    ))}
                                </ul>
                            </div>
                        )}


                        {item.notes && (
                            <p>
                                <span className="font-bold text-gray-400">Notes:</span> {item.notes}
                            </p>
                        )}


                        <p>
                            <span className="font-bold text-gray-400">Damage Type:</span> {item.dmg_type}
                        </p>


                        <p>
                            <span className="font-bold text-gray-400">Cost:</span> {item.cost} Gold
                        </p>


                        {item.lore && (
                            <div>
                                <h3 className="text-gray-400 font-semibold">Lore:</h3>
                                <p className="text-gray-400">{item.lore}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ItemDetailPage;
