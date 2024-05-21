const observer = new IntersectionObserver(entries => {
    if(entries[0].intersectionRatio >= 0.5) {
        entries[0].target.classList.add('hidden-off')
    }
    }, {
        threshold: .5
    }
)

Array.from(document.querySelectorAll('.init-hidden')).forEach(section => {
    observer.observe(section)
})