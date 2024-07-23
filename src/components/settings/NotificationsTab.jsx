import React from 'react';

const NotificationsTab = () => {
  return (
    <div className="tab-pane fade" id="account-notifications">
      <div className="card-body pb-2">
        <h6 className="mb-4">Activité</h6>
        <div className="form-group">
          <label className="switcher">
            <input type="checkbox" className="switcher-input" checked />
            <span className="switcher-indicator">
              <span className="switcher-yes"></span>
              <span className="switcher-no"></span>
            </span>
            <span className="switcher-label">Recevoir un email lorsque quelqu'un commente mon article</span>
          </label>
        </div>
        <div className="form-group">
          <label className="switcher">
            <input type="checkbox" className="switcher-input" checked />
            <span className="switcher-indicator">
              <span className="switcher-yes"></span>
              <span className="switcher-no"></span>
            </span>
            <span className="switcher-label">Recevoir un email lorsque quelqu'un répond à mon sujet de forum</span>
          </label>
        </div>
        <div className="form-group">
          <label className="switcher">
            <input type="checkbox" className="switcher-input" />
            <span className="switcher-indicator">
              <span className="switcher-yes"></span>
              <span className="switcher-no"></span>
            </span>
            <span className="switcher-label">Recevoir un email lorsque quelqu'un me suit</span>
          </label>
        </div>
      </div>
      <hr className="border-light m-0" />
      <div className="card-body pb-2">
        <h6 className="mb-4">Application</h6>
        <div className="form-group">
          <label className="switcher">
            <input type="checkbox" className="switcher-input" checked />
            <span className="switcher-indicator">
              <span className="switcher-yes"></span>
              <span className="switcher-no"></span>
            </span>
            <span className="switcher-label">Actualités et annonces</span>
          </label>
        </div>
        <div className="form-group">
          <label className="switcher">
            <input type="checkbox" className="switcher-input" />
            <span className="switcher-indicator">
              <span className="switcher-yes"></span>
              <span className="switcher-no"></span>
            </span>
            <span className="switcher-label">Mises à jour hebdomadaires du produit</span>
          </label>
        </div>
        <div className="form-group">
          <label className="switcher">
            <input type="checkbox" className="switcher-input" checked />
            <span className="switcher-indicator">
              <span className="switcher-yes"></span>
              <span className="switcher-no"></span>
            </span>
            <span className="switcher-label">Résumé hebdomadaire du blog</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default NotificationsTab;
