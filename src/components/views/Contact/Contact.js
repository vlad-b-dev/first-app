import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import MainPageHeader from "../../ui/menus/MainPageHeader/MainPageHeader";
import MainFooter from "../../ui/menus/MainFooter/MainFooter";
import { motion, AnimatePresence } from "framer-motion";
import ForwardToInboxTwoToneIcon from "@mui/icons-material/ForwardToInboxTwoTone";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  CircularProgress,
} from "@mui/material";
import "./Contact.scss";

const OPTION_KEYS = ["jobOffer", "freelance", "errors", "other"];

const Contact = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "en";
  const textColor = "var(--main-hover-color)";

  const reasonOptions = OPTION_KEYS.map((key) => ({
    value: key,
    label: t(`contactPage.typeOfContact.options.${key}`),
  }));

  const [reasonSelect, setReasonSelect] = useState(reasonOptions[0]?.value);

  const commonSx = {
    "& .MuiInputLabel-root": {
      color: textColor,
      "&.Mui-focused": { color: "var(--highlight-color)" },
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "var(--main-color)" },
      "&:hover fieldset": { borderColor: "var(--main-color)" },
      "&.Mui-focused fieldset": { borderColor: "var(--main-color)" },
    },
    "& .MuiOutlinedInput-input": { color: textColor },
    "& .MuiSvgIcon-root": { color: textColor },
  };

  const menuProps = {
    PaperProps: {
      sx: {
        backgroundColor: "var(--main-background-color)",
        border: "1px solid var(--main-color)",
        "& .MuiMenuItem-root": {
          color: "var(--main-hover-color)",
          backgroundColor: "var(--main-background-color)",
          "&:hover": {
            color: "var(--highlight-color)",
            backgroundColor: "var(--secondary-background-color)",
          },
          "&.Mui-selected, &.Mui-selected:hover": {
            color: "var(--highlight-color)",
            backgroundColor: "var(--secondary-background-color)",
          },
        },
      },
    },
  };

  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [subjectInput, setSubjectInput] = useState("");
  const [messageBody, setMessageBody] = useState("");
  const [messageError, setMessageError] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");
  const [statusType, setStatusType] = useState("");
  const [loading, setLoading] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const validateEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  const validateFullName = (val) => {
    const parts = val.trim().split(/\s+/);
    const rx = /^[A-Za-zÁÉÍÓÚÑáéíóúñ]+$/;
    return parts.length >= 2 && parts.every((w) => rx.test(w));
  };

  const handleSend = async () => {
    setStatusMsg("");
    setEmailError(false);

    if (!messageBody.trim()) {
      setMessageError(true);
      setStatusType("error");
      setStatusMsg(t("contactPage.messageValidation"));
      return;
    }
    setMessageError(false);

    if (!validateFullName(fullName)) {
      setFullNameError(true);
      setStatusType("error");
      setStatusMsg(t("contactPage.nameValidation"));
      return;
    }
    setFullNameError(false);

    if (!validateEmail(email)) {
      setEmailError(true);
      setStatusType("error");
      setStatusMsg(t("contactPage.emailValidation"));
      return;
    }
    setShowImage(true);
    setLoading(true);

    const chosenLabel =
      reasonOptions.find((opt) => opt.value === reasonSelect)?.label || "";
    const subjectToSend = subjectInput
      ? `${chosenLabel} - ${subjectInput}`
      : chosenLabel;

    try {
      const res = await fetch("https://all-in-backend.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          email,
          subject: subjectToSend,
          message: messageBody,
          lang,
        }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatusType("success");
        setStatusMsg(t("contactPage.sendSuccess"));
        setFullName("");
        setEmail("");
        setReasonSelect(reasonOptions[0]?.value);
        setSubjectInput("");
        setMessageBody("");
      } else {
        setStatusType("error");
        setStatusMsg(
          `${t("Error")}: ${data.detail || t("contactPage.sendError")}`
        );
      }
    } catch (err) {
      console.error(err);
      setStatusType("error");
      setStatusMsg(t("contactPage.sendError"));
    } finally {
      setLoading(false);
      setShowImage(false);
    }
  };

  return (
    <div className="page-background">
      <MainPageHeader />
      <motion.div
        className="contact-section-container contact-main-section-container"
        initial={{ y: -400, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 17, damping: 7 }}
      >
        <h2 className="text-center">{t("contactPage.pageHead")}</h2>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
            maxWidth: "800px",
            margin: "0 auto",
            p: 0,
            mt: 4,
          }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <FormControl
                fullWidth
                variant="outlined"
                sx={{ ...commonSx, flex: 1 }}
              >
                <InputLabel id="reason-label">
                  {t("contactPage.typeOfContact.title")}
                </InputLabel>
                <Select
                  labelId="reason-label"
                  value={reasonSelect}
                  label={`${t("contactPage.typeOfContact.title")} *`}
                  onChange={(e) => setReasonSelect(e.target.value)}
                  MenuProps={menuProps}
                >
                  {reasonOptions.map((opt) => (
                    <MenuItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                label={t("contactPage.subject")}
                value={subjectInput}
                onChange={(e) => {
                  if (e.target.value.length <= 100) {
                    setSubjectInput(e.target.value);
                  }
                }}
                fullWidth
                placeholder={t("contactPage.optional")}
                variant="outlined"
                maxLength={100}
                sx={{ ...commonSx, flex: 1 }}
              />
            </Box>

            <TextField
              label={t("contactPage.message")}
              multiline
              rows={4}
              value={messageBody}
              onChange={(e) => {
                if (e.target.value.length <= 300) {
                  setMessageBody(e.target.value);
                }
              }}
              maxLength={300}
              error={messageError}
              helperText={messageError ? t("contactPage.required") : ""}
              fullWidth
              variant="outlined"
              sx={commonSx}
            />
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <TextField
                label={t("contactPage.nameAndSurname")}
                value={fullName}
                onChange={(e) => {
                  if (e.target.value.length <= 80) {
                    setFullName(e.target.value);
                  }
                }}
                maxLength={80}
                error={fullNameError}
                helperText={
                  fullNameError ? t("contactPage.nameValidation") : ""
                }
                fullWidth
                variant="outlined"
                sx={{ ...commonSx, flex: 1 }}
              />

              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => {
                  if (e.target.value.length <= 100) {
                    setEmail(e.target.value);
                  }
                }}
                maxLength={100}
                error={emailError}
                helperText={emailError ? t("contactPage.emailValidation") : ""}
                fullWidth
                variant="outlined"
                sx={{ ...commonSx, flex: 1 }}
              />
            </Box>

            <AnimatePresence>
              {showImage && (
                <motion.div
                  initial={{ y: 300, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ x: 300, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 2,
                  }}
                  className="mail-load-icon"
                >
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "fit-content",
                      height: "fit-content",
                    }}
                  >
                    <ForwardToInboxTwoToneIcon
                      sx={{
                        width: "100%",
                        height: "100%",
                        "& .MuiSvgIcon-secondary": {
                          color: "var(--highlight-color)",
                        },
                      }}
                      htmlColor="var(--main-color)"
                    />
                    <CircularProgress
                      size={70}
                      thickness={4}
                      sx={{
                        marginBottom: 15,
                      }}
                      style={{ color: "var(--main-color)" }}
                    />
                  </Box>
                </motion.div>
              )}
            </AnimatePresence>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              gap: 1,
            }}
          >
            <button
              type="button"
              className="send-button"
              onClick={handleSend}
              disabled={loading}
              style={{ width: "100%" }}
            >
              {loading ? t("contactPage.sending") : t("Enviar")}
            </button>

            {statusMsg && (
              <Typography
                variant="body2"
                sx={{
                  color:
                    statusType === "success" ? "var(--highlight-color)" : "red",
                  textAlign: "center",
                }}
              >
                {statusMsg}
              </Typography>
            )}
          </Box>
        </Box>
      </motion.div>
      <MainFooter />
    </div>
  );
};

export default Contact;
