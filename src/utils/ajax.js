import { ajax } from "rxjs/ajax";

const defaultHeaders = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

const headers = Object.assign({}, defaultHeaders);

export const get = (url) =>
  ajax({
    url,
    method: "GET",
    headers,
  });

export const put = (url, body) =>
  ajax({
    url,
    method: "PUT",
    headers,
    body,
  });

export const post = (url, body) =>
  ajax({
    url,
    method: "POST",
    headers,
    body,
  });

export const remove = (url, body) =>
    ajax({
        url,
        method: "DELETE",
        headers,
        body,
    });
