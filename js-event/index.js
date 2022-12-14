const btn = document.querySelector('#btn');
const img = document.getElementById('img');

btn.addEventListener('click', function() {
    img.classList.toggle('show')
    alert('WelcomeToTheNba')
})

/**************************** */

const mouseEvent = document.querySelector('.mouseEvent');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');

mouseEvent.addEventListener('mousemove', function(e) {
    horizontal.innerHTML = e.x;
    vertical.innerHTML = e.y;
    mouseEvent.style.left = e.x / window.innerWidth * 100 + "%";

    if (e.x > 500) {
        document.body.style.filter = "blur(3px)";
    }
    else {
        document.body.style.filter = "none";
    }
})

/****************************** */

document.getElementById('input').addEventListener('input', function(e){
    vertical.innerHTML = e.target.value
})

/******************************** */

const theme = document.querySelectorAll('.theme');


theme.forEach(function(item){
    item.addEventListener('click', function(e){
        console.log(e.target.id);
        document.body.classList.remove("darkTheme", "salmonTheme", "yellowTheme");
        switch (e.target.id) {
            case "dark":
                document.body.classList.add("darkTheme");
                break;
            case "salmon":
                document.body.classList.add("salmonTheme");
                break;
            case "red":
                document.body.classList.add("redTheme");
                break;
                default:
                    null;
        }
    })
})