// material-ui
import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LoginIcon from "@mui/icons-material/Login";

// third party
import { useNavigate } from "react-router-dom";

// project imports
import LogoSection from "@/layout/MainLayout/LogoSection";

const useStyles = makeStyles({
  container: {
    margin: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  signUpBtn: {
    color: "white",
    border: "1px solid white",
    borderRadius: 50,
  },
});

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Box className={classes.container}>
      <LogoSection
        width={140}
        height={120}
        titleVariant={"h3"}
        titleColor={"white"}
      />
      <Button
        variant={"outlined"}
        size={"large"}
        className={classes.signUpBtn}
        startIcon={<LoginIcon />}
        onClick={() => navigate("/login")}
      >
        Sign in
      </Button>
    </Box>
  );
};
export default Header;
