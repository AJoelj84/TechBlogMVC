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
                res.status(200).json(comData);
        }
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
        res.status(404).json ({ message: 'No Comment with id ${req.params.it}' });
        return;
        }
        res.status(200).json(comData);
        }
        catch (err) {
        res.status(500).json(err);
        }
    });