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
    console.log(jsonData)
    document.getElementById("fact").innerHTML = jsonData.facts
  } catch (err) {
    console.log(err)
  }
}

getImage("https://catfact.ninja/docs/api-docs.json")