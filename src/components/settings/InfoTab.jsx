import React from 'react';

const InfoTab = () => {
  return (
    <div className="tab-pane fade" id="account-info">
      <div className="card-body pb-2">
        <div className="form-group">
          <label className="form-label">Bio</label>
          <textarea className="form-control" rows="5">Lorem ipsum dolor sit amet...</textarea>
        </div>
        <div className="form-group">
          <label className="form-label">Date de naissance</label>
          <input type="text" className="form-control" defaultValue="May 3, 1995" />
        </div>
        <div className="form-group">
          <label className="form-label">Pays</label>
          <select className="custom-select">
            <option>USA</option>
            <option selected>Canada</option>
            <option>UK</option>
            <option>Germany</option>
            <option>France</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default InfoTab;
