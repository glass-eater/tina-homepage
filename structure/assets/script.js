let dresserArray =[
    "../stuff/antiItchCream.html",
    "../stuff/bag.html",
    "../stuff/bandaid.html",
    "../stuff/belt.html",
    "../stuff/box.html",
    "../stuff/boxOfTissues.html",
    "../stuff/bra.html",
    "../stuff/button.html",
    "../stuff/chapstick.html",
    "../stuff/coaster.html",
    "../stuff/crumpledPaper.html",
    "../stuff/dust.html",
    "../stuff/flatiron.html",
    "../stuff/hairTie.html",
    "../stuff/hardCandy.html",
    "../stuff/lint.html",
    "../stuff/lotion.html",
    "../stuff/microfiber.html",
    "../stuff/nothing.html",
    "../stuff/oneSock.html",
    "../stuff/pants.html",
    "../stuff/pencil.html",
    "../stuff/pills.html",
    "../stuff/receipt.html",
    "../stuff/sewingNeedle.html",
    "../stuff/spider.html",
    "../stuff/spoon.html",
    "../stuff/tape.html",
    "../stuff/underwear.html",
    "../stuff/utissue.html",
    "../stuff/wallet.html",
    "../stuff/toothpick.html",
    "../stuff/tape.html",
    "../stuff/wetWipe.html",
    "../stuff/wrench.html",
    "../stuff/yarn.html"
];

        let links=document.querySelectorAll('.randomLink');

        links.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault(); 
                
                let index = Math.floor(Math.random() * dresserArray.length);
                const targetUrl = dresserArray[index];
                
                
                window.location.href = targetUrl;
            });
    });