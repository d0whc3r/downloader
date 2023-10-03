import { alpha, styled } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import OutlinedInput from '@mui/material/OutlinedInput'
import Toolbar, { ToolbarProps } from '@mui/material/Toolbar'

import { transientOptions } from '@web/helpers/utils'

type StyledToolbarProps = ToolbarProps & {
  $error: boolean
}
export const StyledToolbar = styled(
  Toolbar,
  transientOptions,
)<StyledToolbarProps>`
  padding: ${({ theme, $error }) => theme.spacing(3, 0, $error ? 1 : 3.5, 0)};
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(1)};
`

export const StyledOutlinedInput = styled(OutlinedInput)`
  background-color: ${({ theme }) => alpha(theme.palette.text.primary, 0.2)};

  &:hover {
    background-color: ${({ theme }) => alpha(theme.palette.text.primary, 0.1)};
  }
`

export const StyledIconButton = styled(IconButton)`
  margin-top: ${({ theme }) => theme.spacing(0.5)};
  //margin-left: ${({ theme }) => theme.spacing(3)};
`
