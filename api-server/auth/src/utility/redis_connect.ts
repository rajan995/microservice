import redis from 'ioredis';
export enum REDIS_KEYS  {
    ACCESS_TOKEN_BLOCK = 'accessTokenBlock',
}
export  function connectRedis() {
    const redisClient = new redis(
        {
            host: process.env.REDIS_HOST,
            port: Number(process.env.REDIS_PORT),
         
        }
    )
    return  redisClient;
}
