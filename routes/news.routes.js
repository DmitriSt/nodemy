const { Router } = require('express')
const config = require('config')
const cors = require('cors')
// const shortid = require('shortid')
const News = require('../models/News')
// const auth = require('../middleware/auth.middleware')
const router = Router()

router.options('/add', (req, res) => {
  res.setHeader('Access-Control-Allow-Headers', '*')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,OPTIONS')

  res.send(""); // сам ответ на preflight-запрос может быть пустым
});

router.post('/add', async (req, res) => {
  const {text, date} = req.body;
  const news = new News({
    text, date
  })
    
  await news.save()
  res.status(201).json({news}) 
})

router.put('/update', async (req, res) => {
  try {
    const news = await News.findById(req.body._id)

    news.text = req.body.text;
    console.log('req.body', req.body)
    console.log('news', news)
    
    await news.save()

    res.status(203).json({news})
  } catch (e) {
    // res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    console.log(e)
  }
})

router.delete('/delete', async (req, res) => {
  try {
    const news = await News.findById(req.body._id)

    // news.text = req.body.text;
    console.log('req.body', req.body)
    console.log('news', news)
    
    await news.remove()

    res.status(204);
    res.send({message: `News ${req.body._id} removed`})
  } catch (e) {
    // res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    console.log(e)
  }
})


router.get('/', async (req, res) => {
  try {
    const news = await News.find()
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,OPTIONS')
    res.json(news)
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

// router.get('/:id', auth, async (req, res) => {
//   try {
//     const link = await Link.findById(req.params.id)
//     res.json(link)
//   } catch (e) {
//     res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
//   }
// })

module.exports = router
