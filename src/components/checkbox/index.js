import React from "react";
import styled from "styled-components";

const Checkbox = (props) => {
  // Create a custom checkbox component
  return (
    <CheckboxCont>
      <div className="checkbox-container">
        <input type="checkbox" /> <p>{props.name}</p>
      </div>
    </CheckboxCont>
  );
};

const CheckboxCont = styled.div`
  position: relative;
`;
export default Checkbox;
