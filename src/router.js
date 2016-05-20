import express from 'express'; 
import Githuber from './models/githuber';  

const router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/githubers', function(req, res, next) {
    Githuber.all().then((data) => {
      res.status(200);
      res.json(data);   
    }).catch((err) => {
      next(err);
    });
});


export default router;