/**
 * BooksController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  findAll: (req, res) => {
    Books.find().then(book => {
      res.ok(book);
    })
  }
};

