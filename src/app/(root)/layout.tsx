import "../globals.css";

// Root layout for "/" only, which just forwards visitors to /en/ or /pl/.
export default function RootRedirectLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
