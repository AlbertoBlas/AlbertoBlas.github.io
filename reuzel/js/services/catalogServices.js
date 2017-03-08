angular.module('starter')
  .service('catalogServices', function($http) {

    this.getCategories = function(callbackFunction, data) {
      var url = getMainUrl();
      $http.get(url + 'catalogs/categories.json')
        .success(function(response, status, headers, config) {
          callbackFunction(null, response);
        })
        .error(function(response, status, headers, config) {
          callbackError(response, status, headers, config, callbackFunction);
        });
    };

    this.getPomades = function(callbackFunction, data) {
      var url = getMainUrl();
      $http.get(url + 'catalogs/pomades.json')
        .success(function(response, status, headers, config) {
          callbackFunction(null, response);
        })
        .error(function(response, status, headers, config) {
          callbackError(response, status, headers, config, callbackFunction);
        });
    };

    this.getItems = function(callbackFunction, type) {
      var url = getMainUrl();
      $http.get(url + 'catalogs/'+type+'.json')
        .success(function(response, status, headers, config) {
          response = response[0];
          callbackFunction(null, response);
        })
        .error(function(response, status, headers, config) {
          callbackError(response, status, headers, config, callbackFunction);
        });
    };

    //Callback functions
    function callbackError(response, status, headers, config, callbackFunction) {
      if (response.hasOwnProperty('error')) {
        return callbackFunction({
          msg: response.error
        }, null);
      }
      if (status === 0 && !response) {
        response = {};
        response.msg = "No hay conexión a internet. Compruebe su conexión";
      }
      return callbackFunction(response, null);
    }

    // Other functions
    function getMainUrl(){
      var url  = "../../";
      if (ionic.Platform.isAndroid()) {
           url  = "/android_asset/www/";
      }
      return url;
    }
  });
