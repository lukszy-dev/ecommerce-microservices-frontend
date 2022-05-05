const add = async(req, res) => {
  return await fetch(`${process.env.HOST}/order/cart/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + req.cookies['Authorization']
    },
    body: req.body
  })
  .then((data) => data.json())
  .then((data) => res.status(200).json(data))
}

export default add;
