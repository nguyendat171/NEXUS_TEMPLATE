// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Select from '@mui/material/Select'
import { GridRowId } from '@mui/x-data-grid'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'

interface TableHeaderProps {
  value: string
  selectedRows: GridRowId[]
  handleFilter: (val: string) => void
}

const TableHeader = (props: TableHeaderProps) => {
  // ** Props
  const { value, selectedRows, handleFilter } = props

  return (
    <Box
      sx={{
        p: 5,
        pb: 3,
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <Select
          size='small'
          displayEmpty
          defaultValue=''
          sx={{ mr: 4, mb: 2, '& >.MuiSelect-select': { minWidth: '2rem !important' } }}
          disabled={selectedRows && selectedRows.length === 0}
          renderValue={selected => (selected.length === 0 ? 'Import' : selected)}
        >
          <MenuItem disabled>Actions</MenuItem>
          <MenuItem value='Delete'>Delete</MenuItem>
          <MenuItem value='Edit'>Edit</MenuItem>
          <MenuItem value='Send'>Send</MenuItem>
        </Select>
        <Select
          size='small'
          displayEmpty
          defaultValue=''
          sx={{ mr: 4, mb: 2, '& >.MuiSelect-select': { minWidth: '2rem !important' } }}
          disabled={selectedRows && selectedRows.length === 0}
          renderValue={selected => (selected.length === 0 ? 'HMRC' : selected)}
        >
          <MenuItem disabled>Actions</MenuItem>
          <MenuItem value='Delete'>Delete</MenuItem>
          <MenuItem value='Edit'>Edit</MenuItem>
          <MenuItem value='Send'>Send</MenuItem>
        </Select>
        <Select
          size='small'
          displayEmpty
          defaultValue=''
          sx={{ mr: 4, mb: 2, '& >.MuiSelect-select': { minWidth: '2rem !important' } }}
          disabled={selectedRows && selectedRows.length === 0}
          renderValue={selected => (selected.length === 0 ? 'User' : selected)}
        >
          <MenuItem disabled>Actions</MenuItem>
          <MenuItem value='Delete'>Delete</MenuItem>
          <MenuItem value='Edit'>Edit</MenuItem>
          <MenuItem value='Send'>Send</MenuItem>
        </Select>
        <Select
          size='small'
          displayEmpty
          defaultValue=''
          sx={{ mr: 4, mb: 2, '& >.MuiSelect-select': { minWidth: '2rem !important' } }}
          disabled={selectedRows && selectedRows.length === 0}
          renderValue={selected => (selected.length === 0 ? 'Export' : selected)}
        >
          <MenuItem disabled>Actions</MenuItem>
          <MenuItem value='Delete'>Delete</MenuItem>
          <MenuItem value='Edit'>Edit</MenuItem>
          <MenuItem value='Send'>Send</MenuItem>
        </Select>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <TextField
          size='small'
          value={value}
          sx={{ mr: 4, mb: 2, '& >.MuiSelect-select': { minWidth: '2rem !important' } }}
          placeholder='Search...'
          onChange={e => handleFilter(e.target.value)}
        />
        <Button sx={{ mb: 2 }} component={Link} variant='contained' href='/apps/invoice/add'>
          Create Employer
        </Button>
      </Box>
    </Box>
  )
}

export default TableHeader
