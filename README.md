# HAr LOgger
[![Build Status](https://travis-ci.org/beenanner/halo.svg?branch=master)](https://travis-ci.org/beenanner/halo) [![Coverage Status](https://coveralls.io/repos/github/beenanner/halo/badge.svg?branch=master)](https://coveralls.io/github/beenanner/halo?branch=master) [![Dependency Status](https://david-dm.org/beenanner/halo.svg)](https://david-dm.org/beenanner/halo)

Running locally
===============
- npm install
- npm start
- navigate to http://localhost:3000/

Running with Docker
===================
- docker run -d -v $(pwd):/app/har/ -p 3000:3000 --name halo beenanner/halo
