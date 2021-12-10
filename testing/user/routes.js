const router= require('express').Router();
const user= require('./controller');

router.post('/user', user.create);
router.get('/user/detail', user.getAll);
router.patch('/user/:id', user.updates)

module.exports= router;

console.log("router");
