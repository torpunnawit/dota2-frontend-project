import axios from "axios";
import { itemList } from "../component/interface/itemList"


export async function getItem(): Promise<itemList[]> {
    try {
        const res = await axios.get("https://api.opendota.com/api/constants/items");
        return res.data;
    } catch (error) {
        console.error("Error fetching item list:", error);
        throw error
    }
}
