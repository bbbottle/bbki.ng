import React from "react";
import { DisabledText, ThreeColLayout } from "@/components";
import { Link, LinkColor, Article } from "@bbki.ng/components";

export const Cover = () => {
  const question = "年齢認証，18 歳未満？";
  const content = (
    <DisabledText>
      <p>
        Please be advised that the website you are attempting to visit contains
        child content. Anybody above the age of 18 is prohibited from accessing
        the website, and should immediately leave from this website. The content
        of the website is created and managed under the BBKi.ng's laws.
        Depending on the countries or areas, accessing the website may be
        illegal, even in the event that you are at the age of 18 or younger.
        Accessing the website shall be done at your own judgement and risk, and
        BBKi.ng disclaims responsibility or liability in the event of your
        violation of laws by accessing the website. Do you wish to access the
        website? (
        <Link to="/ext" color={LinkColor.RED}>
          Yes
        </Link>
        /<DisabledText className="mb-8">No</DisabledText>)
      </p>
    </DisabledText>
  );

  return (
    <ThreeColLayout
      middleRenderer={() => <Article title={question}>{content}</Article>}
    />
  );
};
