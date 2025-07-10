import { useEffect } from "react";
import { StyledInput, StyledErrorMessage, StyledTwoColumns } from "../SupportForm/style"
import type { InputFieldProps } from "./types";
import { buildTestToken, useGumnutDoc, GumnutText } from "@gumnutdev/react"

export const InputField = ({ label, type, name, onChange, data, error, setFormData }: InputFieldProps) => {
  const getToken = () => buildTestToken("some-fake-uid")
  const scope = useGumnutDoc({ getToken, docId: "1" })

  const handleRewriteAgent = () => {
    scope.doc.triggerAgent('Ja_TaDr8wxvPRJ52vJxMFQ');
  }

  const handleAutoClassifierAgent = () => {
    scope.doc.triggerAgent('bsdWj7kYxyWtCL42B9lSvQ');
  }

  useEffect(() => {
    const c = new AbortController();
  scope.doc.addListener(
    'agentAction',
    (m) => {
      console.info('Agent action', m);
      // maybe announce to a toast
    },
    c.signal,
  );
  },[scope]) 

  useEffect(() => {
    if (!setFormData) return;

    const interval = setInterval(() => {
      const subject = scope.doc.root().value('subject')?.contents?.();
      const description = scope.doc.root().value('description')?.contents?.();
      
      if (subject !== data.subject || description !== data.description) {
        setFormData({ ...data, subject, description });
      }
    }, 500);

    return () => clearInterval(interval); // cleanup on unmount
  }, [scope, setFormData]);
  
  return (
    <StyledInput>
      <label>{label}</label>
      {name === 'description' || name === 'subject'
      ? 
      (
        <GumnutText
          control={scope.control}
          name={name}
          rows={4}
          wrap
          resize="auto" 
          multiline
          placeholder="Some data goes here"
          style={{
            background: "white",
            border: "2px solid #eee",
            borderRadius: "4px",
            width: "100%"
          }}
        /> 
      ) : (
        <input type={type} name={name} onChange={onChange} value={data[name]}/>  
      )
      }
      {!data[name] && error && (<StyledErrorMessage>{label} is required</StyledErrorMessage>
      )}
      {name === "description" && (
        <StyledTwoColumns>
          <button onClick={handleRewriteAgent}>Rewrite</button>
          <button onClick={handleAutoClassifierAgent}>Auto Classifier</button>
        </StyledTwoColumns>
          )}
      
    </StyledInput>
  )
}