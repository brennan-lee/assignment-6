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
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

const getImage = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    console.log(jsonData.message)
    document.getElementById("api-image").innerHTML =
      '<img src="' + jsonData.message + '" alt="API image" class="center" >'
  } catch (err) {
    console.log(err)
  }
}

getImage("https://api.thecatapi.com/v1/images/search?format=json")