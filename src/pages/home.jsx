import { useState } from "react";
import ContactList from "../components/contacts/contact-list/contact-list";
import PageLayout from "../components/layouts/page-layout";
import ContactSearch from "../components/contacts/contact-search/contact-search";

function Home() {
  const [search, setSearch] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);


  return (
    <>
      <PageLayout>
        <h3> Home</h3>
        <ContactSearch 
            search={search} 
            onSearch={setSearch} 
            selectedOptions={selectedOptions} 
            onSelectedOptions={setSelectedOptions}    
        />
        <ContactList search={search} selectedOptions={selectedOptions} />
      </PageLayout>
    </>
  );
}

export default Home;
