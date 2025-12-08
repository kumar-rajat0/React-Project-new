import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./index.css";
export default function NotFound() {
  const loc = useLocation();
  return (
    <div className="notfound">
      <h1>404 — Page Not Found</h1>
      <p>The requested URL <code>{loc.pathname}</code> was not found on this server.</p>
      <p>If you think this is an error, return to the <Link to="/">home page</Link>.</p>
    </div>
  );
}
// when item not found