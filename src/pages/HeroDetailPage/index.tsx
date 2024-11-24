import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getHeroStat } from "../../services/heroesData";
import { heroStat } from "../../component/interface/heroStat";
import NavBar from "../../component/NavBar/NavBar";
import Footer from "../../component/Footer/Footer";

function HeroDetailPage() {
    const { heroName } = useParams<{ heroName: string }>();
    const [hero, setHero] = useState<heroStat | null>(null);
    const [isFavHero, setIsFavHero] = useState<boolean>(false);

    const updateFavoriteHeroes = (isAdding: boolean) => {
        if (!hero) return
        const savedHeroes = localStorage.getItem("FavHero");
        let favoriteHeroes: heroStat[] = savedHeroes ? JSON.parse(savedHeroes) : [];

        if (isAdding && !favoriteHeroes.some((favHero) => favHero.id === hero.id)) {
            favoriteHeroes.push(hero);
            setIsFavHero(true);
        } else if (!isAdding) {
            favoriteHeroes = favoriteHeroes.filter((favHero) => favHero.id !== hero.id);
            setIsFavHero(false);
        }
        localStorage.setItem("FavHero", JSON.stringify(favoriteHeroes));
    };

    const handleFavoriteToggle = () => updateFavoriteHeroes(!isFavHero);

    useEffect(() => {
        const checkFavHero = () => {
            const savedHeroes = localStorage.getItem("FavHero");
            const favoriteHeroes: heroStat[] = savedHeroes ? JSON.parse(savedHeroes) : [];
            setIsFavHero(favoriteHeroes.some((favHero) => favHero.id === hero?.id));
        };
        checkFavHero();
    }, [hero]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getHeroStat();
                const heroData = data.find((h: heroStat) => h.name === `npc_dota_hero_${heroName}`);
                setHero(heroData || null);
            } catch (error) {
                console.error("Failed to fetch hero stats:", error);
            }
        }
        fetchData();
    }, [heroName]);

    if (!hero) return <div>Loading...</div>;

    const name = hero.name.replace("npc_dota_hero_", "");
    const imgUrl = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${name}.png`;
    const iconUrl = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/icons/${name}.png`;

    return (
        <div className="min-h-screen text-white ">
            <NavBar />
            <div className="flex justify-center bg-zinc-800 ">
                <div className="max-w-[500px] w-full bg-[#1f2a35] rounded-[20px] shadow-lg border border-gray-700 p-4 my-3">
                    <Link to="/hero" className="inline-block mb-4 text-center bg-[#4CAFEB] px-4 py-2 rounded-full font-semibold text-white hover:bg-[#3b9fd3] transition duration-200">
                        Back
                    </Link>
                    <div className="mt-4">
                        <img className="rounded-lg w-full object-cover border border-gray-700 p-2" src={imgUrl} alt={hero.localized_name} />
                    </div>
                    <div className="pt-5">
                        <div className="flex justify-between items-center mb-4">
                            <h5 className="capitalize text-2xl font-bold">{hero.localized_name}</h5>
                            <img className="w-8 h-8" src={iconUrl} alt="Hero Icon" />
                        </div>
                        <div className="text-sm text-gray-400 space-y-2">
                            <p><span className="font-bold">Primary Attribute:</span> {hero.primary_attr.toUpperCase()}</p>
                            <p><span className="font-bold">Attack Type:  </span>
                                <img className="inline-block w-[20px]" src={`https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/icons/${hero.attack_type.toLowerCase()}.svg`} />
                                <span> {hero.attack_type}</span>
                            </p>
                            <p>
                                <span className="font-bold">Roles:</span> {hero.roles.join(", ")}</p>
                            <p>
                                <span className="font-bold">Base Health:</span> {hero.base_health}</p>
                            <p>
                                <span className="font-bold">Base Mana:</span> {hero.base_mana}</p>
                            <p>
                                <span className="font-bold">
                                    <img className="inline-block w-[20px]" src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png" /> Base Str:</span> {hero.base_str}</p>
                            <p>
                                <span className="font-bold">
                                    <img className="inline-block w-[20px]" src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" /> Base Agi:</span> {hero.base_agi}</p>
                            <p>
                                <span className="font-bold">
                                    <img className="inline-block w-[20px]" src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png" /> Base Int:</span> {hero.base_int}</p>
                            <p>
                                <span className="font-bold">
                                    <img className="inline-block w-[20px]" src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png" /> Movement Speed:</span> {hero.move_speed}</p>
                            <p>
                                <span className="font-bold">
                                    <img className="inline-block w-[20px]" src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_time.png" /> Attack Rate:</span> {hero.attack_rate}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center p-5  bg-zinc-800">
                <button
                    onClick={handleFavoriteToggle}
                    className={`rounded-lg border-[5px] border-gray-500 p-5 w-[400px] bg-stone-900 text-white transition duration-200 ${isFavHero ? "hover:bg-red-500" : "hover:bg-green-500"}`}
                >
                    {isFavHero ? "Remove from Favorite" : "Add to Favorite"}
                </button>
            </div>
            <Footer />
        </div>
    );
}

export default HeroDetailPage;
