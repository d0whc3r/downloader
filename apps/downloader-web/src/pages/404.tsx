import { styled } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { useNavigate } from '@web/router'

const BoxContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <BoxContainer>
      <Typography variant="h1">404</Typography>
      <Typography variant="h6">
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button variant="contained" onClick={() => navigate('/')}>
        Back Home
      </Button>
    </BoxContainer>
  )
}
