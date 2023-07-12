"use client"
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [value, setValue] = useState("");

  const handleJoinRoom = useCallback(() => {
    router.push(`/room/${value}`);
  }, [router, value]);

  return (
    <>
      <div className="flex flex-col justify-center items-center align-middle">
        <h1>Enter Your Name</h1>
        <input
          value={value}
          
          onChange={(e) => setValue(e.target.value)}
          type="text"
          className="  rounded p-3"
          placeholder="Enter Your Name"
        />
        <button
          className="bg-blue-700 rounded-2xl p-4"
          onClick={handleJoinRoom}
          type="submit"
        >
          Join
        </button>
      </div>
    </>
  );
}
