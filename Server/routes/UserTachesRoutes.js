const router = require("express").Router();
const usertaches = require("../models/UserTaches");


router.get('/', (req, res) => {
    usertaches.find({}, (err, usertaches) => {
        console.log(usertaches);
        if (err)
            res.status(500).send({error: err})
        else {
            if (usertaches.length){
                res.send(usertaches);
            } 
            else
                //liste vide
                {console.log("list vide");
                res.sendStatus(204)}
        }
    })
});
router.get('/usertaches/:id', async (req, res) => {
    
    usertaches.find({_id: req.params.id.trim()}, (err, usertaches) => {
        if (err)
            res.status(500).send({error: err})
        else {
            if (usertaches) 
                res.send(usertaches);
            else 
                res.status(404).send({error: "Utilisateur Introuvable !"});
        }
    })
});
router.get('/listtaches/:iduser', async (req, res) => {
    usertaches.find({iduser:req.params.iduser.trim()}, (err, usertaches) => {
        console.log(usertaches);
        if (err)
            res.status(500).send({error: err})
        else {
            if (usertaches.length){
                res.send(usertaches);
            } 
            else
                //liste vide
                {console.log("list vide");
                res.sendStatus(204)}
        }
    })
});
router.post('/createusertaches', async (req, res) => {
    console.log("wslt");
    const {idtache, iduser} = req.body;
    usertaches.create({ idtache, iduser }, (err, usertaches)=>{
        if(err)
            res.status(500).send({error: err})
        else
            res.send(usertaches);
    });  
});
router.put('/updateusertaches/:id', async (req, res) => {
    usertaches.findOne({_id: req.params.id.trim()}, (findErr, usertaches)=>{
        if(findErr)
            res.status(500).send({error: findErr});
        else {
            const {idtache, iduser} = req.body;
            //possibility to check the fields (validation) before saving !!!!!!!!!!!!!!!!!!!!!!
            usertaches.idtache = idtache;
            usertaches.iduser = iduser;
            usertaches.save()
                .then(modifiedUser=>{
                    res.send(modifiedUser)
                })
                .catch(modErr=>{
                    res.send(500).send({error: modErr});
                })
        }
    })    
});
router.delete('/deleteusertaches/:id', async (req, res) => {
    usertaches.findOneAndRemove({_id: req.params.id.trim()})
        .then(usertaches => {
            if (usertaches) {               
                res.send(usertaches);
            } else {
                res.status(404).send({error: "UserTaches Introuvable !"});
            }
        })
        .catch(error => {
            res.send(error);
        });
});
router.delete('/deleteusertaches/:idtache/:iduser', async (req, res) => {
    console.log("DeleteTaches")
    usertaches.findOneAndRemove({_id: req.params.idtache.trim(),iduser: req.params.iduser.trim()})
        .then(usertaches => {
            if (usertaches) {               
                res.send(usertaches);
            } else {
                res.status(404).send({error: "UserTaches Introuvable !"});
            }
        })
        .catch(error => {
            res.send(error);
        });
});


module.exports = router;