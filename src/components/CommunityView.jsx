import React from "react";
import CommunityGrid from "./CommunityGrid";

function CommunityView() {
  return (
    <div>
      <center className="mt-10">
        <div className="inline-flex rounded-md shadow-sm ">
          <a
            href="#"
            aria-current="page"
            class="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            Your Communities
          </a>
          <a
            href="#"
            class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            Explore Communities
          </a>
        </div>
      </center>

      <CommunityGrid />
    </div>
  );
}

export default CommunityView;
