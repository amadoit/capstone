const path = require('path')

module.exports = {
    getTeamInfo: (req,res) => {
        console.log(__dirname)
        res.sendFile(path.join(__dirname, '../public/team_information.html'))
    },
    getHome: (req,res) => {
        res.sendFile(path.join(__dirname, '../public/home.html'))
    },
    getHighlights: (req,res) => {
        res.sendFile(path.join(__dirname, '../public/highlights.html'))
    },
    getJoin: (req, res) => {
        res.sendFile(path.join(__dirname, '../public/join.html'))
    },
    getHistory: (req, res) => {
        res.sendFile(path.join(__dirname, '../public/history.html'))
    }
}



let forms = document.querySelectorAll('.needs-validation')
Array.prototype.slice.call(forms)
  .forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  });

