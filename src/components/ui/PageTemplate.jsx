export default function PageTemplate({ title, children }) {
  return (
    <main className="page">
      <h1>{title}</h1>
      {children}
    </main>
  );
}
