import "./globals.css";

export const metadata = {
  title: "Saruq",
  description: "Supply from UAE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
