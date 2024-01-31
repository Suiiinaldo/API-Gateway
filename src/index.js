const express = require("express");
const rateLimit  = require('express-rate-limit');
const { ServerConfig, Logger } = require("./config");

const { createProxyMiddleware } = require('http-proxy-middleware');

const apiRoutes = require("./routes");

const app = express();

const limiter = rateLimit({
  windowMs: 2 * 60 * 1000, // 2 minutes
	max: 15, // Limit each IP to 5 requests per `window`.
})



app.use('/flightsService', createProxyMiddleware({ 
  target: ServerConfig.FLIGHTS_URL, 
  changeOrigin: true,
  pathRewrite: { 
    '^/flightsService' : '/'
  }
}));


app.use('/bookingService', createProxyMiddleware({ 
  target: ServerConfig.BOOKING_URL, 
  changeOrigin: true,
  pathRewrite: { 
    '^/bookingService' : '/'
  }
}));


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api", apiRoutes);
app.use(limiter);

app.listen(ServerConfig.PORT, () => {
  console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
  Logger.info("Successfully started the server", "root", { msg: "something" });
});
