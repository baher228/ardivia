import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const HomeRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
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
      Redirecting to the Home page...
    </div>
  );
};

export default HomeRedirect;
