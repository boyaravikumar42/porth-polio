/*******====================
		* 
		* typing text in the front page
		* 
		===================**************/
		var typed= new Typed(".span",{
			strings:["Full - stack Developer","Web Developer"],
			typeSpeed:80,
			backSpeed:80,
			backDelay:800,
			loop:true,
		})
        
        /*===== menu icon scripting======*/
        let bar=document.getElementById('bar');
        let nav=document.getElementById('navbar');

        bar.addEventListener('click',()=>{
            bar.classList.toggle('fa-bars-staggered');
            bar.classList.toggle('fa-xmark');
            nav.classList.toggle('active');
        });
