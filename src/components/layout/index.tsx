import cls from "classnames";
import React, { ReactElement } from "react";

type navMainLayoutProps = {
  nav?: ReactElement;
  main: ReactElement;
  footer?: ReactElement;
};

type centerLayoutProps = {
  children: ReactElement;
};

type lrLayoutProps = {
  leftRenderer?: () => ReactElement | null;
  rightRenderer?: () => ReactElement | null;
  approximately?: boolean;
};

type threeColLayoutProps = {
  leftRenderer?: () => ReactElement | null;
  rightRenderer?: () => ReactElement | null;
  middleRenderer?: () => ReactElement | null;
};

type tbLayoutProps = {
  topRenderer?: () => ReactElement | null;
  bottomRenderer?: () => ReactElement | null;
  approximately?: boolean;
};

export const NavMainLayout = (props: navMainLayoutProps) => {
  const { nav, main, footer } = props;
  // mix-blend-luminosity md:mix-blend-normal
  return (
    <main className="flex flex-col h-full">
      <nav className="flex-grow-0 flex-shrink-0 flex items-center sticky top-0 blur-cover z-50 h-16 p-2">
        {nav}
      </nav>
      <section className="flex-grow flex-shrink-0 px-6">{main}</section>
      {footer && (
        <footer className="flex-grow-0 flex-shrink-0 flex items-center justify-center h-16">
          {footer}
        </footer>
      )}
    </main>
  );
};

export const LeftRightLayout = (props: lrLayoutProps) => {
  const { leftRenderer, rightRenderer, approximately } = props;
  const halfCls = approximately ? "flex-almost-half" : "flex-half";
  return (
    <div className="flex w-full h-full">
      <div className={halfCls}>{leftRenderer && leftRenderer()}</div>
      <div className={halfCls}>{rightRenderer && rightRenderer()}</div>
    </div>
  );
};

export const TopBottomLayout = (props: tbLayoutProps) => {
  const { topRenderer, bottomRenderer, approximately } = props;
  const halfCls = approximately ? "flex-almost-half" : "flex-half";
  return (
    <div className="flex flex-col w-full h-full">
      <div className={halfCls}>{topRenderer && topRenderer()}</div>
      <div className={halfCls}>{bottomRenderer && bottomRenderer()}</div>
    </div>
  );
};

export const AlmostCenterLayout = (props: centerLayoutProps) => {
  return (
    <LeftRightLayout
      approximately
      rightRenderer={() => <div className="mt-64">{props.children}</div>}
    />
  );
};

export const ThreeColLayout = (props: threeColLayoutProps) => {
  const { leftRenderer, middleRenderer, rightRenderer } = props;
  const colCls = cls("max-h-full overflow-auto md:block");
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full w-full">
      <div className={cls(colCls, { hidden: !leftRenderer })}>
        {leftRenderer && leftRenderer()}
      </div>
      <div
        className={cls(colCls, "py-16", "relative", {
          hidden: !middleRenderer,
        })}
      >
        {middleRenderer && middleRenderer()}
      </div>
      <div className={cls(colCls, { hidden: !rightRenderer })}>
        {rightRenderer && rightRenderer()}
      </div>
    </div>
  );
};
