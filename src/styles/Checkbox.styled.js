import styled from "styled-components";
import { themeColors } from "./Variables.styled";
export const Checkbox = styled.input`
  accent-color: ${themeColors.$colorHex4};
  cursor: pointer;
`;
export const CheckboxContainer = styled.div`
  position: fixed;
  width: 100%;
  bottom: 50px;
  left: 16px;

  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  opacity: ${(props) => (props.visible ? 1 : 0)};
`;
export const CheckboxText = styled.span`
  opacity: ${(props) => (props.checked ? 1 : 0.7)};
  border-radius: 4px;
  background: #292f40;
  color: white;
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;