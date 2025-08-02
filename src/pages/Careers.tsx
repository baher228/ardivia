import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const CareersRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/careers");
  }, [router]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "1.2rem",
      }}
    >
      Redirecting to the Careers page...
    </div>
  );
};

export default CareersRedirect;
