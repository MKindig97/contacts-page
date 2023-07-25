import { useEffect, useState } from "react"; 

export default function SelectedContact({ SelectedContactId, setSelecetedContactId }) { 
  const [contact, setContact] = useState()
  useEffect(()=>{ async function fetchContacts() {
    try {
      const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${SelectedContactId}`);
      const result = await response.json();
      setContact(result);
    } catch (error) {
      console.error(error);
    }
  }
  fetchContacts();
}, []);
return ( 
 
  <>
    <button onClick ={(() => {
      setSelecetedContactId(undefined)

    })} >Back</button>

  </>
); 
}
