# Paavo Nurminen Portfolio site

My portfolio site to showcase skills, workexperience and provide contact info for possible employers or other interested parties

## deployment

To install necessary dependencies:

```
npm install
```

To run the local environment for development
```
npm run dev
```

To build the project:
```
npm run build
```

## Localisation

Localisation for different languages is in src/localization/

Each language has its own .json for storing language dependent content

The content is served with svelte-i18n

## email service

Email service is handeled my email.js

add a VITE_KEY env var for the public key to use it and modify contact.svelte with the correct details.