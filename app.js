#!/usr/bin/env node

const fs = require("fs");
const cheerio = require("cheerio");
const fetch = require("node-fetch");

async function main() {
    try {
      //const res  = await fetch("http://menu.dining.ucla.edu/Menus");
      //const body = await res.text();
        const body = fs.readFileSync("./example.html").toString();
        const $ = cheerio.load(body);
      
        let halls = {};
        $(".menu-block").map(function(i, el) {
            let name = $(el).find(".col-header").html();
            const activity = $(el).find(".activity-level-wrapper")
                                  .parent().text()
                                  .split("  ")[1];
      
            if (activity) {
                name = name.replace(/ at Rieber/, "");
                halls[name] = parseFloat("." + activity);
            }
        });
      
        console.log(JSON.stringify(halls, null, 2));
        return halls;
    } catch (e) {
        return {
            error: true,
            message: e.message
        };
    }
}

main();
