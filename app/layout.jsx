export const metadata = {
  title: "Nero Art Shop",
  description: "Art by Nero",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
