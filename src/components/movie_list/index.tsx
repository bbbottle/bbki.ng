import React from "react";
import { Table, Link } from "@bbki.ng/components";

const MOVIES = [
  {
    title: "驾驶我的车",
    link: "https://movie.douban.com/subject/35235502/",
    status: "看过",
  },
];

const CELL_STYLE = {
  width: 100,
  maxWidth: 100,
};

export const MovieList = () => {
  const renderHeader = () => {
    return (
      <>
        <Table.HCell style={CELL_STYLE}>名字</Table.HCell>
        <Table.HCell style={CELL_STYLE}>状态</Table.HCell>
      </>
    );
  };

  const renderRow = (index: number) => {
    const { title, link, status } = MOVIES[index];
    return (
      <>
        <Table.Cell style={CELL_STYLE}>
          <Link to={link} external>
            {title}
          </Link>
        </Table.Cell>
        <Table.Cell style={CELL_STYLE}>{status}</Table.Cell>
      </>
    );
  };
  return (
    <Table
      rowCount={MOVIES.length}
      rowRenderer={renderRow}
      headerRenderer={renderHeader}
    />
  );
};
