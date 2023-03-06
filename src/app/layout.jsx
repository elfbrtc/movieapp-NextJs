import React from 'react'
import Header from '@/components/Header'
import './global.css'
import Providers from './Providers'
import Tabs from '@/components/Tabs'


const Layout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <Providers>
                <Header/>
                <Tabs/>
                {children}
            </Providers>  
        </body>
    </html>
  )
}

export default Layout