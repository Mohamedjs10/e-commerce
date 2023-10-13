import React from "react";
import { styles } from "../styles/Form";
import { useFormik } from "formik";
import { schema } from "../utils/schema";
import { Box, TextField, InputLabel, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Form({ color }) {
  // formik ==========================================================
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay
    actions.resetForm();
    toast.success("We've received your message", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      message: "",
      username: "",
    },
    validationSchema: schema,
    onSubmit,
  });
  // ================================================================
  return (
    <Box
      component="form"
      sx={styles.container}
      onSubmit={handleSubmit}
      autoComplete="off"
      noValidate
      className="horizontal-safe-margin vertical-safe-margin"
    >
      {/* Name ---------------------------------------------------------------------------------------------------------- */}
      <Box sx={styles.inputWrapper} style={{ width: "100%" }}>
        <InputLabel sx={styles.label}>Name</InputLabel>
        <TextField
          value={values.username}
          onChange={handleChange}
          id="username"
          type="text"
          onBlur={handleBlur}
          error={touched.username && errors.username}
          sx={styles.input}
          InputProps={{ sx: { height: "45px" } }}
          variant="outlined"
        />
        <Box sx={styles.helperText}>{touched.username && errors.username}</Box>
      </Box>
      {/* Email Adress ---------------------------------------------------------------------------------------------------------- */}
      <Box sx={styles.inputWrapper} style={{ width: "100%" }}>
        <InputLabel sx={styles.label}>Email Adress</InputLabel>
        <TextField
          value={values.email}
          onChange={handleChange}
          id="email"
          type="email"
          onBlur={handleBlur}
          error={touched.email && errors.email}
          sx={styles.input}
          InputProps={{ sx: { height: "45px" } }}
          variant="outlined"
        />
        <Box sx={styles.helperText}>{touched.email && errors.email}</Box>
      </Box>

      {/* Message ---------------------------------------------------------------------------------------------------------- */}
      <Box sx={styles.inputWrapper} style={{ width: "100%" }}>
        <InputLabel sx={styles.label}>Message</InputLabel>
        <TextField
          // InputProps={{ sx: { height: "45px" } }}
          multiline
          rows={3}
          value={values.message}
          onChange={handleChange}
          id="message"
          type="text"
          onBlur={handleBlur}
          error={touched.message && errors.message}
          sx={styles.input}
          variant="outlined"
        />
        <Box sx={styles.helperText}>{touched.message && errors.message}</Box>
      </Box>
      {/* Submit ---------------------------------------------------------------------------------------------------------- */}
      <Button
        disabled={isSubmitting}
        type="submit"
        sx={styles.btn}
        style={{
          backgroundColor: color,
          border: `1px solid #74357D`,
        }}
      >
        Submit
      </Button>

      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Box>
  );
}
