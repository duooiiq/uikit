import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <img src="https://i.ibb.co/mCQTdN4/1636341153700.png" alt="Logo" width="42" height="48" />
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
