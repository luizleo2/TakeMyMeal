import React from 'react'
import ReactDOM from 'react-dom/client'


import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

// import { SignIn } from '../src/pages/SignIn';
// import { SignUp } from '../src/pages/SignUp';
import { Header} from '../src/components/Header'
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />

        {/* <SignIn /> */}
        {/* <SignUp /> */}
        <Header />

      </ThemeProvider>
  </React.StrictMode>,
)
