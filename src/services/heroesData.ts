import axios from "axios";
import { heroStat } from "../component/interface/heroStat";

export async function getHeroStat(): Promise<heroStat[]> {
    try {
        const res = await axios.get("https://api.opendota.com/api/heroStats");
        return res.data;
    } catch (error) {
        console.error("Error fetching hero stats:", error);
        throw error
    }
}


