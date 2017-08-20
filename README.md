# angular-inapppurchase
AngularJS module for Cordova InAppPurchase Plugin

## Requirements
cordova plugin: cordova-plugin-inapppurchase

## Installation
```shell
bower install angular-inapppurchase --save
```

## Usage
```html
<script src="lib/angular-inapppurchase/src/angular-inapppurchase.js"></script>
```

```javascript
angular.module('myapp', ['inAppPurchase'])



.run($inAppPurchase)
{
	$inAppPurchase
	  .getProducts(['prod1', 'prod2', ...])
	  .then(function (products) {
	    console.log(products);
	    /*
	       [{ productId: 'com.yourapp.prod1', 'title': '...', description: '...', currency: '...', price: '...' }, ...]
	    */
	  },
	  function(err) {
		console.log(err);
	  });
}

```

## Documentation
[https://github.com/AlexDisler/cordova-plugin-inapppurchase]
