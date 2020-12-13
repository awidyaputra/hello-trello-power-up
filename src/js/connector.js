console.log("Hello World!");

window.TrelloPowerUp.initialize({
  'card-badges': function (t, opts) {
    // return an array of card badges for the given card
    return t.card()
      .then(function (card) {
        return fetch('https://hidden-dawn-50339.herokuapp.com/echo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            foo: 'bar'
          })
        })
          .then(function (response) {
            return response.json()
          })
          .then(function (backendData) {
            return [
              {
                text: backendData.foo
              }
            ]
          })
      })
  }
})