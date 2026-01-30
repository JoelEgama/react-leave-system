const API = "http://localhost/backend/";

export function apiLogin(data) {
  return fetch(API + "login.php", {
    method: "POST",
    body: JSON.stringify(data)
  }).then(r => r.json());
}

export function apiGetRequests() {
  return fetch(API + "getRequests.php").then(r => r.json());
}

export function apiSendRequest(data) {
  return fetch(API + "sendRequest.php", {
    method: "POST",
    body: JSON.stringify(data)
  }).then(r => r.json());
}

export function apiUpdateStatus(data) {
  return fetch(API + "updateStatus.php", {
    method: "POST",
    body: JSON.stringify(data)
  }).then(r => r.json());
}
