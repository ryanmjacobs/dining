#!/usr/bin/env node

const dining = require("./lib/dining");

dining.get_activity()
    .then(a => console.log(a))
    .catch(e => console.log(e));
