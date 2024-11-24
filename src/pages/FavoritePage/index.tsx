import { useState } from "react"
import NavBar from "../../component/NavBar/NavBar"
import { heroStat } from "../../component/interface/heroStat"
import HeroCard from "../../component/HeroCard/HeroCard"
import Footer from "../../component/Footer/Footer"

function FavoritePage() {
    const [favHero] = useState<heroStat[]>(() => {
        const savedHero: (string | null) = localStorage.getItem("FavHero")

        if (savedHero) {
            return JSON.parse(savedHero) as heroStat[]
        }
        else {
            return [];
        }
    })
    const strHeroes = favHero.filter(hero => hero.primary_attr === 'str')
    const agiHeroes = favHero.filter(hero => hero.primary_attr === 'agi')
    const intHeroes = favHero.filter(hero => hero.primary_attr === 'int')
    const uniHeroes = favHero.filter(hero => hero.primary_attr === 'all')
    const renderHeroCards = (heroList: heroStat[]) => {
        return heroList.map((hero) => {
            return (
                <HeroCard
                    key={hero.id}
                    hero={hero}
                    toggle={false}
                    opacity={1}
                />
            );
        });
    };

    return (<div>
        <NavBar />
        <div className="flex justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-5 ">
            <div className="flex flex-row justify-center text-center p-2 space-x-4 w-full ">
                {strHeroes.length > 0 && <div className="flex-1 bg-[#1A1D21] border border-red-500 rounded-lg shadow-lg p-4 hover:shadow-red-600/50 transition-all duration-200">
                    <h1 className="text-red-400 font-semibold text-lg mb-3 flex items-center justify-center">
                        Strength Type
                        <img className="w-[28px] ml-2" src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-str-active.png" />
                    </h1>
                    <div className="flex flex-row flex-wrap justify-center ">
                        {renderHeroCards(strHeroes)}
                    </div>
                </div>}
                {agiHeroes.length > 0 && <div className="flex-1 bg-[#1A1D21] border border-green-500 rounded-lg shadow-lg p-4 hover:shadow-green-600/50 transition-all duration-200">
                    <h1 className="text-green-400 font-semibold text-lg mb-3 flex items-center justify-center">
                        Agility Type
                        <img className="w-[28px] ml-2" src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-agi-active.png" />
                    </h1>
                    <div className="flex flex-row flex-wrap justify-center ">
                        {renderHeroCards(agiHeroes)}
                    </div>
                </div>}
                {intHeroes.length > 0 && <div className="flex-1 bg-[#1A1D21] border border-indigo-500 rounded-lg shadow-lg p-4 hover:shadow-indigo-600/50 transition-all duration-200">
                    <h1 className="text-indigo-400 font-semibold text-lg mb-3 flex items-center justify-center">
                        Intelligence Type
                        <img className="w-[28px] ml-2" src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-int-active.png" />
                    </h1>
                    <div className="flex flex-row flex-wrap justify-center ">
                        {renderHeroCards(intHeroes)}
                    </div>
                </div>}
                {uniHeroes.length > 0 && <div className="flex-1 bg-[#1A1D21] border border-violet-500 rounded-lg shadow-lg p-4 hover:shadow-violet-600/50 transition-all duration-200">
                    <h1 className="text-violet-400 font-semibold text-lg mb-3 flex items-center justify-center">
                        Universal Type
                        <img className="w-[28px] ml-2" src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-uni-active.png" />
                    </h1>
                    <div className="flex flex-row flex-wrap justify-center ">
                        {renderHeroCards(uniHeroes)}
                    </div>
                </div>}
            </div>
        </div>
        <Footer />
    </div>)
}
export default FavoritePage