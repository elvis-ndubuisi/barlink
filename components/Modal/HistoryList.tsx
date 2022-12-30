import React from "react";
import styled from "styled-components";
import { HiCheck, HiOutlineClipboard } from "react-icons/hi2";
import clipboard from "../../libraries/clipboard";

const HistoryList = ({ history }: { history: any }) => {
  const [copied, setCopied] = React.useState(false);
  const [copiedAlt, setCopiedAlt] = React.useState(false);
  let initHistory: any;

  return (
    <History>
      <h3>History List</h3>
      {initHistory || !(history.length < 1) ? (
        <>
          {history.map((log: any, idx: any) => {
            return (
              <>
                <Log key={idx}>
                  <Field key={log?.link}>
                    <Label>link:</Label>
                    <Span>{log?.link}</Span>
                  </Field>
                  <Field key={log?.shortlink}>
                    <Label>short link:</Label>
                    <Span>{log?.shortlink}</Span>
                    <Copy
                      role="button"
                      onClick={() => {
                        let result = clipboard(log?.shortlink);
                        setCopied(result);
                        setTimeout(() => {
                          setCopied(false);
                        }, 3000);
                      }}
                    >
                      {copied ? (
                        <HiCheck size={24} />
                      ) : (
                        <HiOutlineClipboard size={24} />
                      )}
                    </Copy>
                  </Field>
                  <Field key={log?.altLink}>
                    <Label>Alt link:</Label>
                    <Span>{log?.altLink}</Span>
                    <Copy
                      role="button"
                      onClick={() => {
                        let result = clipboard(log?.altLink);
                        setCopied(result);
                        setTimeout(() => {
                          setCopiedAlt(false);
                        }, 3000);
                      }}
                    >
                      {copiedAlt ? (
                        <HiCheck size={24} />
                      ) : (
                        <HiOutlineClipboard size={24} />
                      )}
                    </Copy>
                  </Field>
                </Log>
              </>
            );
          })}
        </>
      ) : null}
    </History>
  );
};

// Styled Components

const History = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8em;
  width: 100%;
`;

const Log = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--clr-dark);
  color: var(--clr-white);
  padding: 0.5em;
`;

const Logs = styled.div`
  display: flex;
  flex-direction: column;
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

export default HistoryList;
