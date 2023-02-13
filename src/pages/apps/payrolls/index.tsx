// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'

// ** Demo Components Imports
import Table from 'src/views/apps/roles/Table'
import RoleCards from 'src/views/apps/roles/RoleCards'
import Icon from 'src/@core/components/icon'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import NotificationDropdown, {
  NotificationsType
} from 'src/@core/layouts/components/shared-components/NotificationDropdownEmployerPage'

import CardActionRefresh from 'src/pages/apps/payrolls/components/CardActionRefresh'

import { useSettings } from 'src/@core/hooks/useSettings'

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

const RolesComponent = () => {
  const { settings, saveSettings } = useSettings()
  return (
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
                <Box sx={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'center' }}>
                  <Typography variant='h4' sx={{ mr: 4, color: 'text.secondary' }}>
                    Payroll Processing Alerts:
                  </Typography>
                  <Typography variant='h4' sx={{ mr: 2, color: 'orange' }}>
                    2628
                  </Typography>
                  <Icon icon='uil:redo' fontSize='2rem' />
                </Box>
              </Box>
            }
            action={
              <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                <NotificationDropdown settings={settings} notifications={notifications} isEmail={false} />
                <Button variant='contained'>Close</Button>
              </Box>
            }
          />
        </Card>
      </Grid>
      <PageHeader title={<Typography variant='h5'>Payroll Inputs</Typography>} />
      <Grid item xs={3}>
        <CardActionRefresh title='5' subTitle='Payroll Inputs' icon='system-uicons:document-list' />
      </Grid>
      <Grid item xs={3}>
        <CardActionRefresh title='1' subTitle='Payroll Run' icon='heroicons:clipboard-document-check' />
      </Grid>
      <PageHeader
        title={
          <Box sx={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'center' }}>
            <Typography variant='h5' sx={{ mr: 2 }}>
              Request Approval
            </Typography>
            <Typography variant='body2'>
              (Applicable only to companies where the 'Client Authorisation' is enabled. The payments will only be
              processed after the client has been approves the payroll report.)
            </Typography>
          </Box>
        }
      />
      <Grid item xs={3}>
        <CardActionRefresh title='0' subTitle='Request Approval' icon='material-symbols:fact-check-outline' />
      </Grid>
      <Grid item xs={3}>
        <CardActionRefresh title='0' subTitle='Awaiting Approval' icon='mdi:user-convert' />
      </Grid>
      <Grid item xs={3}>
        <CardActionRefresh title='0' subTitle='Client Rejection' icon='material-symbols:close' />
      </Grid>
      <PageHeader title={<Typography variant='h5'>Payment</Typography>} />
      <Grid item xs={3}>
        <CardActionRefresh title='0' subTitle='Salary Payment' icon='ph:bank-bold' />
      </Grid>
      <Grid item xs={3}>
        <CardActionRefresh title='0' subTitle='Confirm Payment' icon='fa6-solid:check-double' />
      </Grid>
      <PageHeader title={<Typography variant='h5'>Email</Typography>} />
      <Grid item xs={3}>
        <CardActionRefresh title='4' subTitle='Email Payslips' icon='mdi:email-open-outline' />
      </Grid>
      <Grid item xs={3}>
        <CardActionRefresh title='0' subTitle='Email Reports' icon='mdi:email-multiple-outline' />
      </Grid>
      <Grid item xs={3}>
        <CardActionRefresh title='2621' subTitle='Email Queue' icon='mdi:warning-circle' />
      </Grid>
      <PageHeader title={<Typography variant='h5'>HMRC & Pension Submission</Typography>} />
      <Grid item xs={3}>
        <CardActionRefresh title='6' subTitle='FPS Submission' icon='material-symbols:check-circle-outline' />
      </Grid>
      <Grid item xs={3}>
        <CardActionRefresh title='7' subTitle='Close Period' icon='material-symbols:send' />
      </Grid>
      <PageHeader title={<Typography variant='h5'>End Of Year</Typography>} />
      <Grid item xs={3}>
        <CardActionRefresh title='0' subTitle='Close Year' icon='material-symbols:calendar-month' />
      </Grid>
      {/* <Grid item xs={12}>
        <Table />
      </Grid> */}
    </Grid>
  )
}

export default RolesComponent
