// import React, { Component } from 'react';
import { useState } from 'react';
import useLocalStorage from '../src/hooks/useLocalStorage';

import shortid from 'shortid';

import ContactList from './components/ContactList';

import NameForm from './components/NameForm/NameForm';
import Filter from './components/Filter';
import Container from './components/Container';

import './App.css';

export default function App() {
  const [contacts, setContacts] = useLocalStorage( 'contacts',[
    { "id": "id-1", "name": "John Piters", "phone": "555-55-55" },
    { "id": "id-2", "name": "Piter Johnson", "phone": "444-44-44" },
    { "id": "id-3", "name": "Pit Ivans", "phone": "333-33-33" },
    { "id": "id-4", "name": "Ivan Piterson", "phone": "222-22-22" }
]);
  const [filter, setFilter] = useState('');

  function addContact({ name, phone }) {
    const contact = {
        id: shortid.generate(),
        name,
        phone
      }
  
    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase()) ||
    contacts.find(contact => contact.phone.toLowerCase() === phone.toLowerCase())   
      ? alert(`${name} or ${phone} is already added.`) 
      : setContacts(prevContacts =>[contact, ...prevContacts]); 
   
  };

  function deleteContact (contactId) {
       
    setContacts(() => contacts.filter(contact => contact.id !== contactId));
  };
  
    function changeFilter (event) {
    setFilter(event.currentTarget.value);
  };

  function getVisibleContacts() {
    return(contacts.filter(contact =>contact.name.toLowerCase().includes(filter.toLowerCase())));}
    
    return (
       
       <Container>
       <h1 className="title"> Phonebook </h1>
       <h2 className="subtitle">Add new contact</h2>
       <NameForm onSubmit={addContact} />
       <h2 className="subtitle">Find contact</h2>
       <Filter value={filter} onChange={changeFilter} />
       <h2 className="subtitle">Contact list</h2>
       <ContactList contacts = { getVisibleContacts() }
         onDeleteContact = {deleteContact}/>
       </Container>
    )
}

