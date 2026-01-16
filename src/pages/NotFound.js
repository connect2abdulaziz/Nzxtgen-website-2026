import React from "react";
import SEO from "../components/SEO";

function NotFound() {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <SEO 
        title="404 - Page Not Found | NZXTGEN"
        description="Page not found"
        noindex={true}
      />
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFound;
