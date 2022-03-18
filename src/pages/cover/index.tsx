import React from "react";
import { DisabledText } from "@/components";
import { Link, LinkColor, Article } from "@bbki.ng/components";
// import { useSupabaseSession } from "@/hooks/use_supa_session";

export const Cover = () => {
  return (
    <Article title="十八歳未満？">
      <DisabledText>
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
          access the website? (
          <Link to="/ext" color={LinkColor.RED}>
            Yes
          </Link>
          /<DisabledText className="mb-8">No</DisabledText>)
        </p>
      </DisabledText>
    </Article>
  );

  // const session = useSupabaseSession();
  // const user = session?.user?.user_metadata;
  // return (
  //   <CenterPage title="Hi">
  //     <div className="flex">
  //       <div className="mr-16">
  //         <img src={user.avatar_url} style={{ height: 42 }} />
  //       </div>
  //       <div>
  //         {user.name}
  //         <br />
  //         <DisabledText>
  //           Welcome to{" "}
  //           <Link to="/ext" color={LinkColor.BLUE}>
  //             bbki.ng
  //           </Link>
  //           .
  //         </DisabledText>
  //       </div>
  //     </div>
  //   </CenterPage>
  // );
};
