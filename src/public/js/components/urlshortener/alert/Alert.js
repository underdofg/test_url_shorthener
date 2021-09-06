import React from 'react'
const Dialog = require("@material-ui/core/Dialog").default;
const DialogTitle = require("@material-ui/core/DialogTitle").default;
const DialogContent = require("@material-ui/core/DialogContent").default;
const DialogContentText = require("@material-ui/core/DialogContentText").default
const DialogActions = require("@material-ui/core/DialogActions").default;
const Button = require("@material-ui/core/Button").default

const Alert = ({ title, text, open, onClose }) => {
  return (
    <Dialog fullWidth open={open} onClose={() => {onClose(false)}}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button varaint="contained" onClick={() => {onClose(false)}} color="primary" autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Alert