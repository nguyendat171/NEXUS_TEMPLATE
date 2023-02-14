// ** React Imports
import { useState, useEffect, forwardRef } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Tooltip from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import { DataGrid, GridRowId } from '@mui/x-data-grid'
import Select from '@mui/material/Select'
import NotificationDropdown, {
  NotificationsType
} from 'src/@core/layouts/components/shared-components/NotificationDropdownEmployerPage'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import format from 'date-fns/format'

// ** Store & Actions Imports
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, deleteInvoice } from 'src/store/apps/invoice'
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Types Imports
import { RootState, AppDispatch } from 'src/store'

// import { ThemeColor } from 'src/@core/layouts/types'
import { InvoiceType } from 'src/types/apps/invoiceTypes'
import { DateType } from 'src/types/forms/reactDatepickerTypes'

// ** Utils Import
// import { getInitials } from 'src/@core/utils/get-initials'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

// import CustomAvatar from 'src/@core/components/mui/avatar'
import OptionsMenu from 'src/@core/components/option-menu'
import TableHeader from 'src/views/apps/invoice/list/TableHeader'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

interface CustomInputProps {
  dates: Date[]
  label: string
  end: number | Date
  start: number | Date
  setDates?: (value: Date[]) => void
}

interface CellType {
  row: InvoiceType
}

// ** Styled component for the link in the dataTable
const LinkStyled = styled(Link)(({ theme }) => ({
  fontSize: '1rem',
  textDecoration: 'none',
  color: theme.palette.text.secondary
}))

