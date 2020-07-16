import React from "react";
import { Autocomplete } from "basikit";
import componentIndex from "../index.json";
import { kebabCase } from "lodash-es";

const ComponentSearch: React.FC<any> = (props) => {
  const [autocompleteValue, setAutocompleteValue] = React.useState<string>();

  return (
    <Autocomplete
      blurOnSelect
      placeholder="Search for a component..."
      items={componentIndex}
      onChange={(e) => setAutocompleteValue(e.currentTarget.value)}
      searchFields={["name", "description"]}
      value={autocompleteValue}
      renderItem={(item) => (
        <>
          <h4>{item.name}</h4>
          <p style={{ fontSize: "0.875em", margin: "0.35rem 0" }}>
            {item.description.substr(0, 100)}...
          </p>
        </>
      )}
      onSelectItem={(item) => {
        setAutocompleteValue(item.name);
        window.location.href = `#${kebabCase(item.name)}`;
        window.location.reload();
      }}
      {...props}
    />
  );
};

export default ComponentSearch;
