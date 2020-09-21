import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";

import { defaultTheme, typeScale } from "./utils";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  `,
  warning: ({ props }) => `
    background-color: ${props.theme.status.warningColor};
    color: ${props.theme.textColorInverted};

    &:hover, &:focus {
      background-color: ${props.theme.status.warningColorHover};
      outline: 3px solid ${props.theme.status.warningColorHover};
    }

    &:active {
      background-color: ${props.theme.status.warningColorActive}; 
    }
  `,
  secondaryButtonWarning: ({ props }) => `
    background: none;
    border: 2px solid ${props.theme.status.warningColor};
    color: ${props.theme.status.warningColor};
  `,
  tertiaryButtonWarning: ({ props }) => `
    background: none;
    color: ${props.theme.status.warningColor}
  `,

  error: ({ props }) => `
    background-color: ${props.theme.status.errorColor};
    color: ${props.theme.textColorInverted};
    border: 2px solid ${props.theme.status.errorColor};

    &:hover, &:focus {
      background-color: ${props.theme.status.errorColorHover};
      outline: 3px solid ${props.theme.status.errorColorHover};
    }

    &:active {
      background-color: ${props.theme.status.errorColorActive};
    }
  `,
  success: ({ props }) => `
    background-color: ${props.theme.status.successColor};
    color: ${props.theme.textColorInverted};

    &:hover, &:focus {
      background-color: ${props.theme.status.successColorHover};
      outline: 3px solid ${props.theme.status.successColorHover};
    }

    &:active {
      background-color: ${props.theme.status.successColorActive};
    }
  `,
};

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${defaultTheme.primaryFont};
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${(props) => props.theme.primaryColorHover};
    color: ${(props) => props.theme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${(props) => props.theme.primaryColorHover};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${(props) => props.theme.primaryColorActive};
    border-color: ${(props) => props.theme.primaryColorActive};
    color: ${(props) => props.theme.textColorOnPrimary};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  border: none;
  color: ${(props) => props.theme.textColorOnPrimary};

  &:disabled {
    background-color: ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.textOnDisabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background: none;
  border: 2px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryColor};

  &:disabled {
    background: none;
    color: ${(props) => props.theme.disabled};
    border-color: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  background: none;
  border: none;
  color: ${(props) => props.theme.primaryColor};

  &:disabled {
    background: none;
    color: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
