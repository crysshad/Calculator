var CalculatorApp = angular.module('CalculatorApp', []);



CalculatorApp.factory('addition', function($http) {
	var factory = [];

	factory.additionResult = function() {
		return $http.get("xml/AdditonResponse.xml");
	}

	return factory;
});







CalculatorApp.controller('Cal', function($scope, $http, addition) {


	calculator();
	

	
	/*  $scope.AddNumbers = function() {
          var number1 = Number($scope.number1 || 0);
          var number2 = Number($scope.number2 || 0);
          $scope.sum = number1+number2;
      }*/

	
	function calculator() {
		var x2js = new X2JS();
	
		
		addition.additionResult().success(function(response) {
			ar = x2js.xml_str2json(response);
			console.log(ar.Envelope.Body.AdditionResponse.return.__text);
			$scope.AResult = ar.Envelope.Body.AdditionResponse.return.__text;
		});
	}

});
