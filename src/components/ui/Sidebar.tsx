import Select from "../../services/Services";

const Sidebar = () => {
  return (
    <Select>
      <Select.Label>Select an option:</Select.Label>
      <Select.Dropdown>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </Select.Dropdown>
    </Select>
  );
};

export default Sidebar;