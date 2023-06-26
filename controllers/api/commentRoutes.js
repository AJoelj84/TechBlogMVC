const router = require ('express').Router();
const {Post, User, Comment} = require ('../../models');
const withAuth = require ('../../utils/auth');

router.get ('/', async (req, res) => {
    try {
        const comData = await Comment.findAll ({});
    if (comData.length === 0) {
        res.status(404).json({message: 'There are No Comments to be Shown.'});
    return;
        }
        res.status(200).json(comData);}
    catch (err) {
        res.status(500).json(err);
        }      
    });

router.get ('/:id', async (req,res) => {
    try {
        const comData = await Comment.findAll({
        where: { id: req.params.id },
    });

    if ( comData.length === 0 ) {
        res.status(404).json ({ message: `No Comment with id ${req.params.id}` });
        return;
        }
        res.status(200).json( comData );
        }
        catch (err) {
        res.status(500).json( err );
        }
    });

router.post('/', withAuth, async (req, res) => {
    try {
        const newCom = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
        });
        res.status(200).json( newCom );
        } 
        catch (err) {
        res.status(400).json(err);
        }
    });

router.put('/:id', withAuth, async (req, res) => {
    try {
        const updatedCom = await Comment.update(
        {
        comment_text: req.body.comment_text,
        },
        {
        where: {
        id: req.params.id,},
    });

    if (!updatedCom) {
        res.status(404).json({ message: `No comments with id ${req.params.id}` });
        return;
        }
        res.status(200).json( updatedCom );
        } 
        catch (err) {
        res.status(400).json(err);
        }
    });

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const comData = await Comment.destroy({
        where: { id: req.params.id },
    });

    if (!comData) {
        res.status(404).json({
        message: `There are no Post by ${req.session.user_id} With the id ${req.params.id}`,
            });
        return;
          }
        res.status(200).json(comData);
        } 
        catch (err) { res.status(500).json(err);
        }
    });
    
module.exports = router;