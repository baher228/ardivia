import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const PlacesRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/projects");
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
      Redirecting to the Projects page...
    </div>
  );
};

export default PlacesRedirect;
