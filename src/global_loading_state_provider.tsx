import React, {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type LoadingContext = {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

export const GlobalLoadingContext = createContext<LoadingContext>({
  isLoading: false,
  setIsLoading: () => false,
});

export const GlobalLoadingStateProvider = (props: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <GlobalLoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {props.children}
    </GlobalLoadingContext.Provider>
  );
};
