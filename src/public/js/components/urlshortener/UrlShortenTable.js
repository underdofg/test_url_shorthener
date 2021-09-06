import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


const UrlShortenTable = ({ url }) => {

  const shortUrl = `http://localhost:3000/${url.shortUrl}`

  return (
    <TableBody>
      <TableRow>
        <TableCell component="th" scope="row">
          <a href={url.fullUrl}>
            {url.fullUrl}
          </a>
        </TableCell>
        <TableCell align="right">
          <a href={shortUrl}>
            {url.shortUrl}
          </a>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};
export default UrlShortenTable;


