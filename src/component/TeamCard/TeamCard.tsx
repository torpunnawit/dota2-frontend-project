import { useState } from "react";

interface TeamCardProps {
    team: {
        team_name: string;
        player: string[];
    };
}

function TeamCard({ team }: TeamCardProps) {
    const [showPlayers, setShowPlayers] = useState(false);

    const togglePlayers = () => {
        setShowPlayers(!showPlayers);
    };

    return (
        <div
            className="bg-gray-800 text-white rounded-lg shadow-lg p-6 hover:bg-gray-700 transition duration-200 cursor-pointer border-2 border-gray-100"
            onClick={togglePlayers}
        >
            <h3 className="text-xl font-bold border-b border-gray-600 pb-2 mb-4">
                {team.team_name}
            </h3>
            {showPlayers && (
                <div className="space-y-2">
                    {team.player.map((player, index) => (
                        <p
                            key={index}
                            className="bg-gray-700 rounded-lg py-2 px-4 text-sm shadow-sm hover:bg-gray-600 transition duration-200"
                        >
                            {player}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
}

export default TeamCard;
