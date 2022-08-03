# Image-Processing

### _An image processing API that resizes and saves images to user specifications when visiting a URL._

<br />

# Instruction

The initial command to run project

```
npm install
```

To run prettier to format code

```
npm run prettier
```

To run linter to find bug

```
npm run lint
```

To compile code from Typscript to Javascript

```
npm run build
```

To run unit testing

```
npm run test
```

To run app

```
npm run start
```

Example Url to convert

```
http://localhost:3001/api/images?filename=Lion&&width=200&&height=200

http://localhost:3001/api/images?filename=Sunset&&width=200&&height=200
```

<br />

# Modules which used

```
"devDependencies": {
    "@types/express": "^4.17.13",
    "@types/jasmine": "^4.0.3",
    "@types/node": "^18.6.3",
    "@types/sharp": "^0.30.4",
    "@types/supertest": "^2.0.12",
    "@typescript-eslint/eslint-plugin": "^5.32.0",
    "@typescript-eslint/parser": "^5.32.0",
    "eslint": "^8.21.0",
    "nodemon": "^2.0.19",
    "prettier": "^2.7.1",
    "ts-node": "^10.9.1",
    "typescript": "^4.7.4"
  },
  "dependencies": {
    "express": "^4.18.1",
    "jasmine": "^4.3.0",
    "jasmine-spec-reporter": "^7.0.0",
    "sharp": "^0.30.7",
    "supertest": "^6.2.4"
  }
```
