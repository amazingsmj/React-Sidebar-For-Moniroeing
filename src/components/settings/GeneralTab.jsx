import React from 'react';

const GeneralTab = () => {
  return (
    <div className="tab-pane fade active show" id="account-general">
      <div className="card-body media align-items-center">
        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="d-block ui-w-80" />
        <div className="media-body ml-4">
          <label className="btn btn-outline-primary">
            Télécharger une nouvelle photo
            <input type="file" className="account-settings-fileinput" />
          </label> &nbsp;
          <button type="button" className="btn btn-default md-btn-flat">Réinitialiser</button>
          <div className="text-light small mt-1">Formats JPG, GIF ou PNG autorisés. Taille max de 800K</div>
        </div>
      </div>
      <hr className="border-light m-0" />
      <div className="card-body">
        <div className="form-group">
          <label className="form-label">Nom d'utilisateur</label>
          <input type="text" className="form-control mb-1" defaultValue="nmaxwell" />
        </div>
        <div className="form-group">
          <label className="form-label">Nom</label>
          <input type="text" className="form-control" defaultValue="Nelle Maxwell" />
        </div>
        <div className="form-group">
          <label className="form-label">E-mail</label>
          <input type="text" className="form-control mb-1" defaultValue="nmaxwell@mail.com" />
          <div className="alert alert-warning mt-3">
            Votre e-mail n'est pas confirmé. Veuillez vérifier votre boîte de réception.<br />
            <a href="javascript:void(0)">Renvoyer la confirmation</a>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Société</label>
          <input type="text" className="form-control" defaultValue="Company Ltd." />
        </div>
      </div>
    </div>
  );
};

export default GeneralTab;
