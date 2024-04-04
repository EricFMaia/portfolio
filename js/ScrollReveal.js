const theObserver = new IntersectionObserver((into) =>{
    into.forEach((into) =>{
        if(into.isIntersecting){
            into.target.classList.add('showContent')
            
        }
    })
})
const el = document.querySelectorAll('.hiddenContent')

el.forEach((el) =>theObserver.observe(el))