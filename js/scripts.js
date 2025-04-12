window.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll(".filled").forEach((bar) => {
		const finalWidth = bar.style.width;
		bar.style.width = "0%";
		setTimeout(() => {
			bar.style.width = finalWidth;
		}, 2500);
	});


    document.querySelectorAll(".card").forEach((card) => {
        card.addEventListener("click", () => {
            const classname = card.className.split(" ")[1];
            console.log(classname);
            if(classname ==="card-2"){
                card.style.backgroundColor = "#147039";
                const h3 = card.querySelector("h3");
                const p = card.querySelector("p");
                const h2 = card.querySelector("h2");
                h3.style.color = "#fff";
                p.style.color = "#fff";
                h2.style.color = "#fff";
                card.style.transition = "0.5s";
            }
        });
    }) ;
});
