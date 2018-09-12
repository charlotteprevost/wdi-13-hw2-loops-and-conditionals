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
const kitty = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];

for (i = 0; i < 20; i++) {
	console.log("Love me, pet me! HSSSSSS!");
		if (i % 2 === 0) {
			var randomValue = Math.floor(Math.random() * (kitty.length));
			console.log(kitty[randomValue]);
		};
}
