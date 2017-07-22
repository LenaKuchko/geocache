# Geocache

by Lena Kuchko

## Installation
1. Download or clone the repository from https://github.com/LenaKuchko/geocache
2. Using terminal, navigate to the directory in which you downloaded project.
3. In terminal run  $ npm install.
4. Please sign up using your gmail account to get a Google Geocoding API key.
5. In the src/app folder, create a file api-keys.ts and put this code into it.
  `export const googleApiKey = "{{YOUR_API_KEY}}";`
6. Run `ng serve` for a dev server. Navigate to http://localhost:4200/ in a web browser to view the project.


## Specifications
|Behavior| Input |Output|
|---|:---|:---|
|User is able to get address by inputting latitude and longitude  | 49.6020232, 34.4870276 |Talalikhina Ln, 3-4, Poltava, Poltavs'ka oblast, Ukraine |
|User is able to get latitude and longitude coordinates by inputting an address  | Poltava, Poltavs'ka oblast, Ukraine |49.58826699999999, 34.551417|


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Technologies Used

* Angular 2
* Bootstrap
* CSS
* HTML
* Javascript
* Typescript

## Known bugs
Tags "Further" and "Exploration" do not work

### License
This software is licensed under the MIT license.

Copyright (c) 2017 **Lena Kuchko**
