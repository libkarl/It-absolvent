import * as React from 'react'
import { StartRounded } from '@mui/icons-material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'

interface Column {
  id: 'name' | 'amount' | 'interest' | 'principal' | 'remain'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number | string) => string
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Month/Year', minWidth: 170 },
  { id: 'amount', label: 'Payment Amount', minWidth: 100 },
  {
    id: 'interest',
    label: 'Interest Paid',
    minWidth: 170,
    align: 'right',
    format: (value: number | string) => {
      if (typeof value === 'number') {
        return value.toLocaleString('en-US')
      } else {
        return value
      }
    },
  },
  {
    id: 'principal',
    label: 'Principal Paid',
    minWidth: 170,
    align: 'right',
    format: (value: number | string) => {
      if (typeof value === 'number') {
        return value.toLocaleString('en-US')
      } else {
        return value
      }
    },
  },
  {
    id: 'remain',
    label: 'Remain',
    minWidth: 170,
    align: 'right',
    format: (value: number | string) => {
      if (typeof value === 'number') {
        return value.toFixed(2)
      } else {
        return value
      }
    },
  },
]

export type RowData = {
  name: string
  amount: number
  interest: number
  principal: number
  remain: number
}

export const LoanTable = (props: RowData[]) => {
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
            {props.slice(pageDataOffsetStart, pageDataOffsetEnd).map(row => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={row.interest}>
                  {columns.map(column => {
                    const value = row[column.id]
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format ? column.format(value) : value}
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
