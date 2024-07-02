import express from 'express';
import { indexPage, createGuest } from '../controllers/index.controller.js';

const router = express.Router();

router.get('/', indexPage);

router.get('/testbang', (_,res)=>{
    // res.render('test');
    res.send('terstngakdakjkajfad');
})
router.post('/post', createGuest);

export default router;
