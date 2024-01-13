const lankingService = require('../services/board/lankingService');

const homeController = {
  index: async (req, res) => {
    try {
      const lankingList = await lankingService.getLanking();
      res.render('index', { lankingList });
    } catch (error) {
      console.error(error);
      res.status(500).send('500 Error');
    }
  },
};

module.exports = homeController;
