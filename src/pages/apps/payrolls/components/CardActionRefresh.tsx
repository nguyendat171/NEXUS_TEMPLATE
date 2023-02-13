// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Backdrop from '@mui/material/Backdrop'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CircularProgress from '@mui/material/CircularProgress'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

interface Props {
  title: string
  subTitle: string
  icon: string
}

const CardActionRefresh = (props: Props) => {
  // ** State
  const [reload, setReload] = useState<boolean>(false)

  const { title, subTitle, icon } = props

  const handleBackDrop = () => {
    setReload(true)

    setTimeout(() => {
      setReload(false)
    }, 2000)
  }

  return (
    <Card sx={{ position: 'relative' }}>
      <CardHeader
        title={
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h4'>{title}</Typography>
            <Typography variant='body1'>{subTitle}</Typography>
          </Box>
        }
        action={
          <IconButton
            size='small'
            aria-label='collapse'
            sx={{ color: 'text.secondary' }}
            onClick={() => handleBackDrop()}
          >
            <Box
              sx={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: '5px solid #ccc',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Icon icon={icon} fontSize='2rem' />
            </Box>
          </IconButton>
        }
        sx={{ padding: '1rem' }}
      />
      <CardContent sx={{ padding: '1rem' }}>
        <Box sx={{ borderTop: '1px solid #ccc', pt: '0.5rem' }}>
          <Typography variant='body2'>
            Click here to enter the payroll rates, units and other manually calculated payroll figures.
          </Typography>
        </Box>
      </CardContent>

      <Backdrop
        open={reload}
        sx={{
          position: 'absolute',
          color: 'common.white',
          zIndex: theme => theme.zIndex.mobileStepper - 1
        }}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
    </Card>
  )
}

export default CardActionRefresh
