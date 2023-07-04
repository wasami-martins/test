import React from "react";

export default function loading() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-16 h-16 border-l-2 border-gray-900 rounded-full animate-spin"></div>
    </div>
  );
}
