class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  };

  _checkingResponse(res) {
    if (res.ok) {
      return res.json();
    };

    return Promise.reject(`Ошибка: ${res.status}`);
  };

  getUserInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'GET',
      headers: this._headers,
    })
    .then(this._checkingResponse);
  };

  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, {
      method: 'GET',
      headers: this._headers,
    })
    .then(this._checkingResponse);
  };

  editUserProfile({name, about}) {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    })
    .then(this._checkingResponse);
  };

  editUserAvatar(avatar) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar,
      }),
    })
    .then(this._checkingResponse);
  };

  addNewCard(data) {
    return fetch(`${this._baseUrl}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    })
    .then(this._checkingResponse);
  };

  deleteUserCard(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(this._checkingResponse);
  };

  _addLikeCard(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers,
    })
    .then(this._checkingResponse);
  };

  _deleteLikeCard(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(this._checkingResponse);
  };

  toggleCardLike(cardId, isLiked) {
    return isLiked ? this._addLikeCard(cardId) : this._deleteLikeCard(cardId);
  };
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-63/',
  headers: {
    Authorization: '578ac007-c2ae-493c-88ff-1df9d86bdf70',
    'Content-type': 'application/json'
  }
});
