import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFoundRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/not-found");
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
      Redirecting to the Not Found page...
    </div>
  );
};

export default NotFoundRedirect;
