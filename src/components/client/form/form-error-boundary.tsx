import React from "react";

const FormErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <React.Suspense fallback={<div className="text-white text-center">Loading...</div>}>{children}</React.Suspense>;
};
export default FormErrorBoundary;