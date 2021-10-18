import React from "react";
import {
  AlmostCenterLayout,
  DisabledText,
  Link,
  ListWithTitle,
  ThreeColLayout,
} from "@/components";

export const Cover = () => {
  const question = "已满十八岁？";
  const answers = [
    <Link to="/ext" color="red">
      YES
    </Link>,
    <DisabledText>No</DisabledText>,
  ];

  const renderer = (n: any) => n;

  const rendererQuestion = () => (
    <ListWithTitle title={question} items={answers} itemRenderer={renderer} />
  );

  return <ThreeColLayout middleRenderer={rendererQuestion} />;
};
