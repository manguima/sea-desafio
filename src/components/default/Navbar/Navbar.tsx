"use client";
import { BellIcon } from "@/src/assets/bell-icon";
import { DocIcon } from "@/src/assets/doc-icon";
import { DotsIcon } from "@/src/assets/dots-icon";
import { Button, Menu, MenuProps } from "antd";
import { useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: 0,
    icon: <BellIcon />,
  },
  {
    key: 1,
    icon: <DotsIcon />,
  },
  {
    key: 2,
    icon: <DocIcon />,
  },
  {
    key: 3,
    icon: <DocIcon />,
  },
  {
    key: 4,
    icon: <DocIcon />,
  },
  {
    key: 5,
    icon: <DocIcon />,
  },
  {
    key: 6,
    icon: <DocIcon />,
  },
];

export default () => {
  const [current, setCurrent] = useState(0);

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(Number(e.key));
  };

  return (
    <>
      <Menu
        style={{
          width: "56px",
          height: "100%",
          alignContent: "center",
          background: "var(--ant-color-primary)",
          borderRadius: "0 20px 20px 0",
        }}
        onClick={onClick}
        selectedKeys={[String(current)]}
        mode="inline"
        inlineCollapsed={true}
        items={items}
      />
    </>
  );
};
