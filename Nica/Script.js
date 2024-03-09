var btnMode = document.querySelector('.btn-mode');
            btnMode.onclick = function(){
                document.body.classList.toggle("white-theme")
                btnMode.classList.toggle("fa-sun")
                btnMode.classList.toggle("fa-moon")
            }
