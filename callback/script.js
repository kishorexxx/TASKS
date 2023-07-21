const script = (function () {
    function displayMessage(message) {
      const messageDisplay = document.getElementById('messageDisplay');
      messageDisplay.innerHTML = message;
    }
  
    function countdownFrom(number, callback) {
      if (number >= 1) {
        displayMessage(number);
        setTimeout(function () {
          countdownFrom(number - 1, callback);
        }, 1000);
      } else {
        callback();
      }
    }
  
    function startCountdown() {
      countdownFrom(10, function () {
        displayMessage('Happy Independence Day!');
      });
    }
  
    return {
      startCountdown: startCountdown,
    };
  })();
  