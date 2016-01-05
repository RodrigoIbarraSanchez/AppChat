angular.module('SlangVoom', ['ionic', 'SlangVoom.controllers', 'SlangVoom.services', 'SlangVoom.chatStore' ])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})


.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login/login.html',
            controller: 'loginCtrl'
        })
        .state('smsCode', {
            url: '/smsCode',
            templateUrl: 'templates/login/smsCode.html',
            controller: 'smsCodeCtrl'
        })
        .state('main', {
            url: '/main',
            abstract: true,
            templateUrl: 'templates/main/main.html',
            controller: 'mainCtrl'
        })


    .state('main.chatList', {
        url: '/chatList',
        views: {
            'main-chatList': {
                templateUrl: 'templates/main/tab-chatList.html',
                controller: 'chatListCtrl'
            }
        }
    })

    .state('chatArea', {
        url: '/chatArea/:id',
        templateUrl: 'templates/main/chatArea.html',
        controller: 'chatAreaCtrl'
    })

    .state('create', {
        url: '/create',
        templateUrl: 'templates/main/chatArea.html',
        controller: 'chatAreaCtrl'
    })

    .state('main.groups', {
        url: '/groups',
        views: {
            'main-chatList': {
                templateUrl: 'templates/main/tab-groups.html',
                controller: 'groupsCtrl'
            }
        }
    })

    //    .state('main.chatArea', {
    //        url: '/chatArea',
    //        views: {
    //            'main-chatList': {
    //                templateUrl: 'main/chatArea.html',
    //                controller: ''
    //            }
    //        }
    //    })

    .state('main.contacts', {
        url: '/contacts',
        views: {
            'main-contacts': {
                templateUrl: 'templates/main/tab-contacts.html',
                controller: 'contactsCtrl'
            }
        }
    })

    //    .state('main.chatArea', {
    //        url: '/chatArea',
    //        views: {
    //            'main-chatList': {
    //                templateUrl: 'main/chatArea.html',
    //                controller: ''
    //            }
    //        }
    //    })

    .state('main.settings', {
        url: '/settings',
        views: {
            'main-contacts': {
                templateUrl: 'templates/main/tab-settings.html',
                controller: 'settignsCtrl'
            }
        }
    })



    $urlRouterProvider.otherwise('/login')
})
