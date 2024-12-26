/*===== menu icon scripting======*/
const menuEnable=(e)=>
{
    let bar=document.getElementById('bar') 
    let cont=document.getElementById('navbar');
    bar.style.display='none';
    cont.style.display='flex';
    
}
const menuDisable=()=>
    {
        let bar=document.getElementById('bar');
        bar.style.display='block'; 
        let cont=document.getElementById('navbar');
        cont.style.display='none';
        
    }
