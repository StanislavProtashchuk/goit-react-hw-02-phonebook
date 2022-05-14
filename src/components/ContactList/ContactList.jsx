import PropTypes from 'prop-types';

const ContactList = ({ filteredContacts, deleteContact }) => {
    return (
        <ul>
        {filteredContacts.map(({ name, number, id }) => {
            return (
                <li key={id}>
                    {name}: {number}
                    <button type='button'  id={id} onClick={() => deleteContact(id)}>Delete</button>
                </li>
        )})}
        </ul>
    )
};

ContactList.propTypes = {
    filteredContacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired
}

export default ContactList;