angular.module('messageModule', []);

angular.module('messageModule')
.service('messageService', function($interval) {
  this.messages = [
    'Hi Flora',
    'Hello James',
    'Hey Jason'
  ];
  this.removeLastMessage = function() {
    this.messages.pop();
  };
  this.count = 0;
  this.addMessage = function() {
    this.count += 1;
    this.messages.push('RandomMessage ' + this.count);
  };
});
/////////////////
angular.module('myApp', ['messageModule']);

angular.module('myApp')
.controller ('greeterCtrl', function(messageService) {
  this.messages = messageService.messages;

  this.addMessage = function() {
    messageService.addMessage();
  };
});

angular.module('myApp')
.controller ('anotherCtrl', function(messageService) {
  this.messages = messageService.messages;

  this.removeLast = function() {
    messageService.removeLastMessage();
  };
});
