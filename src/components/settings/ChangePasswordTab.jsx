import React from 'react';

const ChangePasswordTab = () => {
  return (
    <div className="tab-pane fade" id="account-change-password">
      <div className="card-body pb-2">
        <div className="form-group">
          <label className="form-label">Mot de passe actuel</label>
          <input type="password" className="form-control" />
        </div>
        <div className="form-group">
          <label className="form-label">Nouveau mot de passe</label>
          <input type="password" className="form-control" />
        </div>
        <div className="form-group">
          <label className="form-label">Répéter le nouveau mot de passe</label>
          <input type="password" className="form-control" />
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordTab;
