import "./globals.css"

export const metadata = {
  title: "Icaro Boaventura",
  description: "Icaro's Portfolio",
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  )
}

export default RootLayout
