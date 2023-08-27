import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex justify-between items-center text-slate-400 text-sm p-8">
      <p>2023 © Arong</p>
      <p>
        Design & Develop by <Link to="https://sakibb.com">Sakib</Link>
      </p>
    </footer>
  );
}

export default Footer;