const LinkStyledMini = styled(Link)(({ theme }) => ({
  fontSize: '0.75rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const notifications: NotificationsType[] = [
  {
    meta: 'Today',
    avatarAlt: 'Flora',
    title: 'Congratulation Flora! 🎉',
    avatarImg: '/images/avatars/4.png',
    subtitle: 'Won the monthly best seller badge'
  },
  {
    meta: 'Yesterday',
    avatarColor: 'primary',
    subtitle: '5 hours ago',
    avatarText: 'Robert Austin',
    title: 'New user registered.'
  },
  {
    meta: '11 Aug',
    avatarAlt: 'message',
    title: 'New message received 👋🏻',
    avatarImg: '/images/avatars/5.png',
    subtitle: 'You have 10 unread messages'
  },
  {
    meta: '25 May',
    title: 'Paypal',
    avatarAlt: 'paypal',
    subtitle: 'Received Payment',
    avatarImg: '/images/misc/paypal.png'
  },
  {
    meta: '19 Mar',
    avatarAlt: 'order',
    title: 'Received Order 📦',
    avatarImg: '/images/avatars/3.png',
    subtitle: 'New order received from John'
  },
  {
    meta: '27 Dec',
    avatarAlt: 'chart',
    subtitle: '25 hrs ago',
    avatarImg: '/images/misc/chart.png',
    title: 'Finance report has been generated'
  }
]

const reports: NotificationsType[] = [
  {
    meta: '',
    avatarAlt: 'Flora',
    title: 'Payroll Tasks (2645)',
    avatarImg: '',
    subtitle: ''
  },
  {
    meta: '',
    avatarColor: 'primary',
    subtitle: '',
    avatarText: '',
    title: 'Director Payroll Tasks(0)'
  },
  {
    meta: '',
    avatarAlt: '',
    title: 'HMRC Tasks (24)',
    avatarImg: '',
    subtitle: ''
  },
  {
    meta: '',
    title: 'Auto Enrolment Tasks (28)',
    avatarAlt: '',
    subtitle: '',
    avatarImg: ''
  }
]

const defaultColumns = [
  {
    flex: 0.1,
    field: 'id',
    minWidth: 150,
    headerName: 'Employer ID',
    renderCell: ({ row }: CellType) => (
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <LinkStyled href={`/apps/invoice/preview/${row.id}`}>{row.id}</LinkStyled>
        <Typography variant='caption' sx={{ color: 'success.light', fontWeight: 600 }}>
          Active
        </Typography>
      </Box>
    )
  },
  {
    flex: 0.25,
    field: 'name',
    minWidth: 450,
    headerName: 'Details',
    renderCell: ({ row }: CellType) => {
      const { company, taxYear, taxMonth, processingDate, actions } = row

      return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography noWrap variant='body1' sx={{ color: 'text.secondary', fontWeight: 500 }}>
            {company}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', '& > *:not(:last-child)': { mr: 2 } }}>
            <Typography noWrap variant='caption' sx={{ color: 'text.disabled' }}>
              Tax Year: {taxYear}
            </Typography>
            <Typography noWrap variant='caption' sx={{ color: 'text.disabled' }}>
              Tax Month: {taxMonth}
            </Typography>
            <Typography noWrap variant='caption' sx={{ color: 'text.disabled' }}>
              Processing Date: {processingDate}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', '& > *:not(:last-child)': { mr: 2 } }}>
            {actions.map((act: string) => (
              <LinkStyledMini key={act} href={`/apps/invoice/preview/${row.id}`}>
                {act}
              </LinkStyledMini>
            ))}
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 150,
    field: 'total',
    headerName: 'Employees',
    renderCell: ({ row }: CellType) => (
      <Typography variant='body2' sx={{ color: 'text.secondary' }}>
        {row.total || 0}
      </Typography>
    )
  },
  {
    flex: 0.15,
    minWidth: 160,
    field: 'issuedDate',
    headerName: 'Payroll Run Date',
    renderCell: ({ row }: CellType) => (
      <Typography variant='body2' sx={{ color: 'text.secondary' }}>
        {row.processingDate}
      </Typography>
    )
  },
  {
    flex: 0.1,
    minWidth: 150,
    field: 'balance',
    headerName: 'Payroll Status',
    renderCell: ({ row }: CellType) => {
      return row.balance !== 0 ? (
        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
          {row.balance}
        </Typography>
      ) : (
        <CustomChip rounded size='small' skin='light' color='success' label='Paid' />
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 100,
    minHeight: 120,
    field: 'company',
    headerName: 'Group',
    renderCell: () => ''
  }
]

/* eslint-disable */
const CustomInput = forwardRef((props: CustomInputProps, ref) => {
  const startDate = props.start !== null ? format(props.start, 'MM/dd/yyyy') : ''
  const endDate = props.end !== null ? ` - ${format(props.end, 'MM/dd/yyyy')}` : null

  const value = `${startDate}${endDate !== null ? endDate : ''}`
  props.start === null && props.dates.length && props.setDates ? props.setDates([]) : null
  const updatedProps = { ...props }
  delete updatedProps.setDates

  return <TextField fullWidth inputRef={ref} {...updatedProps} label={props.label || ''} value={value} />
})

const InvoiceList = () => {
  // ** State
  const [dates, setDates] = useState<Date[]>([])
  const [value, setValue] = useState<string>('')
  const [pageSize, setPageSize] = useState<number>(10)
  const [statusValue, setStatusValue] = useState<string>('')
  const [endDateRange, setEndDateRange] = useState<DateType>(null)
  const [selectedRows, setSelectedRows] = useState<GridRowId[]>([])
  const [startDateRange, setStartDateRange] = useState<DateType>(null)

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const { settings } = useSettings()
  const store = useSelector((state: RootState) => state.invoice)

  useEffect(() => {
    dispatch(
      fetchData({
        dates,
        q: value,
        status: statusValue
      })
    )
  }, [dispatch, statusValue, value, dates])

  const handleFilter = (val: string) => {
    setValue(val)
  }

  const columns = [
    ...defaultColumns,
    {
      flex: 0.1,
      minWidth: 140,
      sortable: false,
      field: 'actions',
      headerName: 'Actions',
      renderCell: ({ row }: CellType) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Tooltip title='Delete Invoice'>
            <IconButton size='small' sx={{ color: 'text.secondary' }} onClick={() => dispatch(deleteInvoice(row.id))}>
              <Icon icon='tabler:trash' />
            </IconButton>
          </Tooltip>
          <Tooltip title='View'>
            <IconButton
              size='small'
              component={Link}
              sx={{ color: 'text.secondary' }}
              href={`/apps/invoice/preview/${row.id}`}
            >
              <Icon icon='tabler:eye' />
            </IconButton>
          </Tooltip>
          <OptionsMenu
            menuProps={{ sx: { '& .MuiMenuItem-root svg': { mr: 2 } } }}
            iconButtonProps={{ size: 'small', sx: { color: 'text.secondary' } }}
            options={[
              {
                text: 'Download',
                icon: <Icon icon='tabler:download' fontSize={20} />
              },
              {
                text: 'Edit',
                href: `/apps/invoice/edit/${row.id}`,
                icon: <Icon icon='tabler:edit' fontSize={20} />
              },
              {
                text: 'Duplicate',
                icon: <Icon icon='tabler:copy' fontSize={20} />
              }
            ]}
          />
        </Box>
      )
    }
  ]

  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    '& > *:not(:last-child)': { mr: 2 }
                  }}
                >
                  <Typography variant='h4' sx={{ color: 'text.secondary' }}>
                    Employers
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'center' }}>
                    <FormControl variant='standard' sx={{ m: 1, minWidth: 250 }}>
                      <InputLabel id='demo-simple-select-1'>Current Tax Year (2022-23)</InputLabel>
                      <Select
                        labelId='demo-simple-select-1'
                        size='small'
                        displayEmpty
                        defaultValue=''
                        sx={{ mr: 4, mb: 2 }}
                      >
                        <MenuItem disabled>Actions</MenuItem>
                        <MenuItem value='Delete'>Delete</MenuItem>
                        <MenuItem value='Edit'>Edit</MenuItem>
                        <MenuItem value='Send'>Send</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl variant='standard' sx={{ m: 1, minWidth: 160 }}>
                      <InputLabel id='demo-simple-select-1'>All Client Rules</InputLabel>
                      <Select
                        labelId='demo-simple-select-1'
                        size='small'
                        displayEmpty
                        defaultValue=''
                        sx={{ mr: 4, mb: 2 }}
                      >
                        <MenuItem disabled>Actions</MenuItem>
                        <MenuItem value='Delete'>Delete</MenuItem>
                        <MenuItem value='Edit'>Edit</MenuItem>
                        <MenuItem value='Send'>Send</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl variant='standard' sx={{ m: 1, minWidth: 170 }}>
                      <InputLabel id='demo-simple-select-1'>All Client Groups</InputLabel>
                      <Select
                        labelId='demo-simple-select-1'
                        size='small'
                        displayEmpty
                        defaultValue=''
                        sx={{ mr: 4, mb: 2 }}
                      >
                        <MenuItem disabled>Actions</MenuItem>
                        <MenuItem value='Delete'>Delete</MenuItem>
                        <MenuItem value='Edit'>Edit</MenuItem>
                        <MenuItem value='Send'>Send</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              }
              action={
                <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                  <NotificationDropdown settings={settings} notifications={reports} isEmail={false} />
                  <NotificationDropdown settings={settings} notifications={notifications} isEmail={true} />
                  <Button component={Link} variant='contained' href='/apps/invoice/add'>
                    Employees
                  </Button>
                  <Select
                    size='small'
                    displayEmpty
                    defaultValue=''
                    sx={{ ml: 2, '& >.MuiSelect-select.MuiSelect-outlined': { minWidth: '1.5rem !important' } }}
                    disabled={selectedRows && selectedRows.length === 0}
                    renderValue={selected => (selected.length === 0 ? 'AE' : selected)}
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
                    sx={{
                      ml: 2,
                      '& .MuiSelect-select': { minWidth: '1rem !important', display: 'flex', alignItems: 'center' }
                    }}
                    disabled={selectedRows && selectedRows.length === 0}
                    renderValue={selected =>
                      selected.length === 0 ? <Icon icon='iwwa:option' fontSize='1.5rem' /> : selected
                    }
                  >
                    <MenuItem disabled>Actions</MenuItem>
                    <MenuItem value='Delete'>Delete</MenuItem>
                    <MenuItem value='Edit'>Edit</MenuItem>
                    <MenuItem value='Send'>Send</MenuItem>
                  </Select>
                </Box>
              }
            />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <TableHeader value={value} selectedRows={selectedRows} handleFilter={handleFilter} />
            <DataGrid
              autoHeight
              pagination
              rowHeight={80}
              rows={store.data}
              columns={columns}
              checkboxSelection
              disableSelectionOnClick
              pageSize={Number(pageSize)}
              rowsPerPageOptions={[10, 25, 50]}
              onSelectionModelChange={rows => setSelectedRows(rows)}
              onPageSizeChange={newPageSize => setPageSize(newPageSize)}
            />
          </Card>
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}
/* eslint-enable */
export default InvoiceList
