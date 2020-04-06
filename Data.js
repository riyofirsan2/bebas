const myContacts = [{
        id: 1,
        name: 'Alpha Avalon',
        phone: '+1 111 101010',
        email: 'alpha@avalon.org',
        favorite: true,
        rating: 9,
        tags: ['popular', 'cool']
    }, {
        id: 2,
        name: 'Betty Brave',
        phone: '+62 812 242424',
        email: 'betty@braverian.com'
    },
    {
        id: 3,
        name: 'Gamma Gacurio',
        phone: '+63 813 363636',
        email: ' gamma@gacurio.dev'
    }
]

//create contact console with method show contact, add contact, filter contact and delete contact

//add contact
myContacts.push({id : 4, name: 'Tika', phone : '+62 877 13111988', email : 'alfathikaendarputri@gmail.com'}, 
{id : 5, name : 'Rania', phone : '+62 818 0387', email : 'riyojudi@yahoo.co.id'}, 
{id : 6, name : 'Raffa', phone : '+62 819 190387', email : 'riyojudi@gmail.com'})
console.log(myContacts);

//filter contact 
const newContact = myContacts.filter(item => item.id > 2)
console.log(newContact);
console.log(newContact.length);

/// delete contact 
myContacts.pop()
console.log(myContacts);

// Show Contact
const showContacts = contacts => {
for (let index = 0; index < contacts.length; index++){
const contact = contacts[index]
console.log((`${contact.id} ${contact.name} ${contact.phone}<${contact.email}>`));        
}
}

showContacts(myContacts)