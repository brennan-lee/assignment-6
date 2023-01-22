// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/assignment-6/sw.js", {
    scope: "/assignment-6/",
  })
}
const getFact = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    console.log(jsonData[0].url)
    console.log(jsonData[0])
    document.getElementById("fact").innerHTML = '<img src="' + jsonData[0].url + '" alt="cat-fact" width= 25% height 20%>'

  } catch (err) {
    console.log(err)
  }
}

getFact("https://catfact.ninja/docs/api-docs.json")