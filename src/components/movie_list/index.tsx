import React from "react";
import { Table, Link } from "@bbki.ng/components";

const MOVIES = [
  {
    title: "驾驶我的车",
    link: "https://movie.douban.com/subject/35235502/",
    status: "看过",
  },
];

export const MovieList = () => {
  const renderHeader = () => {
    return (
      <>
        <Table.HCell>名字</Table.HCell>
        <Table.HCell>状态</Table.HCell>
      </>
    );
  };

  const renderRow = (index: number) => {
    const { title, link, status } = MOVIES[index];
    return (
      <>
        <Table.Cell>
          <Link to={link} external>
            {title}
          </Link>
        </Table.Cell>
        <Table.Cell>{status}</Table.Cell>
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
