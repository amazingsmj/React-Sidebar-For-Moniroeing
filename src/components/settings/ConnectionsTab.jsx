import React from 'react';

const ConnectionsTab = () => {
  return (
    <div className="tab-pane fade" id="account-connections">
      <div className="card-body">
        <button type="button" className="btn btn-twitter">Connecter à <strong>Twitter</strong></button>
      </div>
      <hr className="border-light m-0" />
      <div className="card-body">
        <h5 className="mb-2">
          <a href="javascript:void(0)" className="float-right text-muted text-tiny">
            <i className="ion ion-md-close"></i> Retirer
          </a>
          <i className="ion ion-logo-google text-google"></i>
          Vous êtes connecté à Google :
        </h5>
        <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="f9979498818e9c9595b994989095d79a9694">
          [email&#160;protected]
        </a>
      </div>
      <hr className="border-light m-0" />
      <div className="card-body">
        <button type="button" className="btn btn-facebook">Connecter à <strong>Facebook</strong></button>
      </div>
      <hr className="border-light m-0" />
      <div className="card-body">
        <button type="button" className="btn btn-instagram">Connecter à <strong>Instagram</strong></button>
      </div>
    </div>
  );
};

export default ConnectionsTab;
