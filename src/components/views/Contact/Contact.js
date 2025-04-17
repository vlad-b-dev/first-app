import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import MainPageHeader from "../../ui/menus/MainPageHeader/MainPageHeader";
import MainFooter from "../../ui/menus/MainFooter/MainFooter";
import { motion } from "framer-motion";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
} from "@mui/material";
import "./Contact.scss";

const SUBJECT_OPTIONS = [
  { value: "Oferta de trabajo", label: "Oferta de trabajo" },
  { value: "Oferta freelance", label: "Oferta freelance" },
  { value: "Reportar error", label: "Reportar error" },
  { value: "Otros", label: "Otros" },
];

const Contact = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "en";

  const textColor = "var(--main-hover-color)";

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [subject, setSubject] = useState(SUBJECT_OPTIONS[0].value);
  const [messageBody, setMessageBody] = useState("");
  const [statusMsg, setStatusMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (value) => {
    // simple regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSend = async () => {
    setStatusMsg("");
    if (!validateEmail(email)) {
      setEmailError(true);
      setStatusMsg(t("Por favor ingresa un email válido."));
      return;
    }
    setEmailError(false);
    setLoading(true);

    try {
      const res = await fetch("https://all-in-backend.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: email.split("@")[0],
          email,
          subject,
          message: messageBody,
          lang,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatusMsg(
          lang === "es"
            ? "¡El mensaje fue enviado correctamente!"
            : "Message sent successfully!"
        );
        setEmail("");
        setSubject(SUBJECT_OPTIONS[0].value);
        setMessageBody("");
      } else {
        setStatusMsg(
          `${t("Error")}: ${data.detail || t("No se pudo enviar el mensaje.")}`
        );
      }
    } catch (err) {
      console.error(err);
      setStatusMsg(
        lang === "es"
          ? "Hubo un error al enviar el mensaje."
          : "There was an error sending your message."
      );
    } finally {
      setLoading(false);
    }
  };

  const textFieldSx = {
    "& .MuiInputLabel-root": { color: textColor },
    "& .MuiInputBase-input": { color: textColor },
    "& .MuiFormHelperText-root": { color: textColor },
  };

  return (
    <div className="page-background">
      <MainPageHeader />

      <motion.div
        className="main-section-container mobile-main-section-container"
        initial={{ y: -400, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 17, damping: 7 }}
      >
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: 600,
            margin: "0 auto",
            p: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <TextField
              label={t("Email")}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
              helperText={emailError ? t("Email inválido") : ""}
              fullWidth
              sx={textFieldSx}
            />

            <FormControl fullWidth>
              <InputLabel id="subject-label" sx={{ color: textColor }}>
                {t("Asunto")}
              </InputLabel>
              <Select
                labelId="subject-label"
                value={subject}
                label={t("Asunto")}
                onChange={(e) => setSubject(e.target.value)}
                sx={{
                  color: textColor,
                  "& .MuiSvgIcon-root": { color: textColor },
                }}
              >
                {SUBJECT_OPTIONS.map((opt) => (
                  <MenuItem
                    key={opt.value}
                    value={opt.value}
                    sx={{ color: textColor }}
                  >
                    {t(opt.label)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <TextField
            label={t("Mensaje")}
            multiline
            rows={5}
            value={messageBody}
            onChange={(e) => setMessageBody(e.target.value)}
            fullWidth
            sx={textFieldSx}
          />

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button
              variant="contained"
              size="large"
              onClick={handleSend}
              disabled={loading}
              sx={{ color: textColor }}
            >
              {loading
                ? lang === "es"
                  ? "Enviando..."
                  : "Sending..."
                : t("Enviar")}
            </Button>
            {statusMsg && (
              <Typography variant="body1" sx={{ color: textColor }}>
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
