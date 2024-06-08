function index(req, res) {
    req.getConnection((err, conn) => {
      conn.query('SELECT * FROM usuario', (err, movie) => {
        if(err) {
          res.json(err);
        }
        res.render('usuarios/index', { movie });
      });
    });
  }
  
  function create(req, res) {
  
    res.render('usuarios/create');
  }
  
  function store(req, res) {
    const data = req.body;
  
    req.getConnection((err, conn) => {
      conn.query('INSERT INTO usuario SET ?', [data], (err, rows) => {
        res.redirect('/usuarios');
      });
    });
  }
  
  function destroy(req, res) {
    const id = req.body.id;
  
    req.getConnection((err, conn) => {
      conn.query('DELETE FROM usuario WHERE id = ?', [id], (err, rows) => {
        res.redirect('/usuarios');
      });
    })
  }
  
  function edit(req, res) {
    const id = req.params.id;
  
    req.getConnection((err, conn) => {
      conn.query('SELECT * FROM usuario WHERE id = ?', [id], (err, movie) => {
        if(err) {
          res.json(err);
        }
        res.render('usuarios/edit', { movie });
      });
    });
  }
  
  function update(req, res) {
    const id = req.params.id;
    const data = req.body;
  
    req.getConnection((err, conn) => {
      conn.query('UPDATE usuario SET ? WHERE id = ?', [data, id], (err, rows) => {
        res.redirect('/usuarios');
      });
    });
  }
  
  
  module.exports = {
    index: index,
    create: create,
    store: store,
    destroy: destroy,
    edit: edit,
    update: update,
  }