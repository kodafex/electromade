import 'styles/globals.css'

import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Article from "layouts/article"
import Header from "components/header"

const components = {
  Article,
  wrapper: ({children, ...props}) => {
    console.log(props)
    if (props.meta && props.meta.layout === 'Article') {
      return (
        <Article title={props.meta.title}>{children}</Article>
      )
    }
    return <>{children}</>
  }
}

export default function App({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <div className="sandpaper bg-plaster h-screen font-sans">
        <Header />
        <Component {...pageProps} />
      </div>
    </MDXProvider>
  )
}
