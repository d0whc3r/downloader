import { Modals } from '@generouted/react-router'
import { css, styled } from '@mui/material'
import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'

import { Footer } from '@web/components/Footer/Footer'
import { Header } from '@web/components/Header/Header'

const StyledContainer = styled(Container)`
  ${({ theme }) => css`
    padding: ${theme.spacing(16, 3, 11, 3)};
  `}
`

export default function AppLayout() {
  return (
    <>
      {/*<Header />*/}
      <StyledContainer maxWidth="md">
        <Outlet />
      </StyledContainer>
      {/*<Footer />*/}
      <Modals />
    </>
  )
}
