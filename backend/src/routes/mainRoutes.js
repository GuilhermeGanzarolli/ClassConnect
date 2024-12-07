const express = require('express')
const router = express.Router()

const studentRoutes = require('./studentRouter')
const teacherRoutes = require('./teacherRoutes')

router.use('/students', studentRoutes)
router.use('/teachers', teacherRoutes)


module.exports = router