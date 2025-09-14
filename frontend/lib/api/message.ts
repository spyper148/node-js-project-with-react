import { APi_URL } from "@/lib/consts";
import {json} from "node:stream/consumers";

export async function getMessage() {
    const res = await fetch(`${APi_URL}/hello`);
    if (!res.ok) {
        const err= await res.json();
        throw new Error(err.message || "Failed");
    }

    return await res.json();
}