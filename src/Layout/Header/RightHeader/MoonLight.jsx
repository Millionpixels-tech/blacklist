import React from 'react';
import SvgIcon from '../../../Components/Common/Component/SvgIcon';

const MoonLight = () => {

  return (
    <li>
      <div className={`mode ${'light-only' && 'active'}`}>
        <SvgIcon iconId={'moon'} />
      </div>
    </li>
  );
};

export default MoonLight;
