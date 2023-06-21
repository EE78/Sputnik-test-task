import React from "react";
import { OpenButton } from "../ui/styled_button_opener.jsx";

export const OpenerButton = ({ handleOpen }) => {
  return (
    <>
      <OpenButton onClick={handleOpen}>Открыть</OpenButton>
    </>
  );
};
