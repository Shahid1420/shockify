import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="overflow-hidden text-gray-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="min-h-screen mx-auto grid items-center max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg text-white">{children}</div>
          </div>
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <img
                alt="Placeholder Image"
                src="https://placehold.co/600x400/FFF/000?text=Placeholder"
                className="mx-auto rounded-xl shadow-xl ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Layout;
