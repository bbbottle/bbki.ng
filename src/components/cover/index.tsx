import React from "react";
import { ListWithTitle } from "../list";

export const Cover = () => {
  const question = "已满十八岁？";
  const answers = [
    <span className="underline text-red-500">YES</span>,
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
