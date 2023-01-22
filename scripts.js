(()=>{
    console.log('It is working!');

    setInterval(()=>{ 

        function typeWriter(element, firsttext) {

            element.innerHTML = firsttext; //Avoids a bug where letters scramble
            const textArray = (element.innerHTML.split(''));
            element.innerHTML = '';
            setTimeout(()=>{

                textArray.forEach((letter, i) => {
                    setTimeout(() => element.innerHTML += letter, 150 * i);
                });

            }, 150);
        }

        const title = document.querySelector('#siteTitle');
        typeWriter(title, 'Gabriel Klark');

    }, 3000);

})();
