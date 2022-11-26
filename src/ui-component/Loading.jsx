// material-ui
import { makeStyles } from "@mui/styles";
// third party
import { Dna } from "react-loader-spinner";
import {PropagateLoader} from "react-spinners";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

//=========================< LOADING >============================//

const Loading = ({ visible }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <PropagateLoader
        visible={visible}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{ textAlign: "center" }}
        wrapperClass="dna-wrapper"
        color={"#50a7d5"}
      />
    </div>
  );
};

export default Loading;
