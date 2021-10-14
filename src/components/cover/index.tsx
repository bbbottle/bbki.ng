import React from "react";
import { Link } from "../link";
import { ListWithTitle } from "../list";
import { DisabledText } from "../disabled_text";

export const Cover = () => {
  const question = "已满十八岁？";
  const answers = [
    <Link to="/ext" color="red">
      YES
    </Link>,
    <DisabledText>No</DisabledText>,
  ];

  const renderer = (n: any) => n;

  return (
    <ListWithTitle title={question} items={answers} itemRenderer={renderer} />
  );
};
