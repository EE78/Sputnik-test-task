import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import {
  help_modal_styles,
  HelpText,
  CloseButton,
  HelpModalHeader,
} from "../ui/styled_modal";

export const HelpModal = ({ isHelpOpen, handleHelpOpen, TextContent }) => {
  return (
    <>
      <Modal open={isHelpOpen} onClose={handleHelpOpen} closeAfterTransition>
        <Fade in={isHelpOpen}>
          <Box sx={help_modal_styles}>
            <HelpModalHeader>
              <HelpText>{TextContent}</HelpText>
              <CloseButton onClick={handleHelpOpen}>x</CloseButton>
            </HelpModalHeader>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
