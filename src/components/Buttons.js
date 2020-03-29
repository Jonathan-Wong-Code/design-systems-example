import styled from "styled-components";
import { typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  `,
  primaryButtonWarning: ({ theme }) => `
    background-color: ${theme.status.warningColor};
    color: ${theme.textColorInverted};
  `,
  secondaryButtonWarning: ({ props }) => `
    background: none;
    border: 2px solid ${props.theme.status.warningColor};
    color: ${props.theme.status.warningColor};
    &:hover, &:focus {
      background-color: ${props.theme.status.warningColorHover};
      outline: 3px solid ${props.theme.status.warningColorHover};
      outline-offset: 2px;
    }
  `,
  tertiaryButtonWarning: ({ props }) => `
    background: none;
    color: ${props.theme.status.warningColor};
  `,
  warning: ({ theme }) => `
    background-color: ${theme.status.warningColor};
    color: ${theme.textColorInverted};
    
    &:hover, &:focus {
      background-color: ${theme.status.warningColorHover};
      outline: 3px solid ${theme.status.warningColorHover};
      outline-offset: 2px;
    }

    &:active {
      background-color: ${theme.status.warningColorActive};
    }
  `,
  primaryButtonError: ({ theme }) => `
    background-color: ${theme.status.errorColor};
    color: ${theme.textColorInverted};
  `,
  secondaryButtonError: ({ theme }) => `
    background: none;
    border: 2px solid ${theme.status.errorColor};
    color: ${theme.status.errorColor};
  `,
  tertiaryButtonError: ({ theme }) => `
    background: none;
    color: ${theme.status.errorColor};
  `,
  error: ({ theme }) => `
  background-color: ${theme.status.errorColor};
  color: ${theme.textColorInverted};

  &:hover {
    background-color: ${theme.status.errorColorHover};
  }

  &:active {
    background-color: ${theme.status.errorColorActive};
  }
  `,

  primaryButtonSuccess: ({ theme }) => `
  background-color: ${theme.status.successColor};
  color: ${theme.textColorInverted};
`,

  secondaryButtonSuccess: props => `
  background: none;
  border: 2px solid ${props.theme.status.successColor};
  color: ${props.theme.status.successColor};
`,

  tertiaryButtonSuccess: props => `
  background: none;
  color: ${props.theme.status.successColor};
`,
  success: props => `
  background-color: ${props.theme.status.successColor};
  color: ${props.theme.textColorInverted};

  &:hover {
    background-color: ${props.theme.status.successColorHover};
  }

  &:active {
    background-color: ${props.theme.status.successColorActive};
  }
  `
};

const BaseButton = styled.button`
  display: block;
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Roboto Mono", monospace;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${props => props.theme.primaryColorHover};
    color: ${props => props.theme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${props => props.theme.primaryColorHover};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${props => props.theme.primaryColorActive};
    border-color: ${props => props.theme.primaryColorActive};
    color: ${props => props.theme.textColorOnPrimary};
  }
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: ${props => props.theme.primaryColor};
  border: none;
  color: ${props => props.theme.textColorOnPrimary};

  &:disabled {
    background: ${props => props.theme.disabled};
    color: ${props => props.theme.textonDisabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(BaseButton)`
  background: none;
  border: 2px solid ${props => props.theme.primaryColor};
  color: ${props => props.theme.primaryColor};

  &:disabled {
    background: none;
    border-color: ${props => props.theme.disabled}
    color: ${props => props.theme.disabled};
    cursor: not-allowed;
  }
    ${applyStyleModifiers(BUTTON_MODIFIERS)}

`;

export const TertiaryButton = styled(BaseButton)`
  background: none;
  border: none;
  color: ${props => props.theme.primaryColor};

  &:disabled {
    background: none;
    color: ${props => props.theme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const StatusButton = styled.button`
  display: block;
  padding: 8px 12px;
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Roboto Mono", monospace;
  transition: all 0.2s linear;

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
