import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { HelpModal } from "./help_modal";
import {
  MainModalHeader,
  CloseButton,
  ContentText,
  ContentInput,
  InputText,
  MainButton,
  main_modal_styles,
  HelpButton,
  HelpLink,
} from "../ui/styled_modal";

const regText =
  "Большое спасибо за то, что рассматриваете мой вариант решения тестового задания!";
const passText =
  "Надеюсь, что смогу учиться у Вас, а затем стать частью команды!";

export const MainModal = ({ isMainModalOpen, handleMainModalOpen }) => {
  const [isRegHelpOpen, setIsRegHelpOpen] = useState(false);
  const handleRegHelpOpen = () => {
    setIsRegHelpOpen((prevState) => !prevState);
  };
  const [isPassHelpOpen, setIsPassHelpOpen] = useState(false);
  const handlePassHelpOpen = () => {
    setIsPassHelpOpen((prevState) => !prevState);
  };

  return (
    <>
      <Modal
        open={isMainModalOpen}
        onClose={handleMainModalOpen}
        closeAfterTransition
      >
        <Fade in={isMainModalOpen}>
          <Box sx={main_modal_styles}>
            <MainModalHeader>
              <ContentText>
                <strong>Web</strong> App
              </ContentText>
              <CloseButton onClick={handleMainModalOpen}>x</CloseButton>
            </MainModalHeader>
            <ContentText>Войдите в свой профиль</ContentText>
            <InputText>Логин</InputText>
            <ContentInput type="text" placeholder="lorem@ipsum.com" />
            <InputText>Пароль</InputText>
            <ContentInput type="text" placeholder="lorem@ipsum.com" />
            <MainButton>ВОЙТИ</MainButton>
            <HelpButton onClick={handleRegHelpOpen}>Я забыл пароль</HelpButton>
            <HelpButton onClick={handlePassHelpOpen}>Регистрация</HelpButton>
            <HelpModal
              isHelpOpen={isRegHelpOpen}
              handleHelpOpen={handleRegHelpOpen}
              TextContent={regText}
            />
            <HelpModal
              isHelpOpen={isPassHelpOpen}
              handleHelpOpen={handlePassHelpOpen}
              TextContent={passText}
            />
            <HelpLink href="https://t.me/EreminEvgeny78">
              Написать в поддержку
            </HelpLink>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
