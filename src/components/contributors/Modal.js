import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    padding: theme.spacing(1),
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  input: {
    width: "100%",
    height: 40,
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  submitbutton: {
    width: "100%",
    height: 40,
    backgroundColor: "lightgreen",
    border: "0",
    marginBottom: 20,
  },
  danger: {
    alignItems: "center",
    justifyContent: "center",
    color: "red",
  },
}));

export default function ServerModal(props) {
  const classes = useStyles();
  const rootRef = React.useRef(null);
  return (
    <Modal
      disablePortal
      disableEnforceFocus
      disableAutoFocus
      open
      aria-labelledby="server-modal-title"
      aria-describedby="server-modal-description"
      className={classes.modal}
      style={{ padding: "50px" }}
      container={() => rootRef.current}
    >
      <div className={classes.paper}>
        <center>
          <p id="server-modal-description" style={{ color: "black" }}>
            Here is the address for the {props.crypto}
          </p>
          <p
            id="server-modal-description"
            style={{ color: "black", fontSize: "12px" }}
          >
            {props.address}
          </p>
          <form onSubmit={() => props.onSubmit()}>
            <input
              type="submit"
              className={classes.submitbutton}
              value="Close"
            />
          </form>
        </center>
      </div>
    </Modal>
  );
}
