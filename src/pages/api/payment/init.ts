export default async(req, res) => {
  return await fetch(`${process.env.HOST}/order/payment/init`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + req.cookies['Authorization']
    },
    body: JSON.stringify({
      order_id: 1
    })
  })
  .then((data) => data.json())
  .then((data) => res.status(200).json(data));
}
