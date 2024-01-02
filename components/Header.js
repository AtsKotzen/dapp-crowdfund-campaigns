import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

export default () => {
  return (
    <Menu style={{ marginTop: 10 }}>
      <Link route="/">
        <a className="item">
          GreenPill Brasil
        </a>
      </Link>

      <Menu.Menu position="right">
      <Link route="/">
        <a className="item">
          Projetos
        </a>
      </Link>

      <Link route="/campaigns/new">
        <a className="item">
          +
        </a>
      </Link>
      </Menu.Menu>
    </Menu>
  );
};
