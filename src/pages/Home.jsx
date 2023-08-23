import Sidebar from "../components/partials/sidebar/Sidebar";

function Home({ fullMenu, setFullMenu }) {
  return (
    <div className="App">
      <Sidebar fullMenu={fullMenu} setFullMenu={setFullMenu} />
      <main className=" w-full">
        <button className="float-left" onClick={() => setFullMenu(!fullMenu)}>
          Click me
        </button>
      </main>
    </div>
  );
}

export default Home;
