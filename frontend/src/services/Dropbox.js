import {DropboxToAgaveFormat, fetchErrorThrower, fetchToJson} from "../util/FetchUtils";

function list(filePath, csrftoken, signal){
  const url = '/dropbox/api/2/files/list_folder';
  console.log(filePath);
  let form = {
    'path': filePath
  };


  return fetch(url, {
    body: JSON.stringify(form),
    cache: 'no-cache',
    credentials: "same-origin",
    headers: {
      'content-type': 'application/json',
      'X-CSRFToken': csrftoken
    },
    method: 'POST',
    mode: 'cors',
    signal: signal
  })
  // Throw a proper error if we get a 500, etc. response code
      .then(fetchErrorThrower)

      // Convert to JSON
      .then(fetchToJson)

      // map Dropbox to Agave response format
      .then(DropboxToAgaveFormat)
}

export default {
  list: list,
  share: () => {console.log('Share')},
  wget: () => () => {console.log('wget')},
  rename: () => {console.log('rename')},
  mv: () => {console.log('mv')},
  cp: () => {console.log('cp')},
  rm: () => {console.log('rm')},
}