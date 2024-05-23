const mailerModel = require('../models/mailerModel');

exports.contactMePortfolio = function (req, res) {
  const { name, email, subject, text } = req.body;

  if (!name || !email || !subject || !text) {
    res.status(400);
    res.json({ error: `поле не может быть пустым` });
    return;
  }

  return mailerModel.contactMePortfolio(name, email, subject, text)
    .then((success) => res.send({ data: success }))
    .catch((err) => {
    res.status(400);
    res.json({ error: err.message });
  })
};
