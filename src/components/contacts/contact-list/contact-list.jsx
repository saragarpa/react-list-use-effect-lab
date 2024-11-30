import { useState } from "react";
import ContactItem from "../contact-item/contact-item";
import { useEffect } from "react";
import contactsData from "../../../data/users.json";

function ContactList({className = "", search, selectedOptions}) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const filteredContacts = search ?
    contactsData.filter((contact) => {
      return selectedOptions.some((option) => {
        if (contact[option.name]) {
          return contact[option.name]
            .toString()
            .toLowerCase()
            .includes(search.toLowerCase());
        }
        return false;
      });
    })
    : contactsData;

    setContacts(filteredContacts);
  }, [search, selectedOptions]);

  const handleContactDeletion = (contact) => {
    setContacts(contacts.filter((c) => c.id !== contact.id));
  };

  return (
    <div className={`d-flex flex-wrap gap-3 ${className}`}>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={handleContactDeletion}
        />
      ))}
    </div>
  );
}

export default ContactList;