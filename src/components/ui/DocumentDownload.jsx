export default function DocumentDownload({ href, children }) {
  return (
    <a href={href} download>
      {children}
    </a>
  );
}
