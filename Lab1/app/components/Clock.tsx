"use client";

export default function Clock() {
  const time = new Date().toLocaleTimeString();

  return (
    <div>
      <h2>Current Time</h2>
      <p>{time}</p> {/* JS expression */}
    </div>
  );
}
