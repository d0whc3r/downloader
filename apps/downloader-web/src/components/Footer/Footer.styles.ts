import { alpha, css, styled } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export const StyledAppBar = styled(AppBar)`
  top: auto;
  bottom: 0;
`

export const StyledToolbar = styled(Toolbar)`
  padding: ${({ theme }) => theme.spacing(2)};
  justify-content: center;
`

export const StyledTypography = styled(Typography)`
  ${({ theme }) => css`
    padding: ${theme.spacing(1)};
    background-color: ${alpha(theme.palette.text.primary, 0.2)};
    width: 100%;
    border-radius: 5px;
  `}
`
