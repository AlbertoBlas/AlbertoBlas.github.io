// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ionic-material', 'angular-svg-round-progressbar']);

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})




app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('intro', {
        url: '/intro',
        templateUrl: 'templates/intro_slider.html',
        controller: 'IntroCtrl'
    })
    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
    })
    .state('subscribe', {
        url: '/subscribe',
        templateUrl: 'templates/subscribe.html',
				controller: 'SubscribeCtrl'
    })
    .state('payment', {
        url: '/payment',
        templateUrl: 'templates/payment.html',
				controller: 'PaymentCtrl'
    })
    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'PanicCtrl'
    })
    .state('app.panic', {
        url: '/panic',
        views: {
            'menuContent': {
                templateUrl: 'templates/panic.html',
                controller: 'PanicCtrl'
            }
        }
    })
    .state('app.personal_info', {
        url: '/personal_info',
        views: {
            'menuContent': {
                templateUrl: 'templates/personal_info.html',
                controller: 'PersonalInfoCtrl'
            }
        }
    })
    .state('app.contingency_plan', {
        url: '/contingency_plan',
        views: {
            'menuContent': {
                templateUrl: 'templates/contingency_plan.html',
                controller: 'PersonalInfoCtrl'
            }
        }
    })
    .state('app.contingency_plan_edit', {
        url: '/contingency_plan/edit',
        views: {
            'menuContent': {
                templateUrl: 'templates/contingency_plan_edit.html',
                controller: 'ContingencyPlanCtrl'
            }
        }
    })
    .state('app.contingency_plan_survey', {
        url: '/contingency_plan_survey',
        views: {
            'menuContent': {
                templateUrl: 'templates/contingency_plan_survey.html',
                controller: 'ContingencyPlanCtrl'
            }
        }
    })
    .state('app.help_support', {
        url: '/help_support',
        views: {
            'menuContent': {
                templateUrl: 'templates/help_support.html',
                controller: 'PersonalInfoCtrl'
            }
        }
    })
    .state('app.news_feed', {
        url: '/news_feed',
        views: {
            'menuContent': {
                templateUrl: 'templates/news_feed.html',
                controller: 'NewsFeedCtrl'
            }
        }
    })
    .state('app.news_detail', {
        url: '/news_detail',
        views: {
            'menuContent': {
                templateUrl: 'templates/news_detail.html',
                controller: 'NewsFeedCtrl'
            }
        }
    })
    .state('app.notifications', {
        url: '/notifications',
        views: {
            'menuContent': {
                templateUrl: 'templates/notifications.html',
                controller: 'ListsCtrl'
            }
        }
    })
    .state('app.chat', {
        url: '/chat',
        views: {
            'menuContent': {
                templateUrl: 'templates/chat.html',
                controller: 'ChatCtrl'
            }
        }
    })
    .state('app.chat_conversation', {
        url: '/chat_conversation',
        views: {
            'menuContent': {
                templateUrl: 'templates/chat_conversation.html',
                controller: 'ChatCtrl'
            }
        }
    })
    .state('app.effective_call', {
        url: '/effective_call',
        views: {
            'menuContent': {
                templateUrl: 'templates/effective_call.html',
                controller: 'EffectiveCallCtrl'
            }
        }
    })
    .state('app.protocol', {
        url: '/protocol',
        views: {
            'menuContent': {
                templateUrl: 'templates/protocol.html',
                controller: 'ProtocolCtrl'
            }
        }
    })
    .state('app.legal_support', {
        url: '/legal_support',
        views: {
            'menuContent': {
                templateUrl: 'templates/legal_support.html',
                controller: 'LegalSupportCtrl'
            }
        }
    })
    .state('app.nolimit_calls', {
        url: '/nolimit_calls',
        views: {
            'menuContent': {
                templateUrl: 'templates/nolimit_calls.html',
                controller: 'NoLimitCallsCtrl'
            }
        }
    })
    .state('app.lawyers_network', {
        url: '/lawyers_network',
        views: {
            'menuContent': {
                templateUrl: 'templates/lawyers_network.html',
                controller: 'LawyersNetworkCtrl'
            }
        }
    })

    .state('app.lists', {
        url: '/lists',
        views: {
            'menuContent': {
                templateUrl: 'templates/lists.html',
                controller: 'ListsCtrl'
            }
        }
    })

    .state('app.ink', {
        url: '/ink',
        views: {
            'menuContent': {
                templateUrl: 'templates/ink.html',
                controller: 'InkCtrl'
            }
        }
    })

    .state('app.motion', {
        url: '/motion',
        views: {
            'menuContent': {
                templateUrl: 'templates/motion.html',
                controller: 'MotionCtrl'
            }
        }
    })

    .state('app.components', {
        url: '/components',
        views: {
            'menuContent': {
                templateUrl: 'templates/components.html',
                controller: 'ComponentsCtrl'
            }
        }
    })

    .state('app.extensions', {
        url: '/extensions',
        views: {
            'menuContent': {
                templateUrl: 'templates/extensions.html',
                controller: 'ExtensionsCtrl'
            }
        }
    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/intro');
});
