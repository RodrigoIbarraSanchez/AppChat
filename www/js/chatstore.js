(function () {
  angular.module('SlangVoom.chatStore', ['SlangVoom.controllers', 'SlangVoom.services', ])

  .factory('ChatStore', function () {
    var chats = [
      {
        id: '1',
        titulo: 'Chat 1',
        descripcion: 'Descripcion 1'
    },
      {
        id: '2',
        titulo: 'Chat 2',
        descripcion: 'Descripcion 2'
    },
      {
        id: '3',
        titulo: 'Chat 3',
        descripcion: 'Descripcion 3'
    }
    ];
    return {
      list: function() {
        return chats;
      },
      get: function(id) {
        return chats.filter(function (chat) {
          return chat.id === id;
        })[0];
      },
      create: function(chat) {
        chats.push(chat);
      },
      update: function(chat) {
        for(var i = 0; i < chats.length; i++){
          if (chats[i].id === chat.id) {
            chats[i] = chat;
            persist();
            return;
          }
        }
      },
      remove: function(id) {
        for(var i = 0; i < chats.length; i++){
          if (chats[i].id === id) {
            chats.splice(i, 1);
            persist();
            return;
          }
        }
      }
    };
  });
}());
