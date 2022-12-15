import React from "react";
import { Badge as CardBadge } from "antd";
import { getStatusColor } from "../constants";
import { IGetStatusColor } from "../type";

const { Ribbon } = CardBadge;

interface IBadgeProps {
    status: string;
    children: React.ReactNode
}

const Badge: React.FC<IBadgeProps> = ({ status, children }) => {
  return (
    <Ribbon
      text={status}
      color={getStatusColor[status as keyof IGetStatusColor]}
    >
      {children}
    </Ribbon>
  );
};

export default Badge;
