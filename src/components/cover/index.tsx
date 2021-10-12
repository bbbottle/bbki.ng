import React from "react";
import { Link } from "react-router-dom";
import { ListWithTitle } from "../list";

export const Cover = () => {
  const question = "已满十八岁？";
  const answers = [
    <Link to="/ext">
      <span className="underline text-red-500">YES</span>
    </Link>,
    <span className="text-gray-200">NO</span>,
  ];

  const renderer = (n: any) => n;

  return (
    <ListWithTitle
      title={question}
      items={answers}
      itemRenderer={renderer}
      className="relative -top-24"
    />
  );
};
