angular.module('SlangVoom.controllers', [])

.controller('loginCtrl', ['$scope', function ($scope) {

}])

.controller('mainCtrl', ['$scope', function ($scope) {

}])

.controller('smsCodeCtrl', ['$scope', '$state', function ($scope, $state) {
    $scope.send = function (code) {
        $state.go('main.chatList');
    }
}])

.controller('chatListCtrl', ['$scope', 'ChatStore', function ($scope, ChatStore) {
    $scope.chats = ChatStore.list();
    $scope.remove = function (id) {
        ChatStore.remove(id);
    };
}])

.controller('chatAreaCtrl', ['$scope', '$state', 'ChatStore', function ($scope, $state, ChatStore) {
        $scope.atras = function (chatlist) {
            $state.go('main.chatList');
        }
        $scope.id = $state.params.id;
}])
    .controller('groupsCtrl', ['$scope', function ($scope) {

}])
    .controller('contactsCtrl', ['$scope', function ($scope) {

}])
    .controller('settingsCtrl', ['$scope', function ($scope) {

}])

.controller('createCtrl', function($scope, $state, ChatStore){
    $scope.chat = {id: new Date().getTime().toString(), titulo:'', descripcion:''};
    $scope.save = function(){
        ChatStore.create($scope.chat);
        $state.go('chatList');
    };
})
