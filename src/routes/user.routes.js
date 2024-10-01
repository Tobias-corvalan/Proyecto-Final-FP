import {Router} from'express'
import {authLog, createUser, getUser} from'../controllers/user.controllers.js'

const router = Router();
//obtener usuario


    // router.get('/', function(req,res){
    //     res.render('index.ejs')
    // })
    router.get('/publish', function(req,res){
        res.render('publish.ejs')
    })
    router.get('/register', function(req,res){
        res.render('register.ejs')
    })
router.post('/register', createUser);


router.post('/auth', getUser);

//auth pages
router.get("/", authLog);


// router.get('/comments/:id',getComment);
//crear usuario


// router.put('/comments/:id',updateComment);

// router.delete('/comments/:id',deleteComment);

export default router;