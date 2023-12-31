const router = require('express').Router();
const clientController = require('../controller/client');
const { authenticateToken } = require('../jwtConfig/authenticateToken')

router.post('/login', clientController.login);
router.post('/signup', clientController.signUp);
router.put('/updateProfile/:idclient', authenticateToken, clientController.updateProfile);
router.delete('/deleteAccount/:idclient', authenticateToken, clientController.deleteAccount);
router.post('/addRating', authenticateToken, clientController.addRating);
router.get('/getWorkByBarber/:barber_id', authenticateToken, clientController.getWorkByBarber);
router.get('/getOneWork/:work_id', authenticateToken, clientController.getOneWork);
router.get('/getOneUser/:idclient', authenticateToken, clientController.getOneUser)

module.exports = router;
