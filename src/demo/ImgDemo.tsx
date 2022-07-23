import React, { useState } from "react";
import { Button, Img } from "@bbki.ng/components";
import { PHOTOS_FOR_DEMO } from "@/constants/photos";
import { ImgProps } from "@bbki.ng/components/src/img/types";
import { DemoBox } from "@/demo/DemoBox";

interface WrapperProps extends ImgProps {
  aspectRatio?:
    | "-moz-initial"
    | "inherit"
    | "initial"
    | "revert"
    | "unset"
    | "auto"
    | string;
}

const ImgWrapper = (props: WrapperProps) => {
  const { aspectRatio, ...rest } = props;
  return (
    <DemoBox>
      <Img {...rest} />
    </DemoBox>
  );
};

export const ImgDemo = () => {
  const [count, setCount] = useState(0);
  const refresh = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <ImgWrapper
        {...PHOTOS_FOR_DEMO[count % PHOTOS_FOR_DEMO.length]}
        key={count}
        aspectRatio="1"
      />
      <Button onClick={refresh} className="mx-32 my-16">
        刷新
      </Button>
    </div>
  );
};
