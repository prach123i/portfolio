console.log("script running")
document.querySelector('.cross').style.display='none';

document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.hamb').style.display='inline';
        document.querySelector('.cross').style.display='none';
    }
    else{
        document.querySelector('.hamb').style.display='none';
        setTimeout(()=>{
            document.querySelector('.cross').style.display = 'inline';
        }, 350);
    }
})

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

if (cursorDot && cursorOutline) {
    window.addEventListener("mousemove", function (e) {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, {
            duration: 500,
            fill: "forwards"
        });
    });
} else {
    console.error("Cursor elements not found in the DOM.");
}


/*const openSidebarIcon = document.getElementById('openSidebar');
const closeSidebarIcon = document.getElementById('closeSidebar');
const sidebar = document.querySelector('.sidebar');
// Add click event listener to open the sidebar
openSidebarIcon.addEventListener("click",() =>{
    sidebar.style.transform = 'translateX(0)'; // Show the sidebar
    main.style.marginLeft="250px";
    console.log('chl gya');

});

// Add click event listener to close the sidebar
const main = document.querySelector('.main1');

closeSidebarIcon.addEventListener("click", () => {
    sidebar.style.transform = 'translateX(-100%)'; // Hide the sidebar
    main.style.marginLeft='0px';
    console.log('chlja bhai');
});*/






/*document.querySelector('#menu').addEventListener('click',()=>{
    const menu = document.querySelector('#menu');
    const main=document.querySelector('.main1');
    const sidebar=document.querySelector('.sidebar');
   sidebar.classList.toggle('sidebargo');
   if(sidebar.classList.contains('sidebargo')){
    sidebar.style.display='none';
    main.style.margin='0px';
    main.style.width='50px';
   }
   else{
    sidebar.style.display='';
   }
    
    
    console.log("please chl ja yrr");
});*/