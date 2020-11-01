const contactform = document.querySelector('.add-contact form');
const addContactModal = document.querySelector('#add_contact_modal');
contactform.addEventListener('submit', e => {
    e.preventDefault();
    const contact = {
        name: contactform.name.value,
        phone: contactform.phone.value,
        favorite: false
    }
    db.collection('contacts').add(contact).then(() => {
        contactform.reset();
        var instance = M.Modal.getInstance(addContactModal);
        instance.close();
        contactform.querySelector('.error').textContent = '';

    }).catch(err => {
        contactform.querySelector('.error').textContent = err.message;
    })
})