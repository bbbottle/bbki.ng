import React from "react";
import { DisabledText } from "@/components";
import { Link, LinkColor, Article } from "@bbki.ng/components";

export const Cover = (props: { className: string }) => {
  return (
    <Article title="十八歳未満？" className={props.className}>
      <DisabledText>
        <p>
          请注意，您尝试访问的网站包含儿童内容。 任何年满 18
          岁的人士均不得访问本网站，并应立即离开。本网站的内容是根据 BBKi.ng
          的法律创建和管理的。根据国家或地区的不同，即使您未满 18
          岁，访问该网站也可能是非法的。访问本网站应由您自行判断并承担风险，对于您访问本网站的违法行为，BBKi.ng
          不承担任何责任或义务。您想访问该网站吗？
          <Link to="/projects" color={LinkColor.RED} style={{ padding: 4 }}>
            是
          </Link>
        </p>
        <br />
        <p>
          Please be advised that the website you are attempting to visit
          contains child content. Anybody above the age of 18 is prohibited from
          accessing the website, and should immediately leave from this website.
          The content of the website is created and managed under the BBKi.ng's
          laws. Depending on the countries or areas, accessing the website may
          be illegal, even in the event that you are at the age of 18 or
          younger. Accessing the website shall be done at your own judgement and
          risk, and BBKi.ng disclaims responsibility or liability in the event
          of your violation of laws by accessing the website. Do you wish to
          access the website?&nbsp;
          <Link to="/projects" color={LinkColor.RED} style={{ padding: 4 }}>
            Yes
          </Link>
        </p>
      </DisabledText>
    </Article>
  );
};
