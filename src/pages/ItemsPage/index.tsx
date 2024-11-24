import { useEffect, useState } from "react";
import { getItem } from "../../services/itemsData";
import { itemList } from "../../component/interface/itemList";
import NavBar from "../../component/NavBar/NavBar";
import ItemCard from "../../component/ItemCard/ItemCard";
import Footer from "../../component/Footer/Footer";
import SearchItemBar from "../../component/SearchItemBar/SearchItemBar";

function ItemsPage() {
    const [items, setItemData] = useState<itemList[]>([]);
    const [showItemName, setShowItemName] = useState(false)
    const [keyword, setKeyword] = useState<string>('')
    const [activeSearch, setActiveSearch] = useState(false)
    const [searchResult, setSearchResult] = useState<itemList[]>([])

    const onClickhandle = () => {
        setShowItemName(!showItemName)
    }
    const onSearchHandle = (result: string) => {
        setKeyword(result)
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getItem();
                setItemData(data);
            } catch (error) {
                console.error("Failed to fetch item list:", error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (keyword) {

            const result = filteredItem.filter((item) =>
                item.dname.toLowerCase().split(' ').join('').includes(keyword?.toLowerCase())
            )

            setActiveSearch(true)
            setSearchResult(result)
        }
        else {
            setActiveSearch(false)
            setSearchResult([])
        }
    }, [keyword])

    if (items.length === 0) {
        return <div>Loading item...</div>;
    }

    const itemArray = Object.values(items);

    const filteredItem = itemArray.filter((item) => item.dname && !(item.dname.includes("Recipe")))
    const consumItem = filteredItem.filter((item) => item.qual === "consumable" && (!item.tier))
    const craftItem = filteredItem.filter((item) => item.created)
    const normalItem = filteredItem.filter((item) => (item.created === false) && (!item.tier) && item.qual !== "consumable" && item.cost !== 0)
    const neutralItem = itemArray.filter((item) => item.tier || item.cost === null)

    const renderItemCard = (itemList: itemList[]) => {
        return itemList.map((item) => {

            const isMatch = searchResult.some(result => result.id === item.id);

            const opacityValue = activeSearch && !isMatch ? 0.3 : 1;

            return (
                <ItemCard
                    key={item.id}
                    item={item}
                    toggle={showItemName}
                    opacity={opacityValue}
                />
            );
        });
    };


    return (
        <div >
            <NavBar />
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white ">
                <div className="flex justify-center mt-4 py-4">
                    <button
                        className="py-2 px-6 rounded-full font-semibold bg-violet-600 hover:bg-violet-700 text-white shadow-md transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2"
                        onClick={onClickhandle}
                    >
                        Toggle Item Name
                    </button>
                </div>
                <div className="max-w-5xl mx-auto mb-6 w-[400px]">
                    <SearchItemBar onChange={onSearchHandle} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                    <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <h2 className="text-center text-lg font-semibold text-violet-500 mb-4">Consumable Items</h2>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {renderItemCard(consumItem)}
                        </div>
                    </div>
                    <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <h2 className="text-center text-lg font-semibold text-green-400 mb-4">Normal Items</h2>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {renderItemCard(normalItem)}
                        </div>
                    </div>
                    <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <h2 className="text-center text-lg font-semibold text-blue-400 mb-4">Advanced Items</h2>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {renderItemCard(craftItem)}
                        </div>
                    </div>
                    <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                        <h2 className="text-center text-lg font-semibold text-yellow-400 mb-4">Neutral Items</h2>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {renderItemCard(neutralItem)}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );

}

export default ItemsPage;
