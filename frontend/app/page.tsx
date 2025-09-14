"use client"

import {getMessage} from "@/lib/api/message";
import {useEffect, useState} from "react";

export default function Home() {
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
    <h2>{message}</h2>
  </div>
  );
}
