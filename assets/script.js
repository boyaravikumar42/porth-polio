/*******====================
		* 
		* typing text in the front page
		* 
		===================**************/
		var typed= new Typed(".span",{
			strings:["CS Enthusiast","Full - stack Developer"],
			typeSpeed:80,
			backSpeed:80,
			backDelay:800,
			loop:true,
		})
        
        /*===== menu icon scripting======*/
const menuEnable=(e)=>
{
    let bar=document.getElementById('bar') 
    let cross=document.getElementById('bar1') 
    let cont=document.getElementById('navbar');
    bar.style.display='none';
    cross.style.display='block';
    cont.style.display='flex';
    
}
const menuDisable=()=>
    {
        let bar=document.getElementById('bar');
        let cross=document.getElementById('bar1');
        cross.style.display='none'; 
        bar.style.display='block'; 
        let cont=document.getElementById('navbar');
        cont.style.display='none';
        
    }
