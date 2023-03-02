document.addEventListener('alpine:init', () =>{
    Alpine.data('dropdown', () => ({
        open: false,
        toggle(){
            this.open = !this.open
        }
    }))


    Alpine.store('currentUser',{
        username: 'HonedBadger',
        posts:['post1', 'post2', 'post3']
    })
})


