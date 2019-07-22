-- create database pms.db
CREATE DATABASE "pms.db"
  WITH 
  OWNER = postgres
  ENCODING = 'UTF8'
  CONNECTION LIMIT = -1;

-- create table users
CREATE TABLE public.users
(
  userid serial NOT NULL,
  email character varying(50) NOT NULL,
  password character varying(250) NOT NULL,
  firstname character varying(25),
  lastname character varying(25),
  PRIMARY KEY (userid),
  UNIQUE (email),
  CONSTRAINT roleforeignkey FOREIGN KEY (roleid)
    REFERENCES public.roles (roleid) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
)
WITH (
  OIDS = FALSE
);

ALTER TABLE public.users
  OWNER to postgres;

-- create table projects
CREATE TABLE public.projects
(
  projectid serial NOT NULL,
  name character varying(50) NOT NULL,
  PRIMARY KEY (projectid)
)
WITH (
  OIDS = FALSE
);

ALTER TABLE public.projects
  OWNER to postgres;

-- create table members
CREATE TABLE public.members
(
  id serial NOT NULL,
  userid integer,
  roleid integer,
  projectid integer,
  PRIMARY KEY (id),
  CONSTRAINT userforeignkey FOREIGN KEY (userid)
    REFERENCES public.users (userid) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION,
  CONSTRAINT roleforeignkey FOREIGN KEY (roleid)
    REFERENCES public.roles (roleid) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION,
  CONSTRAINT projectforeignkey FOREIGN KEY (projectid)
    REFERENCES public.projects (projectid) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
)
WITH (
  OIDS = FALSE
);

ALTER TABLE public.members
  OWNER to postgres;

-- create table issues
CREATE TABLE public.issues
(
  issueid serial NOT NULL,
  projectid integer,
  tracker character varying(10),
  subject character varying(100),
  description text,
  status character varying(15),
  priority character varying(10),
  assignee integer,
  startdate timestamp without time zone,
  duedate timestamp without time zone,
  estimatedtime numeric,
  done integer,
  files text,
  spenttime numeric,
  targetversion character varying(20),
  author integer,
  createddate timestamp without time zone,
  updateddate timestamp without time zone,
  closeddate timestamp without time zone,
  parenttask integer,
  PRIMARY KEY (issueid),
  CONSTRAINT projectforeignkey FOREIGN KEY (projectid)
    REFERENCES public.projects (projectid) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION,
  CONSTRAINT assigneeforeignkey FOREIGN KEY (assignee)
    REFERENCES public.users (userid) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION,
  CONSTRAINT authorforeignkey FOREIGN KEY (author)
    REFERENCES public.users (userid) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION,
  CONSTRAINT parenttaskforeignkey FOREIGN KEY (parenttask)
    REFERENCES public.issues (issueid) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION,
)
WITH (
  OIDS = FALSE
);

ALTER TABLE public.issues
  OWNER to postgres;

-- create table activity
CREATE TABLE public.activity
(
  activityid serial NOT NULL,
  "time" timestamp without time zone,
  title character varying(25),
  description text,
  author integer,
  PRIMARY KEY (activityid),
  CONSTRAINT authorforeignkey FOREIGN KEY (author)
    REFERENCES public.users (userid) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
)
WITH (
  OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.activity
  OWNER to postgres;

-- create table roles
CREATE TABLE public.roles
(
  roleid serial NOT NULL,
  rolename character varying(50),
  PRIMARY KEY (roleid)
)
WITH (
  OIDS = FALSE
);

ALTER TABLE public.roles
  OWNER to postgres;

-- create table queries
CREATE TABLE public.queries
(
  queryid serial NOT NULL,
  columnid character varying(5),
  columnname character varying(5),
  columnmember character varying(5),
  PRIMARY KEY (queryid)
)
WITH (
  OIDS = FALSE
);

ALTER TABLE public.queries
  OWNER to postgres;
