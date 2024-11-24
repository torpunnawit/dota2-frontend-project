import axios from "axios";
import { playerData } from "../component/interface/playerData";

export async function getPlayerData(): Promise<playerData[]> {
    try {
        const res = await axios.get("https://api.opendota.com/api/proPlayers");
        return res.data;
    } catch (error) {
        console.error("Error fetching hero stats:", error);
        throw error
    }
}


