const redis = require("redis");

//Instantiating the redis client
const redisClient = redis.createClient(process.env.REDIS_URI);

const handleSignOut = (req, res) => {
  const { token } = req.body;
  debugger;
  try {
    redisClient.LPUSH("blacklist", token);
    return res.status(200).json({
      status: 200,
      data: "Logged out"
    });
  } catch (error) {
    return res.status(400).json({
      status: 500,
      error: error.toString()
    });
  }
};

module.exports = {
  handleSignOut: handleSignOut
};
