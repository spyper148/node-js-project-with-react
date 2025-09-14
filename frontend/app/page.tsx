"use client"

import Button from "@/components/Button";
import Message from "@/app/message/page";
import {useEffect, useState} from "react";
import {getMessage} from "@/lib/api/message";

export default function Home() {
  const [message, setMessage] = useState();

  const load = async () => {
    const fetchedMessage= await getMessage();
    setMessage(fetchedMessage.message);
  };

  useEffect(() => {
  })
  return (
  <div>
    <Button
    className="w-100 cursor-pointer"
    onClick={() => {
      load();
    }}
    >
      Getting message
    </Button>
    <div className="w-100 flex justify-center items-center">{message}</div>
  </div>

  );
}
