console.log("JS is running!");

// EASY GOING
// 1. Write a for loop that will log the numbers 1 through 20.
// for (i = 1; i <= 20; i++) {
// 	console.log(i);
// };

// GET EVEN
// 1. Write a for loop that will log only the even numbers in 0 through 200.
// for (i = 0; i <= 200; i++) {
// 	if (i % 2 === 0) {
// 		console.log(i);
// 	};
// };

// EXCITTED KITTEN
// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
// const kitty = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];

// for (i = 0; i < 20; i++) {
// 	console.log("Love me, pet me! HSSSSSS!");
// 		if (i % 2 === 0) {
// 			var randomValue = Math.floor(Math.random() * (kitty.length));
// 			console.log(kitty[randomValue]);
// 		};
// };

// FIZZ BUZZ
// NOTE: THIS IS A CLASSIC RITE-OF-PASSAGE FOR JAVASCRIPT PROGRAMMERS, ESPECIALLY ONES AT GA
// 1. Write a javascript application that logs all numbers from 1 - 100.
// 2. If a number is divisible by 3 log "Fizz" instead of the number.
// 3. If a number is divisible by 5 log "Buzz" instead of the number.
// 4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
for (i = 1; i <= 100; i++){
	if (i % 15 === 0) {
		console.log("FizzBuzz");
	} else if (i % 5 === 0) {
		console.log("Buzz");
	} else if (i % 3 === 0) {
		console.log("Fizz");
	} else console.log(i);
};

