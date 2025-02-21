export const toggleButtonStyles = {
  backgroundColor: "var(--secondary-background-color)",
  "&:hover": {
    backgroundColor: "var(--main-hover-color)",
  },
  "&.Mui-selected": {
    backgroundColor: "var(--main-color)",
  },
  "&.Mui-selected:hover": {
    backgroundColor: "var(--main-color)",
  },
};

export const noHoverButtonStyles = {
  "&:hover": {
    color: "var(--main-color)",
    backgroundColor: "transparent",
  },
  "&.Mui-selected:hover": {
    color: "var(--main-color)",
    backgroundColor: "transparent",
  },
  "&:hover .MuiSvgIcon-root": {
    color: "var(--main-hover-color)",
  },
};

export const expandButton = (isMobile) => ({
  marginLeft: isMobile ? "-1.8rem" : "-0.8rem",
  ...noHoverButtonStyles,
  "&:hover .MuiSvgIcon-root": { color: "var(--main-color)" },
});

export const expandIcon = (isMobile) => ({
  fontSize: isMobile ? "1.4rem" : "1.7vw",
});
