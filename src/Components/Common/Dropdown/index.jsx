import React, { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import './DropdownCommon.css'; // Import styles

const DropdownCommon = ({ options }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]); // Default: First option from props

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} className="custom-dropdown">
      <DropdownToggle className="dropdown-btn">
      {selectedOption}
      </DropdownToggle>
      <DropdownMenu className="animated-dropdown">
        {options.map((item, index) => (
          <DropdownItem key={index} onClick={() => handleSelect(item)}>
            {item}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownCommon;
