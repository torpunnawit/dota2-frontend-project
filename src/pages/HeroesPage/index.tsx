
import NavBar from "../../component/NavBar/NavBar"
import { useEffect, useState } from "react";
import { getHeroStat } from "../../services/heroesData";
import { heroStat } from "../../component/interface/heroStat";
import HeroCard from "../../component/HeroCard/HeroCard";
import Footer from "../../component/Footer/Footer";
import SearchHeroBar from "../../component/SearchHeroBar/SearchHeroBar";

function HeroesPage() {
    const [heroes, setHeroData] = useState<heroStat[]>([]);
    const [isActive, setIsActive] = useState(false)
    const [activeSearch, setActiveSearch] = useState(false)
    const [keyword, setKeyword] = useState<string>("")
    const [searchResult, setSearchResult] = useState<heroStat[]>([])
    const [role, setRole] = useState<string>("Any")
    const [atkType, setAtkType] = useState<string>("Any")

    const onClickhandle = () => setIsActive(!isActive);
    const handleSearchInput = (result: string) => setKeyword(result);
    const handleRoleChange = (result: string) => setRole(result);
    const handleAytkTypeChange = (result: string) => setAtkType(result);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getHeroStat();
                setHeroData(data);
            } catch (error) {
                console.error("Failed to fetch hero stats:", error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        let result = heroes;
        if (keyword) {
            result = result.filter((hero) => hero.localized_name.toLowerCase().split(' ').join('').includes(keyword?.toLowerCase()));
        }

        if (role !== 'Any') {
            result = result.filter((hero) => hero.roles.includes(role));
        }

        if (atkType !== 'Any') {
            result = result.filter((hero) => hero.attack_type === atkType);
        }

        setSearchResult(result);
        setActiveSearch(!!(keyword || role !== 'Any' || atkType !== 'Any'));
    }, [heroes, keyword, role, atkType])

    if (heroes.length === 0) {
        return <div>Loading Heroes...</div>;
    }

    const strHeroes = heroes.filter(hero => hero.primary_attr === 'str')
    const agiHeroes = heroes.filter(hero => hero.primary_attr === 'agi')
    const intHeroes = heroes.filter(hero => hero.primary_attr === 'int')
    const uniHeroes = heroes.filter(hero => hero.primary_attr === 'all')


    const renderHeroCards = (heroList: heroStat[]) => {
        return heroList.map((hero) => {

            const isMatch = searchResult.some(result => result.id === hero.id);
            const opacityValue = activeSearch && !isMatch ? 0.3 : 1;

            return (
                <HeroCard
                    key={hero.id}
                    hero={hero}
                    toggle={isActive}
                    opacity={opacityValue}
                />
            );
        });
    };

    return (
        <div>
            <NavBar />
            <div className="flex justify-center bg-gray-900 pt-3">
                <button onClick={onClickhandle}
                    className="py-2 px-6 rounded-full font-semibold bg-violet-600 hover:bg-violet-700 text-white shadow-md transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2">
                    Toggle Hero Name

                </button>
            </div>
            <div className="bg-gray-900  flex justify-center">
                <SearchHeroBar onChange={handleSearchInput} onSelectAtk={handleAytkTypeChange} onSelectRole={handleRoleChange} />
            </div>
            <div className="flex justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-5">
                <div className="flex justify-center text-center p-2 space-x-4">
                    <div className="flex-1 bg-[#1A1D21] border border-red-500 rounded-lg shadow-lg p-4 hover:shadow-red-600/50 transition-all duration-200">
                        <h1 className="text-red-400 font-semibold text-lg mb-3 flex items-center justify-center">
                            Strength Type
                            <img className="w-[28px] ml-2" src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-str-active.png" />
                        </h1>
                        <div className="flex flex-row flex-wrap justify-center gap-2">
                            {renderHeroCards(strHeroes)}
                        </div>
                    </div>
                    <div className="flex-1 bg-[#1A1D21] border border-green-500 rounded-lg shadow-lg p-4 hover:shadow-green-600/50 transition-all duration-200">
                        <h1 className="text-green-400 font-semibold text-lg mb-3 flex items-center justify-center">
                            Agility Type
                            <img className="w-[28px] ml-2" src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-agi-active.png" />
                        </h1>
                        <div className="flex flex-row flex-wrap justify-center gap-2">
                            {renderHeroCards(agiHeroes)}
                        </div>
                    </div>
                    <div className="flex-1 bg-[#1A1D21] border border-indigo-500 rounded-lg shadow-lg p-4 hover:shadow-indigo-600/50 transition-all duration-200">
                        <h1 className="text-indigo-400 font-semibold text-lg mb-3 flex items-center justify-center">
                            Intelligence Type
                            <img className="w-[28px] ml-2" src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-int-active.png" />
                        </h1>
                        <div className="flex flex-row flex-wrap justify-center gap-2">
                            {renderHeroCards(intHeroes)}
                        </div>
                    </div>
                    <div className="flex-1 bg-[#1A1D21] border border-violet-500 rounded-lg shadow-lg p-4 hover:shadow-violet-600/50 transition-all duration-200">
                        <h1 className="text-violet-400 font-semibold text-lg mb-3 flex items-center justify-center">
                            Universal Type
                            <img className="w-[28px] ml-2" src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-uni-active.png" />
                        </h1>
                        <div className="flex flex-row flex-wrap justify-center gap-2">
                            {renderHeroCards(uniHeroes)}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HeroesPage;
