import React from 'react';

export default function ContactsList({ contact, contactToDelete }) {
  return (
    <ul>
      {ContactsList.map(contact => {
        return (
          <li key={contact.id}>
            <span>{contact.name}</span>:<span>{contact.number}</span>
            <button onClick={() => contactToDelete(contact.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}
