import React from "react";
import { styles } from "../styles/ContactUs";
import { Box } from "@mui/material";
import { colors } from "../utils/const";

import Form from "../components/Form.jsx";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export default function Index() {
  return (
    <>
      <Box sx={styles.container}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 5,
            pb: { xs: 0, sm: 5 },
          }}
        >
          <Box
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "25px", md: "40px" },
              mx: { xs: "auto", md: 0 },
              color: colors.blue,
              pb: 2,
            }}
          >
            We would like to hear from you
          </Box>
          <Box
            sx={{
              mb: 2,
              mx: { xs: "auto", md: 0 },
              display: "flex",
              alignItems: "center",
            }}
          >
            <EmailIcon />
            <Box
              component="a"
              sx={{ mx: 2, textDecoration: "none", color: colors.blue }}
              href="mailto:info@sign8r.com"
            >
              info@sign8r.com
            </Box>
          </Box>
          <Box
            sx={{
              mb: 2,
              mx: { xs: "auto", md: 0 },
              display: "flex",
              alignItems: "center",
            }}
          >
            <LocalPhoneIcon />
            <Box
              component="a"
              sx={{ mx: 2, textDecoration: "none", color: colors.blue }}
              href="tel:+971 4 874 76 26"
            >
              +971 4 874 76 26
            </Box>
          </Box>
          <Box
            component="img"
            src="https://www.seekpng.com/png/full/295-2953231_call-center-call-center-png.png"
            loading="lazy"
            sx={{
              width: "450px",
              mt: { xs: 3, md: "auto" },
              display: { xs: "none", md: "block" },
            }}
          />
        </Box>
        <Form color={colors.blue}></Form>
      </Box>
    </>
  );
}
