export const metadata = {
  title: "day24",
  openGraph: {
    title: "blog",
  },
};
import "../style.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <div className="main">
            <section className="col note-viewer">{children}</section>
          </div>
        </div>
      </body>
    </html>
  );
}
