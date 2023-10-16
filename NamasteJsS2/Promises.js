const cart = [1, 2, 3, 4];

// // callback function
// createObject(cart, function (orderId) {
// 	proceedToPayment(orderId);
// });

// //Using promise
// const promise = createOrder(cart);

// promise.then(function (orderId) {
// 	proceedToPayment(orderId);
// });

// //Promise chaining
// createOrder(cart)
// 	.then((orderId) => proceedToPayment(orderId))
// 	.then((paymentInfo) => showSummary(paymentInfo))
// 	.then((update) => updateWalletBalance(update));

///////////////// Episode 2

const promise2 = createOrder(cart);
console.log(promise2);

promise2
	.then(function (orderId) {
		console.log(orderId);
		return orderId;
	})
	.then(function (orderId) {
		return proceedToPayment(orderId);
	})
	.then(function (paymentInfo) {
		console.log(paymentInfo);
	})

	.catch(function (err) {
		console.log(err.message);
	});

//Or above can be written as
// createOrder(cart).then(function (orderId) {
// 		console.log(orderId);
// 	}).catch(function (err) {
// 		console.log(err.message);
// 	});

//Producer function

function createOrder(cart) {
	const pr = new Promise(function (resolve, reject) {
		if (!validateCart(cart)) {
			const err = new Error('Cart is not velid');
			reject(err);
		}
		const orderId = '1234';
		if (orderId) {
			setTimeout(function () {
				resolve(orderId);
			}, 5000);
		}
	});
	return pr;
}

function proceedToPayment(orderId) {
	return new Promise(function (resolve, reject) {
		resolve('Payment Successfull');
	});
}

function validateCart(cart) {
	return true;
}
