import { Link } from "react-router-dom";
import { heroStat } from "../interface/heroStat";

interface RenderedHeroProps {
    hero: heroStat;
    toggle: boolean;
    opacity: number;
}

function HeroCard({ hero, toggle, opacity }: RenderedHeroProps) {
    const heroName = hero.name.replace("npc_dota_hero_", "");
    const imgUrl = `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${heroName}.png`;

    return (
        <div
            className="flex m-2 border border-gray-300 p-2 rounded-lg"
            key={hero.id}
        >
            <Link to={`/hero/stat/${heroName}`} className="flex flex-col justify-center">
                <div className="relative">
                    <img
                        className="w-20"
                        src={imgUrl}
                        alt={hero.localized_name}
                        style={{ opacity }}
                    />
                    {toggle && (
                        <span className="absolute bottom-0 left-0 w-20 truncate bg-opacity-30 bg-black text-white text-center">
                            {hero.localized_name}
                        </span>
                    )}
                </div>
            </Link>
        </div>
    );
}

export default HeroCard;
