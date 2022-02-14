

const BASEURL = 'https://norma.nomoreparties.space/api/';

type baseUrl = { url: string };


class Api {
  private url: string;
  private headers: { [name: string]: string };
  constructor({ url }: baseUrl) {
    this.url = url;
    this.headers = {
      'Content-Type': 'application/json'
    }
  }

  private checkResponse(res: Response) {
    if (res.ok) {
      return res.json();
    }
    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  }


  getBurgerIngredientsData() {
    return fetch(`${this.url}ingredients`, {
      method: 'GET',
      headers: this.headers
    }).then(this.checkResponse)
  }

  getOrderNumber(arrayOfId: Array<string>) {
    return fetch(`${this.url}orders`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ "ingredients": arrayOfId })
    }).then(this.checkResponse);
  }

  setPasswordReset(email: string) {
    return fetch(`${this.url}password-reset`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ "email": email })
    }).then(this.checkResponse);
  }

  setNewPassword(password: string, token: string) {
    return fetch(`${this.url}password-reset/reset`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        "password": password,
        "token": token
      })
    }).then(this.checkResponse);
  }

  createNewUser(email: string, password:string, name: string) {
    return fetch(`${this.url}auth/register`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        "email": email,
        "password": password,
        "name": name
      })
    }).then(this.checkResponse);
  }


}

export default new Api({
  url: BASEURL
})
