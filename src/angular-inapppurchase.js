(function(){

	angular.module('inAppPurchase', []).factory('$inAppPurchase', ['$q', function ($q) 
	{
		return {
			getProducts: function(productIds)
			{
				var deferred = $q.defer();

				inAppPurchase.getProducts(productIds).then(
					function(products) 
					{
						deferred.resolve(products);
					},
					function(err) 
					{
						deferred.reject(err);
					}
				);

				return deferred.promise;
			},

			buy: function(productId)
			{
				var deferred = $q.defer();

				inAppPurchase.buy(productId).then(
					function(data) 
					{
						deferred.resolve(data);
					},
					function(err) 
					{
						deferred.reject(err);
					}
				);

				return deferred.promise;
			},

			subscribe: function(productId)
			{
				var deferred = $q.defer();

				inAppPurchase.subscribe(productId).then(
					function(data) 
					{
						deferred.resolve(data);
					},
					function(err) 
					{
						deferred.reject(err);
					}
				);

				return deferred.promise;
			},

			consume: function(productType, receipt, signature)
			{
				var deferred = $q.defer();

				inAppPurchase.consume(productType, receipt, signature).then(
					function(data) 
					{
						deferred.resolve(data);
					},
					function(err) 
					{
						deferred.reject(err);
					}
				);

				return deferred.promise;
			},

			restorePurchases: function()
			{
				var deferred = $q.defer();

				inAppPurchase.restorePurchases().then(
					function(data) 
					{
						deferred.resolve(data);
					},
					function(err) 
					{
						deferred.reject(err);
					}
				);

				return deferred.promise;
			},

			getReceipt: function()
			{
				var deferred = $q.defer();

				inAppPurchase.getReceipt().then(
					function(data) 
					{
						deferred.resolve(data);
					},
					function(err) 
					{
						deferred.reject(err);
					}
				);

				return deferred.promise;
			}
		};
	}]);

})();