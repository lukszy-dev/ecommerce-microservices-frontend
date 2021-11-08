export default async(req, res) => {
  return await fetch(`${process.env.HOST}/authentication/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: 'test@test.pl',
      password: 'password'
    })
  })
  .then((data) => data.json())
  .then((data) => res.status(200).json(data))
}
