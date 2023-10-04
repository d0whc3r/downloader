import DeleteIcon from '@mui/icons-material/Delete'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import { PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'

import {
  StyledAppBar,
  StyledToolbar,
  StyledTypography,
} from '@web/components/Footer/Footer.styles'

export function Footer() {
  return (
    <StyledAppBar position="fixed" color="primary">
      <StyledToolbar>
        <Stack direction="column" gap={2} width="100ch" justifyContent="center">
          <StatusInfo />
          <Stack
            direction="row"
            justifyContent="center"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <DownloadAndRemoveGroup />
          </Stack>
        </Stack>
      </StyledToolbar>
    </StyledAppBar>
  )
}

function ButtonGroup({ children }: PropsWithChildren) {
  return (
    <Stack direction="row" spacing={1}>
      {children}
    </Stack>
  )
}

function DownloadAndRemoveGroup() {
  const { t } = useTranslation('footer')
  return (
    <ButtonGroup>
      <Tooltip title={t('delete.button.title')}>
        <IconButton color="inherit" aria-label={t('delete.button.aria-label')}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={t('download.button.title')}>
        <Button
          variant="contained"
          startIcon={<DownloadForOfflineIcon />}
          aria-label={t('download.button.aria-label')}
        >
          {t('download.button.label')}
        </Button>
      </Tooltip>
    </ButtonGroup>
  )
}

function StatusInfo() {
  const statusText = 'lorem ipsum ...'
  return (
    <StyledTypography variant="body2" align="center">
      {statusText}
    </StyledTypography>
  )
}
