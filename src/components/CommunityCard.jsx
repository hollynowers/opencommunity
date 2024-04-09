import React from "react";

function CommunityCard({
  communityName,
  communityDescription,
  handleJoin,
  handleView,
}) {
  return (
    <div>
      <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
        {/* Header with blue background */}
        <div className="bg-blue-500 px-6 py-2">
          <h2 className="text-white text-lg font-semibold">{communityName}</h2>
        </div>

        {/* Text below the header */}
        <div className="px-6 py-4">
          <p className="text-gray-700">{communityDescription}</p>
        </div>

        {/* Buttons (horizontal) */}
        <div className="flex justify-between px-6 py-4">
          <button
            onClick={handleView}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
          >
            View
          </button>
          <button
            onClick={handleJoin}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
          >
            Join
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommunityCard;
