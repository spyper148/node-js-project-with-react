'use client'

import {getMessage} from "@/lib/api/message";
import {useEffect, useState} from "react";
export default function Message () {
    const [message, setMessage] = useState();

    const load = async () => {
        const fetchedMessage= await getMessage();
        setMessage(fetchedMessage.message);
    };

    useEffect(() => {
        load();
    })
    return (
        <div>
            {message}
        </div>
    )
}

