import React from "react";
import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <div className="flex gap-2">
      {breadcrumbs.map(({ breadcrumb, match }, i) => (
        <div key={i}>
          <NavLink to={match.pathname}>{breadcrumb}</NavLink>
          {i !== breadcrumbs.length - 1 && <span> / </span>}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
