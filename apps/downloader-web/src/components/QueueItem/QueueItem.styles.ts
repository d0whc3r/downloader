import { css, styled } from '@mui/material'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

export const StyledCard = styled(Card)`
  ${({ theme }) => css`
    padding: ${theme.spacing(2)};
    display: flex;
  `}
`

export const StyledCardContainer = styled(Box)`
  display: flex;
  flex-direction: column;
`

export const StyledCardContent = styled(CardContent)`
  flex: 0 1 auto;
`

export const StyledCardControls = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacing(1)};
  `}
`
