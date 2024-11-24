import { useEffect, useState } from "react"
import { playerData, team } from "../../component/interface/playerData"
import { getPlayerData } from "../../services/playersData"
import NavBar from "../../component/NavBar/NavBar"
import TeamCard from "../../component/TeamCard/TeamCard"
import Footer from "../../component/Footer/Footer"

function TeamPage() {
    const [players, setPlayer] = useState<playerData[]>([])
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getPlayerData();
                setPlayer(data)
            } catch (error) {
                console.error("Failed to fetch item list:", error);
            }
        }
        fetchData()
    }, [])
    const teams: (team[]) = players.reduce((total: (team[]), player) => {
        const existingGroup = total.find((group) => group.team_name === player.team_name);

        if (existingGroup) {
            existingGroup.player.push(player.name);
        } else {
            total.push({
                team_name: player.team_name,
                player: [player.name],
            });
        }

        return total;
    }, []);


    return (
        <div>
            <NavBar />
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">

                <div className="grid gap-4 grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 py-4 px-6 rounded-lg shadow-lg w-200">
                    {teams.map((team, index) => (
                        <TeamCard key={index} team={team} />
                    ))}

                </div>
            </div>
            <Footer />
        </div>
    )


}

export default TeamPage