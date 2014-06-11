
require([ "jquery", "/socket.io/socket.io.js" ], function() {

  var socket = io.connect();

  /**
   * Arduino RC button has been switched
   */
  socket.on('arduino-rcswitch', function(data) {
    $('*[data-id="' + data.id + '"]').removeClass('active');
    $('*[data-id="' + data.id + '"][data-value="' + data.value + '"]').addClass('active');
  });

  /**
   * LED status switched
   */
  socket.on('arduino-led', function(data) {
    $('*[data-id="' + data.id + '"]').removeClass('active');
    $('*[data-id="' + data.id + '"][data-value="' + data.value + '"]').addClass('active');
  });

   /**
   * ActiveLow status switched
   */
  socket.on('arduino-activelow', function(data) {
    $('*[data-id="' + data.id + '"]').removeClass('active');
    $('*[data-id="' + data.id + '"][data-value="' + data.value + '"]').addClass('active');
  });
   /**
   * Touchplate status switched
   */
  socket.on('arduino-touchplate', function(data) {
    $('*[data-id="' + data.id + '"][data-value="' + data.value + '"]').addClass('disabled');
    $('*[data-id="' + data.id + '"][data-value="' + data.value + '"]').attr('disabled','disabled');
    setTimeout(function() {
      $('*[data-id="' + data.id + '"][data-value="' + data.value + '"]').removeAttr('disabled');
      $('*[data-id="' + data.id + '"]').removeClass('disabled');
     }, 1200);
  });
  /**
   * Arduino sensor data received
   */
  socket.on('arduino-sensor', function(data) {
    $('.value[data-id="' + data.id + '"]').text(data.value);
  });

});
