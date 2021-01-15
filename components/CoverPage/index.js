import { Div } from "./styles";

export const CoverPage = ({ children, customHeight, addStyles, ...props }) => {
  return (
    <Div
      customHeight={customHeight ? customHeight : null}
      addStyles={addStyles ? addStyles : null}
    >
      {children}
    </Div>
  );
};
