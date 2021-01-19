// import { useRef } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import useLocalStorage from '../src/hooks/useLocalStorage';

// import shortid from 'shortid';

import ContactList from './components/ContactList';
import NameForm from './components/NameForm/NameForm';
import Filter from './components/Filter';
import Container from './components/Container';

import './App.css';

export default function App() {
  

  // function addContact({ name, phone }) {
  //   const contact = {
  //       id: shortid.generate(),
  //       name,
  //       phone
  //     }
  
  //   contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase()) ||
  //   contacts.find(contact => contact.phone.toLowerCase() === phone.toLowerCase())   
  //     ? alert(`${name} or ${phone} is already added.`) 
  //     : setContacts(prevContacts =>[contact, ...prevContacts]); 
   
  // };
    
    return (
       <Container>
       <h1 className="title"> Phonebook </h1>
       <h2 className="subtitle">Add new contact</h2>
       <NameForm /*onSubmit={addContact}*/ />
       <h2 className="subtitle">Find contact</h2>
       <Filter /*value={filter} onChange={changeFilter} *//>
       <h2 className="subtitle">Contact list</h2>
       <ContactList /*contacts = { getVisibleContacts() }
         onDeleteContact = {deleteContact}*//>
       </Container>
    )
}

