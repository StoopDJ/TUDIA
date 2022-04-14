$(document).ready(function () {
  symptoms = JSON.parse(symptoms);
  var input = $("#message-text");
  var sendBtn = $("#send");
  var startOverBtn = $("#start-over");
  var dataList = $("#symptoms-list");
  var chat = $("#conversation");

  // Handler for any input on the message input field (symptoms List)
  // Code Ref: https://api.jquery.com/slideup/
  // Code Ref: https://api.jquery.com/slidedown/
  input.on("input", function () {
    var insertedValue = $(this).val();
    $("#symptoms-list").empty();

    if (insertedValue.length > 1) {
      symp = $.fn.getSuggestedSymptoms(insertedValue);
      if (symp.length === 0) {
        $(".symptoms-list-container ").slideUp();
      } else {
        for (var i = 0; i < symp.length; i++) {
          var li = document.createElement("li");
          li.textContent = symp[i];
          dataList.append(li);
        }
        $(".symptoms-list-container ").slideDown();
      }
    } else {
      $(".symptoms-list-container ").slideUp();
    }
  });

  // Code Ref: https://api.jquery.com/click/
  startOverBtn.on("click", function () {
    $.fn.startOver();
  });

  sendBtn.on("click", function () {
    $.fn.handleUserMessage();
  });

  dataList.on("click", "li", function () {
    input.val($(this).text());
    $(".symptoms-list-container ").slideUp();
  });

  // Send messages on key number 13 (Enter)
  input.on("keypress", function (e) {
    if (e.which == 13) {
      $.fn.handleUserMessage();
    }
  });

  // Scrolling
  $.fn.handleUserMessage = function () {
    if (input.val()) {
      $.fn.appendUserMessage();
      $.fn.getPredictedSymptom();
      input.val("");
      chat.animate({
        scrollTop: $("#conversation .message-body:last-child").position().top,
      });
    }
  };

  // Start over as the refresh button clicked
  // predefined text needed here
  $.fn.startOver = function () {
    $.fn.getPredictedSymptom(true);
    $("#conversation").empty();
    var text =
      "Welcome! I'm Medical Chatbot, but you can call me TUDIA. How are feeling now? any symptoms? Please entered all of your symptoms, Whenever you're finished please type '<b>Finish</b>'. More symptoms, better results";
    $("#conversation").append(
      `<div class="row message-previous"><div class="col-sm-12 previous"></div></div><div class="row message-body"><div class="col-sm-12 message-main-receiver"><div class="receiver"><div class="message-text">${text}</div></div></div></div>`
    );
    input.val("");
  };

  $.fn.appendUserMessage = function () {
    var text = input.val();
    $("#conversation").append(
      `
      <div class="row message-body">
      <div class="col-sm-12 message-main-sender">
      <div class="sender">
      <div class="message-text">${text}
      </div>
      </div>
      </div>
      </div>`
    );
  };

  $.fn.appendBotMessage = function (text) {
    $("#conversation").append(
      `<div class="row message-body">
      <div class="col-sm-12 message-main-receiver">
      <div class="receiver">
      <div class="message-text">${text}
      </div>
      </div>
      </div>
      </div>`
    );
  };

  // Retrieves prediction to show as bot message
  // Code Ref: https://stackoverflow.com/questions/22854749/flask-and-ajax-post-http-400-bad-request-error
  $.fn.getPredictedSymptom = function (again) {
    var text = input.val();
    if (again) text = "done";

    $.ajax({
      url: "http://127.0.0.1:5000/symptom",
      data: JSON.stringify({ sentence: text }),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      type: "POST",
      success: function (response) {
        console.log(response);
        if (!again) $.fn.appendBotMessage(response);
      },
      error: function () {
        console.log("Error");
      },
    });
  };

  $.fn.getSuggestedSymptoms = function (val) {
    var suggestedSymptoms = [];
    $.each(symptoms, function (i, v) {
      if (v.includes(val)) {
        suggestedSymptoms.push(v);
      }
    });
    return suggestedSymptoms.slice(0, 3);
  };
});
