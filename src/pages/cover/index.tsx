import React from "react";
import {
  DisabledText,
  Link,
  ListWithTitle,
  ThreeColLayout,
} from "@/components";
import { TextColors } from "@/types/color";

export const Cover = () => {
  const question = "已满十八岁？";
  const answers = [<Link to="/ext">No</Link>, <DisabledText>Yes</DisabledText>];

  const renderer = (n: any) => n;

  const rendererQuestion = () => (
    <ListWithTitle title={question} items={answers} itemRenderer={renderer} />
  );

  return <ThreeColLayout middleRenderer={rendererQuestion} />;
};
