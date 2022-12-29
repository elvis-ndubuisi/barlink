import React from "react";
import styled from "styled-components";
import Button from "../Buttons";
import Input from "../QR/Input";

const Styled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1em;

  h3 {
    text-align: center;
    width: 100%;
  }

  button {
    align-self: flex-end;
  }
`;

// useState: custom & setCustom are passed down as props from parent page.
const CustomQuery = ({
  custom,
  setter,
  hideModal,
}: {
  custom: string;
  setter: Function;
  hideModal: Function;
}) => {
  /*    hideModal function accepts the customModal state setter.
    when save button is clicked, modal closes but custom input values are preserved.
   */
  let input = React.useRef<HTMLInputElement>(null);

  function processValue(event: React.ChangeEvent<HTMLInputElement>): void {
    let value: string = "";
    // Replace spaces with hyphens
    value = event.target?.value.replace(/\s+/g, "-");
    // Remove non-alphanumeric characters
    value = value.replace(/[^\w-]+/g, "");
    // Convert to lower case
    value = value.toLowerCase();
    // set/send value to parent state
    setter(value);
  }

  React.useEffect(() => {
    input.current?.focus();
  }, []);

  return (
    <Styled>
      <h3>Custom URL</h3>
      <Input
        ref={input}
        type="text"
        placeholder="Type here..."
        value={custom}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          processValue(event)
        }
      />
      <small>{`Custom URL: ${custom}`}</small>
      <Button primary={true} onClick={() => hideModal(!true)}>
        Save
      </Button>
    </Styled>
  );
};

export default CustomQuery;
