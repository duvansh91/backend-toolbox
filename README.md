# backend-toolbox

Backend for toolbox technical test

To run this project:

```
npm install
```

```
npm start
```

Running at `http://localhost:3000`

To use the endpoind `GET /iecho` pass the param `text` with a string.

For example:

```
GET /iecho?text=test
```

The expected response should be the inverse text with a status `200`:

```
{
  "text": "tset"
}
```

If the text was not provided the response should be an error with status `400`:

```
{
 "error": "no text"
}
```
