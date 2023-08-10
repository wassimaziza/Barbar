const router = require('express').Router();
const clientController = require('../controller/client');
const { authenticateToken } = require('../jwtConfig/authenticateToken'); // Assuming you have authentication middleware

router.post('/login', clientController.login);
router.post('/signup', clientController.signUp);
router.put('/updateProfile', authenticateToken, clientController.updateProfile);
router.delete('/deleteAccount', authenticateToken, clientController.deleteAccount);
router.post('/addRating', authenticateToken, clientController.addRating);
router.get('/getWorkByBarber/:barber_id', authenticateToken, clientController.getWorkByBarber);
router.get('/getOneWork/:work_id', authenticateToken, clientController.getOneWork);

module.exports = router;
