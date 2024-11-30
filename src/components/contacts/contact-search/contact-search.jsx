import Multiselect from "multiselect-react-dropdown";
import contactsData from "../../../data/users.json";

function ContactSearch({
  search,
  onSearch,
  selectedOptions,
  onSelectedOptions,
}) {
  const options = Object.keys(contactsData[0]).map((key, index) => ({
    id: index + 1,
    name: key,
  }));

  const searchFilter = (e) => {
    onSearch(e.target.value);
  };

  const handleSelect = (selectedList) => {
    onSelectedOptions(selectedList);
  };

  const handleRemove = (selectedList) => {
    onSelectedOptions(selectedList);
  };

  console.log(selectedOptions)

  return (
    <div>
      <Multiselect
        options={options} // Options to display in the dropdown
        selectedValues={selectedOptions} // Preselected value to persist in dropdown
        onSelect={handleSelect} // Function will trigger on select event
        onRemove={handleRemove} // Function will trigger on remove event
        displayValue="name" // Property name to display in the dropdown options
        placeholder="Select options"
      />

      <input
        type="text"
        placeholder="Search name"
        value={search}
        onChange={searchFilter}
      />
    </div>
  );
}

export default ContactSearch;