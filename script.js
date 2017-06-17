window._ = _;
$(function() {
  $('#execute').click(function() {
    var code = $('#code').val();
    var result = null;
    try {
      result = eval(code);
    }
    catch (err) {
      result = err.message;
    }
    if (!result) {
      result = 'No result';
    }
    if (typeof result === 'object') {
      try {
        result = JSON.stringify(result, null, '   '); 
      }
      catch (err) {
        result = err.message;
      }
    }
    $('#result').text(result);
  });
});