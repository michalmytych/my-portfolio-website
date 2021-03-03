const projectsWidgets = document.querySelectorAll('.project-image');
const crossWrapper = document.getElementById('crossWrapper');


window.onload = function() {
    projectsWidgets.forEach((i, index) => {
        console.log(index);
        $(`#item${index+1}`).delay(Math.pow(index+1,1.04)*100).animate({
            opacity: '+=1',
            top: '+=3vh'
        }, { duration: 600 }
    );})
    .css('position', 'static')

    projectsWidgets.forEach(widget => widget.addEventListener('click', e => {      
        $(".ProjectDetails").animate({
            opacity: '+=1',
            right: '+=60vw'
        }, {
            duration: 800,
            easing: 'swing'
        });

        $(".bg-content-cover")
        .css('display', 'block')
        .animate({    
            opacity: '+=1'
        }, {
            duration: 600,
        });

        crossWrapper.innerHTML = '<div id="close_cross" class="cross"></div>'

        document.getElementById("close_cross").addEventListener('click', e=>{
            $(".ProjectDetails").animate({
                opacity: '-=1',
                right: '-=60vw'
            }, {
                duration: 800,
                easing: 'swing'
            });
    
            $(".bg-content-cover")            
            .animate({    
                opacity: '-=1'
            }, {
                duration: 600,                
            })
            .css("display", "none")
        })

        console.log(e.target.id);
    }))
}