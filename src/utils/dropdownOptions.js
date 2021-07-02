import React from 'react';
import { handleSignOut } from "./handleSignOut";

export const dropdownOptions = (user) => [
  {
    key: "user",
    text: (
      <span>
        Signed in as{" "}
        <strong>
          { user.displayName }
        </strong>
      </span>
    ),
    disabled: true,
  },
  {
    key: "avatar",
    text: <span>Change Avatar</span>,
  },
  {
    key: "signout",
    text: <span onClick={handleSignOut}>Sign Out</span>,
  }
];