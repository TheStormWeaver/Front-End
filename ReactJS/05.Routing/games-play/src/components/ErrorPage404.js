function ErrorPage404({ children }) {
  return (
    <section id="catalog-page">
      <h1>Page Not Found</h1>

      {children && <h3 className="no-articles">{children}</h3>} {/*additional info for the error if any children are given to the App.js error display */}
    </section>
  );
}

export default ErrorPage404;
