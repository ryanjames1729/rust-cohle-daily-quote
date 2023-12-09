import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rust Cohle Quote Generator',
  description: 'Built by Ryan James',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <Script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" defer></Script>
      <Script>
        {`window.OneSignalDeferred = window.OneSignalDeferred || [];
        OneSignalDeferred.push(function(OneSignal) {
          OneSignal.init({
            appId: "852be3a3-fc94-4f67-820a-3779e7a20352",
          });
        });`}
      </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
