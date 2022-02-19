import React from "react";
import { Table, Link } from "@bbki.ng/components";

const BOOKS = [
  {
    title: "沉默者的话语",
    link: "https://book.douban.com/subject/35588433/",
    status: "完成",
  },
  {
    title: "机器岛",
    link: "https://book.douban.com/subject/3198684/",
    status: "在读",
  },
  {
    title: "生与死",
    link: "https://book.douban.com/subject/35422223/",
    status: "在读",
  },
  {
    title: "阿勒泰的角落",
    link: "https://book.douban.com/subject/24922716/",
    status: "在读",
  },
];

const CELL_STYLE = {
  width: 100,
  maxWidth: 100,
};

export const BookList = () => {
  const renderHeader = () => {
    return (
      <>
        <Table.HCell style={CELL_STYLE}>书名</Table.HCell>
        <Table.HCell style={CELL_STYLE}>状态</Table.HCell>
      </>
    );
  };

  const renderRow = (index: number) => {
    const { title, link, status } = BOOKS[index];
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
      rowCount={BOOKS.length}
      rowRenderer={renderRow}
      headerRenderer={renderHeader}
    />
  );
};