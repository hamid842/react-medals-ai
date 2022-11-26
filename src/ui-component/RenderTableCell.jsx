import { Grid, Typography, createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const theme = createTheme();

// styles
const useStyles = makeStyles({
  titleContainer: {
    borderBottom: 0,

    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  title: {
    fontWeight: 700,
    borderBottom: 0,
  },
  cell: {
    [theme.breakpoints.down("sm")]: {
      width: 350,
    },
  },
});

// ==============================|| PASSWORD FIELD ||================================ //

const RenderCell = ({ cellTitle, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.cell}>
      <Grid container alignItems="center">
        <Grid item xs={4} sm={4} className={classes.titleContainer}>
          <Typography className={classes.title}>{cellTitle}</Typography>
        </Grid>
        <Grid item xs={8} sm={8}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

export default RenderCell;
