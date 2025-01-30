import Document, { Html, Head, Main, NextScript } from 'next/document'
import { InitializeColorMode } from 'theme-ui'

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* AOS CSS (Animate On Scroll) - Add CDN Link */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
          />
        </Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />

          {/* AOS JS (Animate On Scroll) - Add CDN Script */}
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"
            defer
          ></script>
        </body>
      </Html>
    )
  }
}
