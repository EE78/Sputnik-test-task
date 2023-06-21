import React, { useState } from "react";
import { MainModal } from "./components/main_modal";
import { OpenerButton } from "./components/button_opener";
import { App, AppText } from "./ui/styled_app";

const Form = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <App>
      <h1>Привет :)</h1>
      <AppText>
        Меня зовут Евгений Еремин. Я - начинающий frontend-разработчик.
      </AppText>
      <AppText>
        Прошу рассмотреть мой вариант решения Вашего тестового задания.
      </AppText>
      <OpenerButton handleOpen={handleOpen} />
      <MainModal isMainModalOpen={isOpen} handleMainModalOpen={handleOpen} />
    </App>
  );
};

export default Form;
