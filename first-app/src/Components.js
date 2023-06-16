function Component() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

//header component
function Header() {
  return (
    <header>
      <h1>First react application</h1>
    </header>
  );
}

function Main() {

    return (
        <main>
          <h2>Welcome REACT JS application</h2>
          <p>Main content is here</p>
        </main>
      );

}

function Footer() {

    return (
        <footer>
          <p>&copy; 2023 First react app</p>
        </footer>
      );

}

export default Component;
