import {Router} from'express'
import {getComments,getComment,createComment,updateComment,deleteComment} from'../controllers/coments.controllers.js'

const router = Router();

router.get('/comments',getComments);

router.get('/comments/:id',getComment);

router.post('/comments/', createComment);

router.put('/comments/:id',updateComment);

router.delete('/comments/:id',deleteComment);

export default router;