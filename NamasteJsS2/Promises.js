const cart = [1, 2, 3, 4];

//callback function
createObject(cart, function (orderId) {
	proceedToPayment(orderId);
});

//Using promise
const promise = createOrder(cart);

promise.then(function (orderId) {
	proceedToPayment(orderId);
});

//Promise chaining
createOrder(cart)
	.then((orderId) => proceedToPayment(orderId))
	.then((paymentInfo) => showSummary(paymentInfo))
	.then((update) => updateWalletBalance(update));
