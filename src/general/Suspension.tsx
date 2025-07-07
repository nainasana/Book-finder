import React, { Suspense } from "react";
import Loading from "./Loading";

const SuspensionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col lg:flex-row dark:text-black">
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
};

export default SuspensionWrapper;
