const login = async(req, res) => {
  return await fetch(`${process.env.HOST}/authentication/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: req.body
  })
  .then((data) => data.json())
  .then((data) => res.status(200).json(data))
}

export default login;
