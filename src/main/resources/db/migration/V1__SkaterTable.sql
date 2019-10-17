CREATE TABLE skaters (
    id UUID NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    avatar VARCHAR(1000) NOT NULL
);

CREATE TABLE products (
    id UUID NOT NULL PRIMARY KEY,
    type VARCHAR(20) NOT NULL,
    link VARCHAR(1000) NOT NULL,
    review VARCHAR(550),
    skaterId UUID
);

CREATE TABLE images (
    id UUID NOT NULL PRIMARY KEY,
    productId UUID NOT NULL,
    urlToImage VARCHAR(1000) NOT NULL
);