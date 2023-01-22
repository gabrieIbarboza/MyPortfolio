(()=>{
    console.log('It is working!');

    setInterval(()=>{ 

        function typeWriter(element) {
            const textArray = (element.innerHTML.split(''));
            element.innerHTML = '';
            setTimeout(()=>{

                textArray.forEach((letter, i) => {
                    setTimeout(() => element.innerHTML += letter, 150 * i);
                });

            }, 150);
        }

        const title = document.querySelector('#siteTitle');
        typeWriter(title);

    }, 3000);

})();
