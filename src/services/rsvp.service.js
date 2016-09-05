const CONTENTFUL_URL = 'https://api.contentful.com/spaces';
const CONTENTFUL_SPACE = 'e9rs67fo27hf';
const CONTENTFUL_KEY = 'b7c7df10d222a60e7613e6f0601a5a09390522188fbb07bb451ce9b6bf8cb785';

const FULL_CONTENTFUL_URL =
  `${CONTENTFUL_URL}/${CONTENTFUL_SPACE}/entries?access_token=${CONTENTFUL_KEY}`;

export const rsvp = (data, success, error) => {
  const req = new XMLHttpRequest();
  const payload = {
    fields: data
  };

  const handleResponse = (e) => {
    if (req.status >= 300) {
      error(JSON.parse(req.responseText));
    } else {
      success(JSON.parse(req.responseText));
    }
  };

  req.addEventListener('load', handleResponse);
  req.addEventListener('error', handleResponse);

  req.open('POST', FULL_CONTENTFUL_URL, true);
  req.send(JSON.stringify(payload));
};
