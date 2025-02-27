import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { CircularProgress } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import SignUpLink from './sign-up-link'

const defaultTheme = createTheme()

interface ISignForm {
  handleSubmit(event: React.FormEvent<HTMLFormElement>): void
  title: string
  isSignIn?: boolean
  isLoading: boolean
}

export default function SignForm(props: ISignForm) {
  const { title, handleSubmit, isSignIn, isLoading } = props

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {isLoading ? (
            <CircularProgress sx={{ m: 1 }} />
          ) : (
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
          )}
          <Typography component="h1" variant="h5">
            {title}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="login"
              label="Логин"
              name="login"
              autoComplete="login"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              {title}
            </Button>
            <Grid container>{isSignIn && <SignUpLink />}</Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
