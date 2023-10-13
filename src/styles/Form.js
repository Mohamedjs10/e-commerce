import { colors } from "../utils/const";

export const styles = {
  container: (theme) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    bgcolor: colors.white,
    maxWidth: "600px",
    width: "100%",
    borderRadius: 3,
    gap: 2,
    zIndex: 100,
    m: "50px",
    p: "20px",
  }),
  inputWrapper: (theme) => ({ flex: "2 1 auto" }),
  label: (theme) => ({
    fontWeight: "bold",
    fontSize: "20px",
    color: colors.manhattan_blue,
    pb: 1,
  }),
  input: (theme) => ({
    width: "100%",
    bgcolor: colors.white_smoke,
    borderRadius: 2,
    "& p": {
      bgcolor: "white",
      m: 0,
    },
    "& fieldset": {
      borderRadius: 2,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#808080",
      },
    },
  }),
  helperText: (theme) => ({
    color: "#d32f2f",
    fontSize: "0.75rem",
    m: 1,
  }),
  btn: (theme) => ({
    width: "100%",
    height: "45px",
    // mb: "40px",
    color: colors.white,
    border: `1px solid ${colors.yellow}`,
    backgroundColor: colors.yellow,
    borderRadius: 2,
  }),
};
