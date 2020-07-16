import React from "react";
import { HashLink } from "react-router-hash-link";
import index from "../index.json";
import { kebabCase, groupBy } from "lodash-es";
import ComponentSearch from "./component-search";

const Sidebar = () => {
  const groupedComponents = groupBy(index, "category");

  return (
    <div className="documentation-sidebar">
      <ComponentSearch
        block
        style={{
          border: "none",
          padding: "0.875rem 1.5rem",
          borderBottom: "1px solid #eee",
        }}
      />
      <div className="list">
        {Object.keys(groupedComponents)
          .sort((category) => groupedComponents[category].length)
          .map((category) => (
            <div>
              <h4>{category}</h4>
              {groupedComponents[category].map((component) => (
                <HashLink to={`/documentation#${kebabCase(component.name)}`}>
                  <li>{component.name}</li>
                </HashLink>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
