create database	NEXACRO;
use NEXACRO;

drop table TB_USER ;
create table TB_USER (
	USER_ID int auto_increment primary key,
    USER_NM nvarchar(255),
	PWD varchar(255),
    PHONE varchar(10),
    ADDRESS nvarchar(255),
    REG_ID int,
    REG_DTM nvarchar(255),
    MOD_ID int,
    MOD_DTM nvarchar(255),
    GROUP_ID int,
    ROLE_ID int

);

ALTER TABLE TB_USER AUTO_INCREMENT=1001;
INSERT INTO `NEXACRO`.`TB_USER` (`USER_NM`, `PWD`, `PHONE`, `ADDRESS`, `ROLE_ID`) VALUES ('TU', '123123', '0333925447', 'DN', '1');

create table TB_ROLE(
	ROLE_ID int auto_increment primary key,
    ROLE_NM varchar(255),
    ROLE_CD varchar(255),
    REG_ID int,
    REG_DTM nvarchar(255)
)
INSERT INTO `NEXACRO`.`TB_ROLE` (`ROLE_NM`) VALUES ('PM');
INSERT INTO `NEXACRO`.`TB_ROLE` (`ROLE_NM`) VALUES ('TL');
INSERT INTO `NEXACRO`.`TB_ROLE` (`ROLE_NM`) VALUES ('MB');


create table TB_GROUP(
	GROUP_ID int auto_increment primary key,
    GROUP_NM varchar(255),
    REG_ID int,
    REG_DTM nvarchar(255)
)
