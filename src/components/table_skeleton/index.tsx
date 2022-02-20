import { Skeleton, SkeletonColor, Table } from "@bbki.ng/components";
import React from "react";

const CELL_STYLE = {
  width: 100,
  maxWidth: 100,
};

export const TableSkeleton = (props: {
  headers?: string[];
  cellStyle?: { width: number; maxWidth: number };
}) => {
  const { headers, cellStyle = CELL_STYLE } = props;
  const [name = "名字", status = "状态"] = headers || [];
  const renderHeader = () => {
    return (
      <>
        <Table.HCell style={cellStyle}>{name}</Table.HCell>
        <Table.HCell style={cellStyle}>{status}</Table.HCell>
      </>
    );
  };

  const renderRow = () => {
    return (
      <>
        <Table.Cell style={cellStyle}>
          <Skeleton width={84} height={16} bgColor={SkeletonColor.BLUE} />
        </Table.Cell>
        <Table.Cell style={cellStyle}>
          <Skeleton width={32} height={16} bgColor={SkeletonColor.GRAY} />
        </Table.Cell>
      </>
    );
  };

  return (
    <Table rowCount={1} rowRenderer={renderRow} headerRenderer={renderHeader} />
  );
};
