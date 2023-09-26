import React from "react";

import { IconAnchor } from "./styles";
import useColors from "../../hooks/useColors";

const IconComponent = ({ icon }) => {
  const { secondary } = useColors();
  const IconToShow = icon?.icon;
  const nameIcon = icon?.name;
  const urlIcon = icon?.url;

  return (
    <>
      <IconAnchor
        href={urlIcon}
        target="_blank"
        rel="noreferrer"
        secondary={secondary}
      >
        <span>{nameIcon}</span>
        {IconToShow && <IconToShow />}
      </IconAnchor>
    </>
  );
};

export default IconComponent;
