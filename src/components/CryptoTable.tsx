import type { CoinType } from '../features/crypto/CryptoSlice'
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { TableHead } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store';
import { setPinnedCoins } from '../features/crypto/CryptoSlice';

type CryptoTableProps = {
  cryptoList: CoinType[],
  tableProps: { [key: string]: string };
};

type TablePaginationActionsProps = {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}
function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

export default function CryptoTable({ cryptoList, tableProps }: CryptoTableProps) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const navigate = useNavigate();
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - cryptoList.length) : 0;
  const dispatch = useAppDispatch()

  function setPinned(key: string, change: number, image: string) {
    dispatch(setPinnedCoins([key, change, image]))
  }

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            {Object.entries(tableProps).map(([key, value]) => (
              <TableCell key={key} align='left' sx={{ fontWeight: 'bold' }}>{key}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? cryptoList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : cryptoList
          ).map((row) => (
            <TableRow hover sx={{ border: 0 }} key={row.id} onClick={() => { navigate(`/about/${row.id}`); }}>
              {Object.entries(tableProps).map(([key, value]) => (
                // Make percentages color red ift they're negative and green if they're positive, ideally should apply using css and classnames instead of complex calculations like below - this is here for the time being
                <>
                  <TableCell className={`table-body-cell-${key}`} key={`${row.id}-${key}`} style={{ width: 160, color: !isNaN(parseFloat(String(row[value]))) && key.includes('%') ? (parseFloat(String(row[value])) >= 0 ? 'green' : 'red') : 'black' }} align="left" data-value={row[value]}>
                    {/* // Format data to includes commas and $ excluding any heading with '%' */}
                    {typeof row[value] === 'number' && !key.includes('%') && key !== 'pin' ? `$${row[value].toLocaleString()}` : row[value]}
                    {value=== 'pin' ?<button type="button" onClick={(e) => { e.stopPropagation(); setPinned(row.id, row.price_change_24h, row.image) }}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12,22l1-2v-3h5c0.553,0,1-0.447,1-1v-1.586c0-0.526-0.214-1.042-0.586-1.414L17,11.586V8c0.553,0,1-0.447,1-1V4 c0-1.103-0.897-2-2-2H8C6.897,2,6,2.897,6,4v3c0,0.553,0.448,1,1,1v3.586L5.586,13C5.213,13.372,5,13.888,5,14.414V16 c0,0.553,0.448,1,1,1h5v3L12,22z M8,4h8v2H8V4z M7,14.414l1.707-1.707C8.895,12.52,9,12.266,9,12V8h6v4 c0,0.266,0.105,0.52,0.293,0.707L17,14.414V15H7V14.414z"></path></svg></button> : ''}
                  </TableCell>
                  {/* <TableCell className='pin-coin' key={`${row.id}-${key}`} >
                    <button type="button" onClick={() => { setPinned(row.id, row.price_change_24h, row.image) }}>
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12,22l1-2v-3h5c0.553,0,1-0.447,1-1v-1.586c0-0.526-0.214-1.042-0.586-1.414L17,11.586V8c0.553,0,1-0.447,1-1V4 c0-1.103-0.897-2-2-2H8C6.897,2,6,2.897,6,4v3c0,0.553,0.448,1,1,1v3.586L5.586,13C5.213,13.372,5,13.888,5,14.414V16 c0,0.553,0.448,1,1,1h5v3L12,22z M8,4h8v2H8V4z M7,14.414l1.707-1.707C8.895,12.52,9,12.266,9,12V8h6v4 c0,0.266,0.105,0.52,0.293,0.707L17,14.414V15H7V14.414z"></path></svg>
                    </button>
                  </TableCell> */}
                </>
              ))}
            </TableRow>


          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={Object.keys(tableProps).length} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={Object.keys(tableProps).length}
              count={cryptoList.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

