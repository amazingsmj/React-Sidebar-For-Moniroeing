import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ChangePasswordTab from './ChangePasswordTab';
import ConnectionsTab from './ConnectionsTab';
import GeneralTab from './GeneralTab';
import InfoTab from './InfoTab';
import NotificationsTab from './NotificationsTab';
import SocialLinksTab from './SocialLinksTab';
import './style.css';

function Profile() {
  return (
    <div className="container light-style flex-grow-1 container-p-y">
      <h4 className="font-weight-bold py-3 mb-4">Paramètres du compte</h4>
      <div className="card overflow-hidden">
        <div className="row no-gutters row-bordered row-border-light">
          <div className="col-md-3 pt-0">
            <div className="list-group list-group-flush account-settings-links">
              <Link className="list-group-item list-group-item-action active" to="/">Général</Link>
              <Link className="list-group-item list-group-item-action" to="/change-password">Changer le mot de passe</Link>
              <Link className="list-group-item list-group-item-action" to="/info">Info</Link>
              <Link className="list-group-item list-group-item-action" to="/social-links">Liens sociaux</Link>
              <Link className="list-group-item list-group-item-action" to="/connections">Connexions</Link>
              <Link className="list-group-item list-group-item-action" to="/notifications">Notifications</Link>
            </div>
          </div>
          <div className="col-md-9">
            <div className="tab-content">
              <Routes>
                <Route exact path="/" element={<GeneralTab />} />
                <Route path="/change-password" element={<ChangePasswordTab />} />
                <Route path="/info" element={<InfoTab />} />
                <Route path="/social-links" element={<SocialLinksTab />} />
                <Route path="/connections" element={<ConnectionsTab />} />
                <Route path="/notifications" element={<NotificationsTab />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
      <div className="text-right mt-3">
        <button type="button" className="btn btn-primary">Sauvegarder les modifications</button>&nbsp;
        <button type="button" className="btn btn-default">Annuler</button>
      </div>
    </div>
  );
};

export default Profile;
