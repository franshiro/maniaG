const router = require('express').Router()
const game = require('./game')
const auth = require('../helpers/authentification')
const Controller = require('../controllers/index')

router.use('/game',auth, game)


router.get('/', auth, Controller.showAllGame)

router.get('/:username/games', Controller.userActivity)

router.get('/:username/editProfile', Controller.userShowEditForm)
router.post('/:username/editProfile', Controller.userEditProfile)

router.post('/admin/addGameList', Controller.addGame)

router.get('/admin/addCategory', Controller.adminCategory)
router.post('/admin/addCategory', Controller.adminAddCategory)






module.exports = router