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
INSERT INTO NEXACRO.TB_USER (USER_NM, PWD, PHONE, ADDRESS, ROLE_ID) VALUES ('TU', '123123', '0333925447', 'DN', '1');

create table TB_ROLE(
	ROLE_ID int auto_increment primary key,
    ROLE_NM varchar(255),
    ROLE_CD varchar(255),
    REG_ID int,
    REG_DTM nvarchar(255)
)
INSERT INTO NEXACRO.TB_ROLE (ROLE_NM) VALUES ('PM');
INSERT INTO NEXACRO.TB_ROLE (ROLE_NM) VALUES ('TL');
INSERT INTO NEXACRO.TB_ROLE (ROLE_NM) VALUES ('MB');


create table TB_GROUP(
	GROUP_ID int auto_increment primary key,
    GROUP_NM varchar(255),
    REG_ID int,
    REG_DTM nvarchar(255)
)

CREATE TABLE TB_PROJECT (
  PROJECT_ID int NOT NULL AUTO_INCREMENT,
  PROJECTP_NM varchar(255) DEFAULT NULL,
  PROJECT_OWNER int DEFAULT NULL,
  ST_DT varchar(50) DEFAULT NULL,
  ED_DT varchar(50) DEFAULT NULL,
  DES varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  PROJECT_YN bit(1) DEFAULT NULL,
  TAG_ID int DEFAULT NULL,
  REG_ID int DEFAULT NULL,
  REG_DTM varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  GROUP_ID int DEFAULT NULL,
  PRIMARY KEY (PROJECT_ID)
)