import React, { ReactElement } from "react";

type navMainLayoutProps = {
  nav?: ReactElement;
  main: ReactElement;
  footer?: ReactElement;
};

export const NavMainLayout = (props: navMainLayoutProps) => {
  const { nav, main, footer } = props;
  return (
    <main className="flex flex-col h-full">
      <nav className="flex-grow-0 flex-shrink-0 p-6 flex items-center">
        {nav}
      </nav>
      <section className="flex-grow flex-shrink-0 px-10">{main}</section>
      {footer && (
        <footer className="flex-grow-0 flex-shrink-0 flex items-center justify-center p-6">
          {footer}
        </footer>
      )}
    </main>
  );
};
