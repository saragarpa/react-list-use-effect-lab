function ContactItem({ contact, onDelete }) {
 

    return (
      <div className="card mb-3" style={{maxWidth: 540}} >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={contact.avatar}
              className="img-fluid rounded-start"
              alt="avatar"
              
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{contact.name}</h5>
              <p className="card-text">
                <i className="fa fa-trash" onClick={() => onDelete(contact)} />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ContactItem;