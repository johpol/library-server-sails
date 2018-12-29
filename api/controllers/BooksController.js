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
  },

  deleteBook: (req, res) => {
    console.log('delete');
    const bookID = req.params.id;

    Books.destroy().where({id:bookID}).meta({fetch:true}).exec(function(err, obj) {
      if(obj.length !== 0) {
        res.status(204).send();
      } else {
        res.status(404).send();
      }
    })
  }
};

