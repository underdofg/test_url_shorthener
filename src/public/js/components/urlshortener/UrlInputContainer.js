import React, { useState , useEffect  } from 'react'
import UrlShortenTable from './UrlShortenTable'
import TableContainer from "@material-ui/core/TableContainer";
import Input  from "@material-ui/core/Input";
import Table from "@material-ui/core/Table";
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from "@material-ui/core/TableCell";
import fetchURLS from './libs/fetchUrls'
import postUrl from './libs/postUrl';
import setUrl from './libs/setUrl'
import CreateUrlOutcomeAlert from './alert/CreateUrlOutcomeAlert'
import { async } from "regenerator-runtime";



const UrlInputContainer = () => {
 
 const [urlList, setUrlList] = useState([]);
 const [errorAlertOpen, setErrorAlertOpen] = useState(false);
 const [successAlertOpen, setSuccessAlertOpen] = useState(false);
 const [errorMesg, setErrorMsg] = useState("Something went wrong");


 useEffect(async () => {
    try {
       const urls = await fetchURLS();
       setUrlList(urls);
    } catch(error) {
       setUrlList([]);
    }
 } ,[])

 const onSubmit = async (event) => {
    event.preventDefault();
    const urlName = event.target.urlInput.value
    const requestParams = setUrl(urlName);

    try {
       const result = await postUrl(requestParams);
       setSuccessAlertOpen(true);
       const urls = await fetchURLS();
       setUrlList(urls);
    } catch(error) {
       setErrorAlertOpen(true);
       setErrorMsg(error.message);
    }
 };

  return (
    <div className="shortUrl-containers">
      <h1>URL Shortener</h1>
      <form className="form-container" onSubmit={onSubmit}>
        <Input
          fullWidth
          className="form-input"
          name="urlInput"
          label="urlInput"
          placeholder="ENTER FULL URL ..."
        />
      </form>
      <TableContainer className="table-containers">
        <Table>
          <TableHead>
            <TableRow className="header-table">
              <TableCell>FULL URL</TableCell>
              <TableCell align="right">SHORT URL</TableCell>
            </TableRow>
          </TableHead>
          {!urlList.error
            ? urlList.map((url, i) => <UrlShortenTable key={i} url={url} />)
            : null}
        </Table>
      </TableContainer>
      <CreateUrlOutcomeAlert
        errorAlertOpen={errorAlertOpen}
        successAlert={successAlertOpen}
        errorMesg={errorMesg}
        setErrorAlertOpen={setErrorAlertOpen}
        setSuccessAlert={setSuccessAlertOpen}
      />
    </div>
  );
}

export default UrlInputContainer;
