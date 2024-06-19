import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex flex-col min-h-screen gap-2 p-2">
        <nav className="flex h-10 overflow-x-auto">
          <Link to="/" className="[&.active]:font-bold flex-1">
            Home
          </Link>{" "}
          <Link to="/about" className="[&.active]:font-bold flex-1">
            About
          </Link>
          <Link to="/auth/login" className="[&.active]:font-bold flex-1">
            Login
          </Link>
          <Link to="/review" className="[&.active]:font-bold flex-1">
            Review
          </Link>
          <Link to="/reducer" className="[&.active]:font-bold flex-1">
            Reducer
          </Link>
          <Link to="/context" className="[&.active]:font-bold flex-1">
            Context
          </Link>
        </nav>

        <hr />
        <main className="flex flex-1">
          <Outlet />
        </main>
      </div>

      <TanStackRouterDevtools />
    </>
  ),
});
