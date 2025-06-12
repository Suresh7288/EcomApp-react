import { Outlet, Link } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div>
      <header className="bg-blue-600 text-white px-4 py-2 flex justify-between">
        <Link to="/" className="font-bold text-xl">MyShop</Link>
        <nav className="flex gap-4">
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </header>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;
