import React, { ReactElement } from "react";

type NavMainLayoutProps = {
  nav?: ReactElement;
  main: ReactElement;
};

export const NavMainLayout = (props: NavMainLayoutProps) => {
  const { nav, main } = props;
  return (
    <main className="flex flex-col h-full">
      <nav className="flex-grow-0 flex-shrink-0 border-1 border-black p-10 flex items-center">
        {nav}
      </nav>
      <section className="flex-grow flex-shrink-0 border-1 border-gray items-center justify-center flex p-10">
        {main}
      </section>
    </main>
  );
};
