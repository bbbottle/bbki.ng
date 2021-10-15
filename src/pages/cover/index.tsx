import React from "react";
import {
  AlmostCenterLayout,
  DisabledText,
  Link,
  ListWithTitle,
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

  return (
    <AlmostCenterLayout>
      <ListWithTitle title={question} items={answers} itemRenderer={renderer} />
    </AlmostCenterLayout>
  );
};
