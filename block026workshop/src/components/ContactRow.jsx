
import { useState } from "react";

export default function ContactRow({ setbool, contact }) { 
  const [selectedContactId, setSelectedContactId] = useState(false)
  return (
    <>
    <tr
    onClick={(() => {
      setSelectedContactId(!selectedContactId)
      setbool(contact.id)
    })}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
    {
                selectedContactId &&
                // add the contact username and website to the contacts information in the dropdown box
                <tr>
                    <td>{contact.username} </td>
                    <td>{contact.website} </td>
                </tr>

            }
        </>
    );
          }