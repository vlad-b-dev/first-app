import { noHoverButtonStyles } from "../../../styles/SxGlobalStyles";

export const expandPdfButton = (isMobile) => ({
  marginLeft: isMobile ? "-1.8rem" : "-0.8rem",
  ...noHoverButtonStyles,
  "&:hover .MuiSvgIcon-root": { color: "var(--main-color)" },
});

export const expandIcon = (isMobile) => ({
  fontSize: isMobile ? "1.4rem" : "1.8vw",
});

export const toggleButtonGroup = { marginTop: "0.2vh" };

export const zoomOutButton = (isMobile) => ({
  marginLeft: isMobile ? "3.5rem" : "5.8vw",
  marginRight: isMobile ? "-0.5rem" : "1.8vw",
  marginTop: isMobile ? "-0.6rem" : "0",
  ...(isMobile ? noHoverButtonStyles : {}),
});

export const zoomIcon = (isMobile) => ({
  fontSize: isMobile ? "2rem" : "1.8vw",
});

export const zoomInButton = (isMobile) => ({
  marginLeft: isMobile ? "-0.5rem" : "1.8vw",
  marginRight: isMobile ? "-2rem" : "1.8vw",
  marginTop: isMobile ? "-0.6rem" : "0",
  ...(isMobile ? noHoverButtonStyles : {}),
});

export const resetButton = (isMobile) => ({
  marginLeft: isMobile ? "1rem" : "0vw",
  marginRight: isMobile ? "-3.5rem" : "0vw",
  marginTop: isMobile ? "-0.4rem" : "0",
  ...(isMobile ? noHoverButtonStyles : {}),
});

export const actionButton = (isMobile) => ({
  marginRight: isMobile ? "-0.8rem" : "1.8vw",
  ...(isMobile ? noHoverButtonStyles : {}),
});

export const toggleButtonStylesSize = (isMobile) => ({
  borderRadius: "12px",
  width: isMobile ? "3rem" : "5rem",
  height: "auto",
});
