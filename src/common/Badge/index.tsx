import React from "react";
import { Badge as CardBadge } from "antd";
import { getStatusColor } from "../constants";
import { IGetStatusColor } from "../type";

interface IBadgeProps {
    status: string;
    children: React.ReactNode
}

const Badge: React.FC<IBadgeProps> = ({ status, children }) => {
  return (
    <CardBadge.Ribbon
      text={status}
      color={getStatusColor[status as keyof IGetStatusColor]}
    >
      {children}
    </CardBadge.Ribbon>
  );
};

export default Badge;
