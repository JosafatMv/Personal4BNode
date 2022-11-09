create table puesto (
    id int primary key auto_increment,
    puesto varchar(30) not null,
    descripcion text not null
);
create table personal (
    id bigint primary key auto_increment,
    nombre varchar(30),
    apellidoP varchar(30),
    apellidoM varchar(30),
    sueldo double not null,
    puesto int(11) not null,
    fecNac date,
    foreign key(puesto) references puesto(id)
);
SELECT *
FROM personal
WHERE id = 1;
SELECT personal.*,
    puesto.descripcion
FROM personal
    join puesto on personal.puesto = puesto.id;
SELECT personal.*,
    puesto.descripcion
FROM personal
    join puesto on personal.puesto = puesto.id
where personal.id = 1;
insert into puesto(puesto, descripcion)
values("Maestro", "Maestro de materia");
insert into personal (
        nombre,
        apellidoP,
        apellidoM,
        sueldo,
        puesto,
        fecNac
    )
values(
        "Josafat",
        "Muñoz",
        "Valverde",
        "12000",
        1,
        "2003-04-19"
    );
SELECT personal.*,
    puesto.descripcion
FROM personal
    join puesto on personal.puesto = puesto.id;
create table users(
    id bigint primary key auto_increment,
    email varchar(50) not null unique,
    password varchar(50) not null,
    role varchar(10) not null,
    status tinyint not null,
    personal_id bigint not null,
    constraint fk_personal_users foreign key (personal_id) references personal(id)
);