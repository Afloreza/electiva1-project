import React from "react";
import { Button } from "antd";
import Logo from "../../../config/assets/img/png/Logo.png";
import "./MenuTop.scss";
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined,} from "@ant-design/icons";

export const MenuTop = (props) => {
  const { menuCollapsed, setMenuCollapsed } = props;
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <Button
          type="link"
          onClick={() => setMenuCollapsed(!menuCollapsed)}
          aria-label={menuCollapsed ? "Mostrar menú": "Ocultar menú"}
          >
          {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <img className="menu-top_left_logo" src={Logo} alt="Logo"/>
      </div>
    </div>
  );
};
