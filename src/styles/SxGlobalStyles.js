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
