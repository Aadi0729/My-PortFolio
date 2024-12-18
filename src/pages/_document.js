import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <script id='theme-switcher' strategy='beforeInteractive'>
          {`
          document.documentElement.classList.toggle('dark',
          localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))
          `}
        </script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
