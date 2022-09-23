import * as React from 'react'
import { calculateTableData } from './MortgageCalcualtor'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'

type Column = {
  id: 'name' | 'amount' | 'interest' | 'principal' | 'remain'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}
export const formatCurrency = (item: number) => {
  return String(item.toFixed(2))
}
const columns: Column[] = [
  { id: 'name', label: 'Month/Year', minWidth: 170 },
  { id: 'amount', label: 'Payment Amount', minWidth: 100 },
  {
    id: 'interest',
    label: 'Interest Paid',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'principal',
    label: 'Principal Paid',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'remain',
    label: 'Remain',
    minWidth: 170,
    align: 'right',
    format: (value: number) => formatCurrency(value),
  },
]

export type RowData = ReturnType<typeof calculateTableData>
export const LoanTable = (props: RowData) => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  var pageDataOffsetStart = page * rowsPerPage
  var pageDataOffsetEnd = page * rowsPerPage + rowsPerPage

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseFloat(event.target.value))
    setPage(0)
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.slice(pageDataOffsetStart, pageDataOffsetEnd).map(row => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={row.interest}>
                  {columns.map(column => {
                    const value = row[column.id]
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[12, 24, 36]}
        component='div'
        count={length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(event, page) => {
          setPage(page)
        }}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}
