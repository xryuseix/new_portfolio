"use client";

import { useEffect, useRef } from "react";
import type { Message } from "@api/api/chat";

export type MessageWithId = Message & { id: number };

export default function ChatLog({
  lastMsg,
}: {
  lastMsg: string | null;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current && lastMsg) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lastMsg]);

  return (
    <div className="m-2 relative px-4 py-2 bg-gray-800 rounded-lg">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full border-8 border-transparent border-b-gray-800" />
      <div
        className="h-32 text-lg overflow-y-scroll hidden-scrollbar text-gray-200"
        ref={scrollRef}
      >
        {lastMsg && <span>{lastMsg}</span>}
      </div>
    </div>
  );
}
