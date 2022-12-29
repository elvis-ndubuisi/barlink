import React from "react";

/* 
    To use this function, you would need to pass in the initial value for the input as an argument.
    The function returns a tuple with the formatted value and a formatting function that you 
    can use to update the formatted value.
*/
function useUrlFormatter(initialValue: string) {
  const [formattedValue, setFormattedValue] = React.useState(initialValue);

  function formatValue(value: string) {
    // Replace spaces with hyphens
    value = value.replace(/\s+/g, "-");

    // Remove non-alphanumeric characters
    value = value.replace(/[^\w-]+/g, "");

    // Convert to lowercase
    value = value.toLowerCase();

    setFormattedValue(value);
  }

  return [formattedValue, formatValue];
}

export default useUrlFormatter;
