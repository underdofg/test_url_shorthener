import React from "react";
import Alert from "./Alert";

const CreateUrlOutcomeAlert = ({
  errorAlertOpen,
  successAlert,
  errorMesg,
  setErrorAlertOpen,
  setSuccessAlert,
}) => {
  return (
    <div>
      <Alert
        title="Create short URL failed."
        text={errorMesg}
        open={errorAlertOpen}
        onClose={setErrorAlertOpen}
      />
      <Alert
        title="Create short URL successfully"
        text="Your short url has been created"
        open={successAlert}
        onClose={setSuccessAlert}
      />
    </div>
  );
};

export default CreateUrlOutcomeAlert;
