import styled from "styled-components";
export const LinkComponent = styled.a`
  cursor: pointer;

  color: ${(props) => props.clr};
  display: inline-block;
  position: relative;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.clr};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
    border-radius: 100px;
  }

  &:hover::after,
  &:focus-visible::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  &:hover {
    text-shadow: 0px 0px 20px ${(props) => props.clr};
  }

  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }
`;
const Link = (props) => {
  return (
    <LinkComponent
      clr={props.clr}
      rel="noreferrer"
      target="_blank"
      href={props.href}
    >
      {props.children}
    </LinkComponent>
  );
};
Link.defaultProps = {
  clr: "#03a688",
};
export default Link;
