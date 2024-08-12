create table products(
    id int not null AUTO_INCREMENT PRIMARY KEY,
    name varchar(35) not null,
    categoryId integer not null,
    description varchar(255),
    price integer,
    status varchar(20));

    create table bills(
    id int not null AUTO_INCREMENT PRIMARY KEY,
    uuid varchar(200) not null,
    name varchar(35) not null,
    email varchar(50) not null,   
    mobile varchar(20) not null,   
    paymentMethod varchar(50) not null,
    total int not null,
    productDetails JSON DEFAULT null,
    createdBy varchar(255) not null,
    );