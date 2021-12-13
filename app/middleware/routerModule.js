const routerModule = {
  displayHomepage: (req,res,next) => {
    res.render('index');
  }
};

module.exports = routerModule;