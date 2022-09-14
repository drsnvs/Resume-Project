// Basic Counter
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
   let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
     current += increment;
     obj.textContent = current;
     if (current == end) {
      clearInterval(timer);
     }
    }, step);
  }
  counter("count1", 0, 400, 3000); //(Start From, End To, Time)
  counter("count2", 0, 85, 2500);
  counter("count3", 0, 487, 3000);
  counter("count4", 0, 256, 3000);
  counter("count5", 0, 254, 2500);
  counter("count6", 0, 99, 3000);
  counter("count7", 0, 256, 3000);
  counter("count8", 0, 369, 2500);
  counter("count9", 0, 154, 3000);
 });
// Advanced Custom Counter
const stats = document.querySelectorAll(".advanced-custom-counter");
stats.forEach(stat => {
	// pattern used to seperate input number from html into an array of numbers and non numbers. EX $65.3M -> ["$65.3M", "$", "65", ".", "3", "M"]
	const patt = /(\D+)?(\d+)(\D+)?(\d+)?(\D+)?/;
	const time = 1000;
	let result = [...patt.exec(stat.textContent)];
	let fresh = true;
	let ticks;
	// Remove first full match from result array (we dont need the full match, just the individual match groups).
	result.shift();
	// Remove undefined values from result array where they didnt have a match in one of the optional regex groups
	result = result.filter(res => res != null);
	while (stat.firstChild) {
		stat.removeChild(stat.firstChild);
	}
	for (let res of result) {
		if (isNaN(res)) {
			stat.insertAdjacentHTML("beforeend", `<span>${res}</span>`);
		} else {
			for (let i = 0; i < res.length; i++) {
				stat.insertAdjacentHTML(
					"beforeend",
					`<span data-value="${res[i]}">
						<span>&ndash;</span>
						${Array(parseInt(res[i]) + 1)
							.join(0)
							.split(0)
							.map(
								(x, j) => `
							<span>${j}</span>
						`
							)
							.join("")}
					</span>`
				);
			}
		}
	}
	ticks = [...stat.querySelectorAll("span[data-value]")];
	let activate = () => {
		let top = stat.getBoundingClientRect().top;
		let offset = window.innerHeight * 3 / 4;
		setTimeout(() => {
			fresh = false;
		}, time);
		if (top < offset) {
			setTimeout(() => {
				for (let tick of ticks) {
					let dist = parseInt(tick.getAttribute("data-value")) + 1;
					tick.style.transform = `translateY(-${dist * 100}%)`;
				}
			}, fresh ? time : 0);
			window.removeEventListener("scroll", activate);
		}
	};
	window.addEventListener("scroll", activate);
	activate();
});
