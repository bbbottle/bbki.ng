import * as React from "react";
import classnames from "classnames";

export const generateRandomBoolean = (): boolean => Math.random() < 0.5;

const generateRandomColNum = (total: number): number[] => {
  const colNumArr = [];
  let colSum = 0;
  while (colSum < total) {
    const num = generateRandomBoolean() ? 1 : 2;
    colNumArr.push(num);
    colSum += num;
  }
  return colNumArr;
};

export interface RandomRowsLayoutProps {
  classNames?: string;
  cellsCount: number;
  cellRenderer: (
    index: number,
    randomBool: boolean,
    col: number
  ) => React.ReactNode;
}

export const RandomRowsLayout = (props: RandomRowsLayoutProps) => {
  const { cellsCount, cellRenderer, classNames = "" } = props;
  const colNums = generateRandomColNum(cellsCount);

  const indexRef = React.useRef(0);
  React.useEffect(() => {
    indexRef.current = 0;
  });

  return (
    <div className={classNames}>
      {colNums.map((colNum, row) => {
        const randBool = generateRandomBoolean();
        const randBoolArr = [randBool, !randBool];
        return (
          <div className="flex items-center flex-wrap" key={row}>
            {new Array(colNum).fill(null).map((_, col) => {
              indexRef.current += 1;
              const isSingleCell = colNum === 1;
              const isCenterSingleCell = generateRandomBoolean();
              const singleCellWidth = isCenterSingleCell ? "full" : "1/2";
              const cellWidth = isSingleCell ? singleCellWidth : "1/2";

              const cls = classnames(
                "flex items-center justify-center flex-shrink-0 flex-grow-0",
                `md:basis-${cellWidth}`,
                "basis-full"
              );
              return (
                <div className={cls} key={col}>
                  {cellRenderer(indexRef.current - 1, randBoolArr[col], col)}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
