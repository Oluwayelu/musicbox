import React from "react";

export default function Loader() {
  return (
    <div className="inset-0 bg-gray-800 fixed flex w-full h-full items-center justify-center duration-300 transition-opacity">
      <div className="flex-col">
        
        <div className="mt-3 text-gray-200 font-mono text-sm sm:text-xs">
          Loading...
        </div>
      </div>
    </div>
  );
}
