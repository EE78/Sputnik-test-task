import styled from "@emotion/styled";

const main_modal_styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  boxShadow: 24,
  bgcolor: "white",
  borderRadius: "20px",
  p: 5,
  display: "flex",
  flexDirection: "column",
};

const help_modal_styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  boxShadow: 24,
  bgcolor: "white",
  borderRadius: "20px",
  p: 5,
  display: "flex",
  flexDirection: "row",
};

const MainModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const HelpModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;
const ContentText = styled.p`
  font-size: 28px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const InputText = styled.p`
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const HelpText = styled.p`
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 20px;
`;

const HelpLink = styled.a`
  font-size: 12px;
  color: gray;
  margin-top: 50px;
  margin-bottom: 5px;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
  text-decoration: none;
`;

const CloseButton = styled.button`
  font-size: 20px;
  background-color: #ffffff;
  border: none;
  color: gray;
  cursor: pointer;
  text-align: center;
  &:hover {
    opacity: 0.75;
  }
`;

const ContentInput = styled.input`
  width: 50%;
  border: 1px solid gray;
  border-radius: 2px;
  outline: none;
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const MainButton = styled.button`
  font-size: 14px;
  width: 50%;
  background-color: #b129a5;
  border: 1px solid purple;
  border-radius: 30px;
  padding: 15px;
  color: white;
  cursor: pointer;
  text-align: center;
  &:hover {
    opacity: 0.75;
  }
  margin-top: 20px;
  margin-bottom: 20px;
`;

const HelpButton = styled.button`
  display: flex;
  width: 120px;
  font-size: 14px;
  background-color: #ffffff;
  border: none;
  color: blue;
  cursor: pointer;
  text-align: center;
  &:hover {
    opacity: 0.75;
  }
  margin-bottom: 10px;
  padding: 0;
`;

export {
  help_modal_styles,
  main_modal_styles,
  MainModalHeader,
  CloseButton,
  ContentText,
  ContentInput,
  InputText,
  MainButton,
  HelpButton,
  HelpText,
  HelpModalHeader,
  HelpLink,
};
