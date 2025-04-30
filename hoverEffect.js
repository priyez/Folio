
function projectImgHoverEffect() {
const projects = document.querySelectorAll('.folio-project');

projects.forEach(project => {
    const link = project.querySelector('.folio-project__tittle');
    const img = project.querySelector('.folio-project-image');
    
    link.addEventListener('mouseenter', () => {
        img.style.opacity = 1;
    });
    link.addEventListener('mouseleave', () => {
        img.style.opacity = 0;
    });
});
}

function experienceImgHoverEffect() {
    const projects = document.querySelectorAll('.folio-workExperience');

    projects.forEach(project => {
        const link = project.querySelector('.folio-workExperience__role');
        const img = project.querySelector('.folio-workExperience-img');
        
        link.addEventListener('mouseenter', () => {
            img.style.opacity = 1;
            img.style.width= "100px";
        });
        link.addEventListener('mouseleave', () => {
            img.style.opacity = 0;
            img.style.width= 0;
        });
    });
}



function afterImgHoverEffect() {
    const roleElements = document.querySelectorAll('.folio-workExperience__role, .folio-project__tittle');

    roleElements.forEach(role => {
        role.addEventListener('mouseenter', () => {
            role.classList.add('hover');
            role.style.color= "green";
            
            
        });
    
        role.addEventListener('mouseleave', () => {
            role.classList.remove('hover');
            role.style.color= ""
        });
    });
    
    }

projectImgHoverEffect()
experienceImgHoverEffect()
afterImgHoverEffect()