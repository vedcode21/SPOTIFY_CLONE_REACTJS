import React from "react";
import "./SidebarOption.css";

function SidebarOption({ title, Icon, href }) {
  const OptionComponent = href ? "a" : "div";

  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      <OptionComponent
        href={href || "#"}
        className="sidebarOption__title"
        to={href}
        onClick={(e) => {
          if (!href) e.preventDefault();
        }}
        target={href ? "_blank" : ""}
      >
        {title}
      </OptionComponent>
    </div>
  );
}

export default SidebarOption;
