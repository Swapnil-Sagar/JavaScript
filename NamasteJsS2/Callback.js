// Simple callback example

setTimeout(function () {
	console.log('Callback');
}, 5000);

//Another example

A.callback(function a() {
	console.log('a');
	B.callback(function b() {
		console.log('b');
	});
});

// Continuing the above code further will create callback hell
