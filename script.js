'use strict';

function getHandle(input) {
  fetch(`https://api.github.com/users/${input}/repos`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('GitHub Handle Not Found.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  responseJson.forEach(responseJson => 
  $('.display').append(
    `<p>Repo Name:   ${responseJson.name}   </p> Link:  <a href= "${responseJson.html_url}">Repo Link</a>  </p>`
  ))
}


function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let input = $(".text").val();
    getHandle(input);
     $('.display').empty()
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});