const projectsList = document.getElementById('projectsList')
const dots = document.querySelectorAll("[id^=nav_dot_]")
const dotWrappers = document.querySelectorAll("[id^=_nav_dot_wrapper]")
 
function dotClickHandler(e) 
{
  e.preventDefault(); 
  document.querySelectorAll(".nav-dot").forEach(_dot => {
    _dot.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
  })
  e.srcElement.style.backgroundColor = "white"
  
  let projectNumber = parseInt(e.srcElement.dataset.project)
  projectsList.scrollTo({top: projectNumber * 840, behavior: "smooth"});
}

function dotWrapperMouseOverHandler(e) 
{
  let wrapperIndex = parseInt(e.srcElement.dataset.wrapper)
  const mouseoverEvent = new Event('mouseover');
  document.getElementById(`nav_dot_${wrapperIndex}`).dispatchEvent(mouseoverEvent);
}

export async function registerSmothScrollEventListeners()
{
    document.getElementById('nav_dot_1').style.backgroundColor = "white"
    for (const dotWrapper of dotWrappers) {
      dotWrapper.addEventListener("mouseover", dotWrapperMouseOverHandler);
    }
    for (const dot of dots) {
        dot.addEventListener("click", dotClickHandler);        
    }
    projectsList.addEventListener('scroll', event => {
      document.querySelectorAll(".nav-dot").forEach(_dot => {
        _dot.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
      })
      let projectNumber = projectsList.scrollTop / 840
      projectNumber = Math.round(projectNumber + 0.8)
      document.getElementById(`nav_dot_${projectNumber}`).style.backgroundColor = 'white'
    })
}
