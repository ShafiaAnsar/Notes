
// Get Dashboard..

exports.homepage = async (req, res) =>{
    const locals = {
        title :'Dashboard',
        description :'Free NodeJs Notes App'
    }
    res.render('dashboard',{
        locals,
        layout:'../views/layouts/dashboard'
    })
}

// Get About

exports.about = async (req, res) =>{
    const locals = {
        title :' About - NodeJs Notes',
        description :'Free NodeJs Notes App'
    }
    res.render('about',locals)
}