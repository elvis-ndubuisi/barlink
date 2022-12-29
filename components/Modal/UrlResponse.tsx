import React from "react";
import styled from "styled-components";
import { HiOutlineClipboard, HiCheck } from "react-icons/hi2";
import clipboard from "../../libraries/clipboard";

// Accepts response data as props. NB: altLink with capital L must match with server response object
function UrlResponse({
  data,
}: {
  data: {
    type: string;
    result: {
      link: string;
      shortlink: string;
      altLink: string;
    };
  };
}) {
  const [copied, setCopied] = React.useState(false);
  const [copiedAlt, setCopiedAlt] = React.useState(false);

  return (
    <Styled>
      <h3>Short Link Generated</h3>
      <Span>{data?.result.link}</Span>
      <Field>
        <Label>short link:</Label>
        <Span>{data?.result.shortlink}</Span>
        <Copy
          role="button"
          onClick={() => {
            let result = clipboard(data?.result.shortlink);
            setCopied(result);
            setTimeout(() => {
              setCopied(false);
            }, 3000);
          }}
        >
          {copied ? <HiCheck size={24} /> : <HiOutlineClipboard size={24} />}
        </Copy>
      </Field>
      <Field>
        <Label>Alternative link</Label>
        <Span>{data?.result.altLink}</Span>
        <Copy
          role="button"
          onClick={() => {
            let result = clipboard(data?.result.altLink);
            setCopiedAlt(result);
            setTimeout(() => {
              setCopiedAlt(false);
            }, 3000);
          }}
        >
          {copiedAlt ? <HiCheck size={24} /> : <HiOutlineClipboard size={24} />}
        </Copy>
      </Field>
      <span>Thank you for using barlink services.</span>
    </Styled>
  );
}

// Styled Component
const Styled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1em;

  h3 {
    width: 100%;
    text-align: center;
  }
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  background-color: var(--clr-dark);
  padding: 0.5em 0.3em;
  border-radius: 5px;
  color: var(--clr-white);
`;

const Span = styled.span`
  flex: 1;
`;

const Label = styled.span`
  font-weight: var(--fw-bold);
  color: var(--clr-main);
  text-transform: capitalize;
`;

const Copy = styled.span`
  cursor: pointer;

  &:hover {
    color: var(--clr-main);
  }
`;

export default UrlResponse;
