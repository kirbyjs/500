import Redis from 'ioredis';

let redisInstance;

export function set(key, value) {
    redisInstance.set(key, value);
}

export function get(key) {
    return redisInstance.get(key);
}

export function del(key) {
    redisInstance.del(key);
}

export function connect(...args) {
    redisInstance = new Redis(...args);
}
