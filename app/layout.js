export const metadata = {
  title: "Nero Art Shop",
  description: "Fantasy playmats and stickers by Nero",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}

