--
-- PostgreSQL database dump
--

-- Dumped from database version 12.3 (Debian 12.3-1.pgdg100+1)
-- Dumped by pg_dump version 12.2 (Debian 12.2-2.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: auth_group; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.auth_group (
    id integer NOT NULL,
    name character varying(150) NOT NULL
);


ALTER TABLE public.auth_group OWNER TO postgres;

--
-- Name: auth_group_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.auth_group_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_id_seq OWNER TO postgres;

--
-- Name: auth_group_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.auth_group_id_seq OWNED BY public.auth_group.id;


--
-- Name: auth_group_permissions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.auth_group_permissions (
    id integer NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_group_permissions OWNER TO postgres;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.auth_group_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_permissions_id_seq OWNER TO postgres;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.auth_group_permissions_id_seq OWNED BY public.auth_group_permissions.id;


--
-- Name: auth_permission; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.auth_permission (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);


ALTER TABLE public.auth_permission OWNER TO postgres;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.auth_permission_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_permission_id_seq OWNER TO postgres;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.auth_permission_id_seq OWNED BY public.auth_permission.id;


--
-- Name: auth_user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.auth_user (
    id integer NOT NULL,
    password character varying(128) NOT NULL,
    last_login timestamp with time zone,
    is_superuser boolean NOT NULL,
    username character varying(150) NOT NULL,
    first_name character varying(30) NOT NULL,
    last_name character varying(150) NOT NULL,
    email character varying(254) NOT NULL,
    is_staff boolean NOT NULL,
    is_active boolean NOT NULL,
    date_joined timestamp with time zone NOT NULL
);


ALTER TABLE public.auth_user OWNER TO postgres;

--
-- Name: auth_user_groups; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.auth_user_groups (
    id integer NOT NULL,
    user_id integer NOT NULL,
    group_id integer NOT NULL
);


ALTER TABLE public.auth_user_groups OWNER TO postgres;

--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.auth_user_groups_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_groups_id_seq OWNER TO postgres;

--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.auth_user_groups_id_seq OWNED BY public.auth_user_groups.id;


--
-- Name: auth_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.auth_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_id_seq OWNER TO postgres;

--
-- Name: auth_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.auth_user_id_seq OWNED BY public.auth_user.id;


--
-- Name: auth_user_user_permissions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.auth_user_user_permissions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_user_user_permissions OWNER TO postgres;

--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.auth_user_user_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_user_permissions_id_seq OWNER TO postgres;

--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.auth_user_user_permissions_id_seq OWNED BY public.auth_user_user_permissions.id;


--
-- Name: authtoken_token; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.authtoken_token (
    key character varying(40) NOT NULL,
    created timestamp with time zone NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE public.authtoken_token OWNER TO postgres;

--
-- Name: cabinet_action; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cabinet_action (
    id integer NOT NULL,
    action character varying(30) NOT NULL,
    num integer NOT NULL
);


ALTER TABLE public.cabinet_action OWNER TO postgres;

--
-- Name: cabinet_action_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cabinet_action_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cabinet_action_id_seq OWNER TO postgres;

--
-- Name: cabinet_action_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cabinet_action_id_seq OWNED BY public.cabinet_action.id;


--
-- Name: cabinet_group; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cabinet_group (
    id integer NOT NULL,
    name character varying(30) NOT NULL,
    description character varying(500) NOT NULL
);


ALTER TABLE public.cabinet_group OWNER TO postgres;

--
-- Name: cabinet_group_available_actions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cabinet_group_available_actions (
    id integer NOT NULL,
    group_id integer NOT NULL,
    action_id integer NOT NULL
);


ALTER TABLE public.cabinet_group_available_actions OWNER TO postgres;

--
-- Name: cabinet_group_available_actions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cabinet_group_available_actions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cabinet_group_available_actions_id_seq OWNER TO postgres;

--
-- Name: cabinet_group_available_actions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cabinet_group_available_actions_id_seq OWNED BY public.cabinet_group_available_actions.id;


--
-- Name: cabinet_group_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cabinet_group_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cabinet_group_id_seq OWNER TO postgres;

--
-- Name: cabinet_group_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cabinet_group_id_seq OWNED BY public.cabinet_group.id;


--
-- Name: cabinet_group_participants; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cabinet_group_participants (
    id integer NOT NULL,
    group_id integer NOT NULL,
    profile_id integer NOT NULL
);


ALTER TABLE public.cabinet_group_participants OWNER TO postgres;

--
-- Name: cabinet_group_participants_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cabinet_group_participants_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cabinet_group_participants_id_seq OWNER TO postgres;

--
-- Name: cabinet_group_participants_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cabinet_group_participants_id_seq OWNED BY public.cabinet_group_participants.id;


--
-- Name: cabinet_logging; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cabinet_logging (
    id integer NOT NULL,
    "IP" inet NOT NULL,
    login character varying(30) NOT NULL,
    action character varying(30) NOT NULL,
    status boolean NOT NULL,
    date timestamp with time zone NOT NULL
);


ALTER TABLE public.cabinet_logging OWNER TO postgres;

--
-- Name: cabinet_logging_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cabinet_logging_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cabinet_logging_id_seq OWNER TO postgres;

--
-- Name: cabinet_logging_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cabinet_logging_id_seq OWNED BY public.cabinet_logging.id;


--
-- Name: cabinet_profile; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cabinet_profile (
    user_id integer NOT NULL,
    sex character varying(5) NOT NULL,
    subdivision character varying(30) NOT NULL,
    birth_date date,
    "position" character varying(30) NOT NULL,
    middle_name character varying(30) NOT NULL,
    first_name character varying(30) NOT NULL,
    last_name character varying(30) NOT NULL,
    experience double precision NOT NULL,
    shift character varying(30) NOT NULL,
    part_time_job character varying(30) NOT NULL,
    lateness character varying(30) NOT NULL,
    departament character varying(30) NOT NULL
);


ALTER TABLE public.cabinet_profile OWNER TO postgres;

--
-- Name: cabinet_project; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cabinet_project (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    acceptance_vp boolean NOT NULL,
    chief_designer character varying(100) NOT NULL,
    client character varying(100) NOT NULL,
    comment_for_employees text NOT NULL,
    contract integer NOT NULL,
    deputy_chief_designer character varying(100) NOT NULL,
    direction character varying(100) NOT NULL,
    manager character varying(100) NOT NULL,
    production_order character varying(100) NOT NULL,
    report_availability character varying(15) NOT NULL,
    status character varying(10) NOT NULL,
    type character varying(10) NOT NULL
);


ALTER TABLE public.cabinet_project OWNER TO postgres;

--
-- Name: cabinet_project_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cabinet_project_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cabinet_project_id_seq OWNER TO postgres;

--
-- Name: cabinet_project_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cabinet_project_id_seq OWNED BY public.cabinet_project.id;


--
-- Name: cabinet_report; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cabinet_report (
    id integer NOT NULL,
    text text NOT NULL,
    hour double precision NOT NULL,
    project_id integer NOT NULL,
    date date NOT NULL,
    creator_id_id integer NOT NULL,
    status boolean NOT NULL
);


ALTER TABLE public.cabinet_report OWNER TO postgres;

--
-- Name: cabinet_report_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cabinet_report_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cabinet_report_id_seq OWNER TO postgres;

--
-- Name: cabinet_report_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cabinet_report_id_seq OWNED BY public.cabinet_report.id;


--
-- Name: cabinet_salarycommon; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cabinet_salarycommon (
    id integer NOT NULL,
    days_norm_common double precision NOT NULL,
    time_norm_common double precision NOT NULL,
    date date NOT NULL
);


ALTER TABLE public.cabinet_salarycommon OWNER TO postgres;

--
-- Name: cabinet_salarycommon_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cabinet_salarycommon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cabinet_salarycommon_id_seq OWNER TO postgres;

--
-- Name: cabinet_salarycommon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cabinet_salarycommon_id_seq OWNED BY public.cabinet_salarycommon.id;


--
-- Name: cabinet_salaryindividual; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cabinet_salaryindividual (
    id integer NOT NULL,
    days_worked double precision NOT NULL,
    vacation double precision NOT NULL,
    sick_leave double precision NOT NULL,
    day_off double precision NOT NULL,
    time_from_report double precision NOT NULL,
    time_orion double precision NOT NULL,
    plan_salary double precision NOT NULL,
    award double precision NOT NULL,
    salary_hand double precision NOT NULL,
    date date NOT NULL,
    common_part_id integer NOT NULL,
    person_id integer NOT NULL,
    time_norm double precision NOT NULL,
    time_off double precision NOT NULL,
    is_penalty boolean NOT NULL,
    penalty double precision NOT NULL
);


ALTER TABLE public.cabinet_salaryindividual OWNER TO postgres;

--
-- Name: cabinet_salaryindividual_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cabinet_salaryindividual_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cabinet_salaryindividual_id_seq OWNER TO postgres;

--
-- Name: cabinet_salaryindividual_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cabinet_salaryindividual_id_seq OWNED BY public.cabinet_salaryindividual.id;


--
-- Name: django_admin_log; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.django_admin_log (
    id integer NOT NULL,
    action_time timestamp with time zone NOT NULL,
    object_id text,
    object_repr character varying(200) NOT NULL,
    action_flag smallint NOT NULL,
    change_message text NOT NULL,
    content_type_id integer,
    user_id integer NOT NULL,
    CONSTRAINT django_admin_log_action_flag_check CHECK ((action_flag >= 0))
);


ALTER TABLE public.django_admin_log OWNER TO postgres;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.django_admin_log_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_admin_log_id_seq OWNER TO postgres;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.django_admin_log_id_seq OWNED BY public.django_admin_log.id;


--
-- Name: django_content_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.django_content_type (
    id integer NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);


ALTER TABLE public.django_content_type OWNER TO postgres;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.django_content_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_content_type_id_seq OWNER TO postgres;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.django_content_type_id_seq OWNED BY public.django_content_type.id;


--
-- Name: django_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.django_migrations (
    id integer NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);


ALTER TABLE public.django_migrations OWNER TO postgres;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.django_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_migrations_id_seq OWNER TO postgres;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.django_migrations_id_seq OWNED BY public.django_migrations.id;


--
-- Name: django_session; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);


ALTER TABLE public.django_session OWNER TO postgres;

--
-- Name: auth_group id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_group ALTER COLUMN id SET DEFAULT nextval('public.auth_group_id_seq'::regclass);


--
-- Name: auth_group_permissions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_group_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_group_permissions_id_seq'::regclass);


--
-- Name: auth_permission id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_permission ALTER COLUMN id SET DEFAULT nextval('public.auth_permission_id_seq'::regclass);


--
-- Name: auth_user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_user ALTER COLUMN id SET DEFAULT nextval('public.auth_user_id_seq'::regclass);


--
-- Name: auth_user_groups id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_user_groups ALTER COLUMN id SET DEFAULT nextval('public.auth_user_groups_id_seq'::regclass);


--
-- Name: auth_user_user_permissions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_user_user_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_user_user_permissions_id_seq'::regclass);


--
-- Name: cabinet_action id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_action ALTER COLUMN id SET DEFAULT nextval('public.cabinet_action_id_seq'::regclass);


--
-- Name: cabinet_group id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_group ALTER COLUMN id SET DEFAULT nextval('public.cabinet_group_id_seq'::regclass);


--
-- Name: cabinet_group_available_actions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_group_available_actions ALTER COLUMN id SET DEFAULT nextval('public.cabinet_group_available_actions_id_seq'::regclass);


--
-- Name: cabinet_group_participants id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_group_participants ALTER COLUMN id SET DEFAULT nextval('public.cabinet_group_participants_id_seq'::regclass);


--
-- Name: cabinet_logging id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_logging ALTER COLUMN id SET DEFAULT nextval('public.cabinet_logging_id_seq'::regclass);


--
-- Name: cabinet_project id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_project ALTER COLUMN id SET DEFAULT nextval('public.cabinet_project_id_seq'::regclass);


--
-- Name: cabinet_report id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_report ALTER COLUMN id SET DEFAULT nextval('public.cabinet_report_id_seq'::regclass);


--
-- Name: cabinet_salarycommon id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_salarycommon ALTER COLUMN id SET DEFAULT nextval('public.cabinet_salarycommon_id_seq'::regclass);


--
-- Name: cabinet_salaryindividual id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_salaryindividual ALTER COLUMN id SET DEFAULT nextval('public.cabinet_salaryindividual_id_seq'::regclass);


--
-- Name: django_admin_log id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_admin_log ALTER COLUMN id SET DEFAULT nextval('public.django_admin_log_id_seq'::regclass);


--
-- Name: django_content_type id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_content_type ALTER COLUMN id SET DEFAULT nextval('public.django_content_type_id_seq'::regclass);


--
-- Name: django_migrations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_migrations ALTER COLUMN id SET DEFAULT nextval('public.django_migrations_id_seq'::regclass);


--
-- Data for Name: auth_group; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.auth_group (id, name) FROM stdin;
\.


--
-- Data for Name: auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.auth_group_permissions (id, group_id, permission_id) FROM stdin;
\.


--
-- Data for Name: auth_permission; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.auth_permission (id, name, content_type_id, codename) FROM stdin;
1	Can add log entry	1	add_logentry
2	Can change log entry	1	change_logentry
3	Can delete log entry	1	delete_logentry
4	Can view log entry	1	view_logentry
5	Can add permission	2	add_permission
6	Can change permission	2	change_permission
7	Can delete permission	2	delete_permission
8	Can view permission	2	view_permission
9	Can add group	3	add_group
10	Can change group	3	change_group
11	Can delete group	3	delete_group
12	Can view group	3	view_group
13	Can add user	4	add_user
14	Can change user	4	change_user
15	Can delete user	4	delete_user
16	Can view user	4	view_user
17	Can add content type	5	add_contenttype
18	Can change content type	5	change_contenttype
19	Can delete content type	5	delete_contenttype
20	Can view content type	5	view_contenttype
21	Can add session	6	add_session
22	Can change session	6	change_session
23	Can delete session	6	delete_session
24	Can view session	6	view_session
25	Can add action	7	add_action
26	Can change action	7	change_action
27	Can delete action	7	delete_action
28	Can view action	7	view_action
29	Can add group	8	add_group
30	Can change group	8	change_group
31	Can delete group	8	delete_group
32	Can view group	8	view_group
33	Can add logging	9	add_logging
34	Can change logging	9	change_logging
35	Can delete logging	9	delete_logging
36	Can view logging	9	view_logging
37	Can add profile	10	add_profile
38	Can change profile	10	change_profile
39	Can delete profile	10	delete_profile
40	Can view profile	10	view_profile
41	Can add report	11	add_report
42	Can change report	11	change_report
43	Can delete report	11	delete_report
44	Can view report	11	view_report
45	Can add project	12	add_project
46	Can change project	12	change_project
47	Can delete project	12	delete_project
48	Can view project	12	view_project
49	Can add salary common	13	add_salarycommon
50	Can change salary common	13	change_salarycommon
51	Can delete salary common	13	delete_salarycommon
52	Can view salary common	13	view_salarycommon
53	Can add salary individual	14	add_salaryindividual
54	Can change salary individual	14	change_salaryindividual
55	Can delete salary individual	14	delete_salaryindividual
56	Can view salary individual	14	view_salaryindividual
57	Can add Token	15	add_token
58	Can change Token	15	change_token
59	Can delete Token	15	delete_token
60	Can view Token	15	view_token
\.


--
-- Data for Name: auth_user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) FROM stdin;
1	pbkdf2_sha256$180000$DfOdTmFJFoTU$eDKmtO41YfFABzHZPJXAoBopCcbJ2kDzNUKMvkWk/uw=	2020-08-05 03:34:32.320436+00	t	admin				t	t	2020-08-05 03:34:29.579161+00
2	pbkdf2_sha256$180000$Ozcy5UUmqKGQ$otMGerzMAR4RuYPnvG3IK8Kd553BSle1QYSrZNuRB+k=	\N	f	sanya				f	t	2020-08-05 04:41:55.754622+00
3	pbkdf2_sha256$180000$pGDCysk5qkJ0$dxImPdsUmzVK7oep0I+KXz9Do2Dows00jYKER/fAH+8=	\N	f	kilril				f	t	2020-08-05 04:42:09.534055+00
4	pbkdf2_sha256$180000$cWLYJup4UVBg$K54RUm6la+aas5QR68HyZuWEcJovfARfLQmnMTJaNc0=	\N	f	artem				f	t	2020-08-05 04:42:21.858838+00
5	pbkdf2_sha256$180000$ETaPFEUSWza3$s/USD6PyaIa8HbjS63wBpTVKe5kMAzbqmvu4sGckVlA=	\N	f	grisha				f	t	2020-08-05 04:42:46.832283+00
\.


--
-- Data for Name: auth_user_groups; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.auth_user_groups (id, user_id, group_id) FROM stdin;
\.


--
-- Data for Name: auth_user_user_permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.auth_user_user_permissions (id, user_id, permission_id) FROM stdin;
\.


--
-- Data for Name: authtoken_token; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.authtoken_token (key, created, user_id) FROM stdin;
\.


--
-- Data for Name: cabinet_action; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cabinet_action (id, action, num) FROM stdin;
1	101	101
2	11	11
3	12	12
4	13	13
5	100	100
\.


--
-- Data for Name: cabinet_group; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cabinet_group (id, name, description) FROM stdin;
1	Admins	Top
2	People	Usual people
\.


--
-- Data for Name: cabinet_group_available_actions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cabinet_group_available_actions (id, group_id, action_id) FROM stdin;
1	1	1
2	1	2
3	1	3
4	1	4
5	1	5
6	2	2
7	2	3
8	2	4
\.


--
-- Data for Name: cabinet_group_participants; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cabinet_group_participants (id, group_id, profile_id) FROM stdin;
1	1	1
2	2	2
3	2	3
4	2	4
5	2	5
\.


--
-- Data for Name: cabinet_logging; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cabinet_logging (id, "IP", login, action, status, date) FROM stdin;
\.


--
-- Data for Name: cabinet_profile; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cabinet_profile (user_id, sex, subdivision, birth_date, "position", middle_name, first_name, last_name, experience, shift, part_time_job, lateness, departament) FROM stdin;
1	Male	Physics	2020-08-05	Technician	Ivanovich	Ivan	Ivanov	0				Debili
4	Male	Physics	2020-08-05	Top	Petrovich	Petr	Petrov	0				Debili
5	Male	Physics	2020-08-05	Technician	Alexandrovich	Alexandr	Alexeev	0				Debili
3	Male	Physics	2020-08-05	Technician	Sergeevich	Sergei	Sergeev	0				SVCH
2	Male	Physics	2020-07-15	Top	Petrovich	Alexandr	Sergeev	0				Debili
\.


--
-- Data for Name: cabinet_project; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cabinet_project (id, name, acceptance_vp, chief_designer, client, comment_for_employees, contract, deputy_chief_designer, direction, manager, production_order, report_availability, status, type) FROM stdin;
1	Top group	f	Chief designer	Client		1	Deputy chief designer	North	Manager	2281337			
\.


--
-- Data for Name: cabinet_report; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cabinet_report (id, text, hour, project_id, date, creator_id_id, status) FROM stdin;
\.


--
-- Data for Name: cabinet_salarycommon; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cabinet_salarycommon (id, days_norm_common, time_norm_common, date) FROM stdin;
\.


--
-- Data for Name: cabinet_salaryindividual; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cabinet_salaryindividual (id, days_worked, vacation, sick_leave, day_off, time_from_report, time_orion, plan_salary, award, salary_hand, date, common_part_id, person_id, time_norm, time_off, is_penalty, penalty) FROM stdin;
\.


--
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
1	2020-08-05 04:41:55.890963+00	2	sanya	1	[{"added": {}}]	4	1
2	2020-08-05 04:42:09.667404+00	3	kilril	1	[{"added": {}}]	4	1
3	2020-08-05 04:42:21.986252+00	4	artem	1	[{"added": {}}]	4	1
4	2020-08-05 04:42:46.952189+00	5	grisha	1	[{"added": {}}]	4	1
5	2020-08-05 04:43:34.430896+00	1	admin	1	[{"added": {}}]	10	1
6	2020-08-05 04:44:08.110166+00	4	artem	1	[{"added": {}}]	10	1
7	2020-08-05 04:44:47.816745+00	5	grisha	1	[{"added": {}}]	10	1
8	2020-08-05 04:45:46.497812+00	3	kilril	1	[{"added": {}}]	10	1
9	2020-08-05 04:46:17.628796+00	2	sanya	1	[{"added": {}}]	10	1
10	2020-08-05 04:46:46.469728+00	1	101	1	[{"added": {}}]	7	1
11	2020-08-05 04:46:52.313636+00	2	11	1	[{"added": {}}]	7	1
12	2020-08-05 04:46:56.993619+00	3	12	1	[{"added": {}}]	7	1
13	2020-08-05 04:47:00.362279+00	4	13	1	[{"added": {}}]	7	1
14	2020-08-05 04:47:08.230177+00	5	100	1	[{"added": {}}]	7	1
15	2020-08-05 04:47:26.276667+00	1	Admins	1	[{"added": {}}]	8	1
16	2020-08-05 04:47:50.316088+00	2	People	1	[{"added": {}}]	8	1
17	2020-08-05 04:48:48.705909+00	1	Top group	1	[{"added": {}}]	12	1
\.


--
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.django_content_type (id, app_label, model) FROM stdin;
1	admin	logentry
2	auth	permission
3	auth	group
4	auth	user
5	contenttypes	contenttype
6	sessions	session
7	cabinet	action
8	cabinet	group
9	cabinet	logging
10	cabinet	profile
11	cabinet	report
12	cabinet	project
13	cabinet	salarycommon
14	cabinet	salaryindividual
15	authtoken	token
\.


--
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.django_migrations (id, app, name, applied) FROM stdin;
1	contenttypes	0001_initial	2020-08-05 03:00:21.051765+00
2	auth	0001_initial	2020-08-05 03:00:21.123385+00
3	admin	0001_initial	2020-08-05 03:00:21.192625+00
4	admin	0002_logentry_remove_auto_add	2020-08-05 03:00:21.209591+00
5	admin	0003_logentry_add_action_flag_choices	2020-08-05 03:00:21.21879+00
6	contenttypes	0002_remove_content_type_name	2020-08-05 03:00:21.243721+00
7	auth	0002_alter_permission_name_max_length	2020-08-05 03:00:21.250753+00
8	auth	0003_alter_user_email_max_length	2020-08-05 03:00:21.261315+00
9	auth	0004_alter_user_username_opts	2020-08-05 03:00:21.271637+00
10	auth	0005_alter_user_last_login_null	2020-08-05 03:00:21.28397+00
11	auth	0006_require_contenttypes_0002	2020-08-05 03:00:21.28645+00
12	auth	0007_alter_validators_add_error_messages	2020-08-05 03:00:21.295335+00
13	auth	0008_alter_user_username_max_length	2020-08-05 03:00:21.311615+00
14	auth	0009_alter_user_last_name_max_length	2020-08-05 03:00:21.323774+00
15	auth	0010_alter_group_name_max_length	2020-08-05 03:00:21.335016+00
16	auth	0011_update_proxy_permissions	2020-08-05 03:00:21.348447+00
17	authtoken	0001_initial	2020-08-05 03:00:21.364427+00
18	authtoken	0002_auto_20160226_1747	2020-08-05 03:00:21.419852+00
19	cabinet	0001_initial	2020-08-05 03:00:21.508957+00
20	cabinet	0002_remove_action_action_num	2020-08-05 03:00:21.575786+00
21	cabinet	0003_action_num	2020-08-05 03:00:21.587467+00
22	cabinet	0004_salary	2020-08-05 03:00:21.597903+00
23	cabinet	0005_salary_person	2020-08-05 03:00:21.617957+00
24	cabinet	0006_salary_is_awarded	2020-08-05 03:00:21.63545+00
25	cabinet	0007_auto_20200714_0423	2020-08-05 03:00:21.650476+00
26	cabinet	0008_auto_20200714_0445	2020-08-05 03:00:21.665658+00
27	cabinet	0009_auto_20200715_0240	2020-08-05 03:00:21.732819+00
28	cabinet	0010_auto_20200715_0500	2020-08-05 03:00:21.772651+00
29	cabinet	0011_auto_20200715_0501	2020-08-05 03:00:21.803179+00
30	cabinet	0012_auto_20200715_0503	2020-08-05 03:00:21.831796+00
31	cabinet	0013_profile_departament	2020-08-05 03:00:21.849308+00
32	cabinet	0014_salary_date	2020-08-05 03:00:21.860783+00
33	cabinet	0015_auto_20200716_0522	2020-08-05 03:00:21.875635+00
34	cabinet	0016_remove_report_curator	2020-08-05 03:00:21.890015+00
35	cabinet	0017_auto_20200717_0531	2020-08-05 03:00:21.929269+00
36	cabinet	0018_salaryindividual_time_norm	2020-08-05 03:00:21.976442+00
37	cabinet	0019_salaryindividual_time_off	2020-08-05 03:00:21.991564+00
38	cabinet	0020_auto_20200721_0301	2020-08-05 03:00:22.14692+00
39	cabinet	0021_auto_20200721_0600	2020-08-05 03:00:22.239291+00
40	cabinet	0022_salarycommon_date	2020-08-05 03:00:22.556407+00
41	cabinet	0023_auto_20200722_0328	2020-08-05 03:00:22.595341+00
42	cabinet	0024_auto_20200723_0240	2020-08-05 03:00:22.622054+00
43	cabinet	0025_auto_20200728_0407	2020-08-05 03:00:22.648555+00
44	cabinet	0026_remove_salaryindividual_is_awarded	2020-08-05 03:00:22.659337+00
45	cabinet	0027_auto_20200730_0317	2020-08-05 03:00:22.664897+00
46	cabinet	0028_auto_20200730_0416	2020-08-05 03:00:22.676796+00
47	cabinet	0029_auto_20200730_0541	2020-08-05 03:00:22.716122+00
48	cabinet	0030_auto_20200803_0403	2020-08-05 03:00:22.754359+00
49	sessions	0001_initial	2020-08-05 03:00:22.76473+00
\.


--
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.django_session (session_key, session_data, expire_date) FROM stdin;
06k321aqpdhspp59rzg717iqbr1mhqzg	NDYxMDZlMzcyYjZhMzU2MmVhMWFlNGMzM2FkODJjNmJlZDcyM2EzODp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI5OTQyZmE1MjUxMGY3NGI4N2I1MzRlYWQwZjM2OWZjYjVkMTFhMTFjIn0=	2020-08-19 03:34:32.323903+00
\.


--
-- Name: auth_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.auth_group_id_seq', 1, false);


--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.auth_group_permissions_id_seq', 1, false);


--
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.auth_permission_id_seq', 60, true);


--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.auth_user_groups_id_seq', 1, false);


--
-- Name: auth_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.auth_user_id_seq', 5, true);


--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.auth_user_user_permissions_id_seq', 1, false);


--
-- Name: cabinet_action_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cabinet_action_id_seq', 5, true);


--
-- Name: cabinet_group_available_actions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cabinet_group_available_actions_id_seq', 8, true);


--
-- Name: cabinet_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cabinet_group_id_seq', 2, true);


--
-- Name: cabinet_group_participants_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cabinet_group_participants_id_seq', 5, true);


--
-- Name: cabinet_logging_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cabinet_logging_id_seq', 1, false);


--
-- Name: cabinet_project_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cabinet_project_id_seq', 1, true);


--
-- Name: cabinet_report_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cabinet_report_id_seq', 1, false);


--
-- Name: cabinet_salarycommon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cabinet_salarycommon_id_seq', 1, false);


--
-- Name: cabinet_salaryindividual_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cabinet_salaryindividual_id_seq', 1, false);


--
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.django_admin_log_id_seq', 17, true);


--
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.django_content_type_id_seq', 15, true);


--
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.django_migrations_id_seq', 49, true);


--
-- Name: auth_group auth_group_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);


--
-- Name: auth_group_permissions auth_group_permissions_group_id_permission_id_0cd325b0_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq UNIQUE (group_id, permission_id);


--
-- Name: auth_group_permissions auth_group_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_group auth_group_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);


--
-- Name: auth_permission auth_permission_content_type_id_codename_01ab375a_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq UNIQUE (content_type_id, codename);


--
-- Name: auth_permission auth_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);


--
-- Name: auth_user_groups auth_user_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_pkey PRIMARY KEY (id);


--
-- Name: auth_user_groups auth_user_groups_user_id_group_id_94350c0c_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_group_id_94350c0c_uniq UNIQUE (user_id, group_id);


--
-- Name: auth_user auth_user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_pkey PRIMARY KEY (id);


--
-- Name: auth_user_user_permissions auth_user_user_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_user_user_permissions auth_user_user_permissions_user_id_permission_id_14a6b632_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_permission_id_14a6b632_uniq UNIQUE (user_id, permission_id);


--
-- Name: auth_user auth_user_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_username_key UNIQUE (username);


--
-- Name: authtoken_token authtoken_token_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.authtoken_token
    ADD CONSTRAINT authtoken_token_pkey PRIMARY KEY (key);


--
-- Name: authtoken_token authtoken_token_user_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.authtoken_token
    ADD CONSTRAINT authtoken_token_user_id_key UNIQUE (user_id);


--
-- Name: cabinet_action cabinet_action_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_action
    ADD CONSTRAINT cabinet_action_pkey PRIMARY KEY (id);


--
-- Name: cabinet_group_available_actions cabinet_group_available__group_id_action_id_eb6a2b73_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_group_available_actions
    ADD CONSTRAINT cabinet_group_available__group_id_action_id_eb6a2b73_uniq UNIQUE (group_id, action_id);


--
-- Name: cabinet_group_available_actions cabinet_group_available_actions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_group_available_actions
    ADD CONSTRAINT cabinet_group_available_actions_pkey PRIMARY KEY (id);


--
-- Name: cabinet_group cabinet_group_name_a9db5a66_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_group
    ADD CONSTRAINT cabinet_group_name_a9db5a66_uniq UNIQUE (name);


--
-- Name: cabinet_group_participants cabinet_group_participants_group_id_profile_id_d98e081e_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_group_participants
    ADD CONSTRAINT cabinet_group_participants_group_id_profile_id_d98e081e_uniq UNIQUE (group_id, profile_id);


--
-- Name: cabinet_group_participants cabinet_group_participants_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_group_participants
    ADD CONSTRAINT cabinet_group_participants_pkey PRIMARY KEY (id);


--
-- Name: cabinet_group cabinet_group_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_group
    ADD CONSTRAINT cabinet_group_pkey PRIMARY KEY (id);


--
-- Name: cabinet_logging cabinet_logging_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_logging
    ADD CONSTRAINT cabinet_logging_pkey PRIMARY KEY (id);


--
-- Name: cabinet_profile cabinet_profile_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_profile
    ADD CONSTRAINT cabinet_profile_pkey PRIMARY KEY (user_id);


--
-- Name: cabinet_project cabinet_project_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_project
    ADD CONSTRAINT cabinet_project_pkey PRIMARY KEY (id);


--
-- Name: cabinet_report cabinet_report_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_report
    ADD CONSTRAINT cabinet_report_pkey PRIMARY KEY (id);


--
-- Name: cabinet_salarycommon cabinet_salarycommon_date_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_salarycommon
    ADD CONSTRAINT cabinet_salarycommon_date_key UNIQUE (date);


--
-- Name: cabinet_salarycommon cabinet_salarycommon_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_salarycommon
    ADD CONSTRAINT cabinet_salarycommon_pkey PRIMARY KEY (id);


--
-- Name: cabinet_salaryindividual cabinet_salaryindividual_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_salaryindividual
    ADD CONSTRAINT cabinet_salaryindividual_pkey PRIMARY KEY (id);


--
-- Name: django_admin_log django_admin_log_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);


--
-- Name: django_content_type django_content_type_app_label_model_76bd3d3b_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq UNIQUE (app_label, model);


--
-- Name: django_content_type django_content_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);


--
-- Name: django_migrations django_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);


--
-- Name: django_session django_session_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);


--
-- Name: auth_group_name_a6ea08ec_like; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX auth_group_name_a6ea08ec_like ON public.auth_group USING btree (name varchar_pattern_ops);


--
-- Name: auth_group_permissions_group_id_b120cbf9; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX auth_group_permissions_group_id_b120cbf9 ON public.auth_group_permissions USING btree (group_id);


--
-- Name: auth_group_permissions_permission_id_84c5c92e; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX auth_group_permissions_permission_id_84c5c92e ON public.auth_group_permissions USING btree (permission_id);


--
-- Name: auth_permission_content_type_id_2f476e4b; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX auth_permission_content_type_id_2f476e4b ON public.auth_permission USING btree (content_type_id);


--
-- Name: auth_user_groups_group_id_97559544; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX auth_user_groups_group_id_97559544 ON public.auth_user_groups USING btree (group_id);


--
-- Name: auth_user_groups_user_id_6a12ed8b; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX auth_user_groups_user_id_6a12ed8b ON public.auth_user_groups USING btree (user_id);


--
-- Name: auth_user_user_permissions_permission_id_1fbb5f2c; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX auth_user_user_permissions_permission_id_1fbb5f2c ON public.auth_user_user_permissions USING btree (permission_id);


--
-- Name: auth_user_user_permissions_user_id_a95ead1b; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX auth_user_user_permissions_user_id_a95ead1b ON public.auth_user_user_permissions USING btree (user_id);


--
-- Name: auth_user_username_6821ab7c_like; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX auth_user_username_6821ab7c_like ON public.auth_user USING btree (username varchar_pattern_ops);


--
-- Name: authtoken_token_key_10f0b77e_like; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX authtoken_token_key_10f0b77e_like ON public.authtoken_token USING btree (key varchar_pattern_ops);


--
-- Name: cabinet_group_available_actions_action_id_24ff4321; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cabinet_group_available_actions_action_id_24ff4321 ON public.cabinet_group_available_actions USING btree (action_id);


--
-- Name: cabinet_group_available_actions_group_id_d9e33349; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cabinet_group_available_actions_group_id_d9e33349 ON public.cabinet_group_available_actions USING btree (group_id);


--
-- Name: cabinet_group_name_a9db5a66_like; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cabinet_group_name_a9db5a66_like ON public.cabinet_group USING btree (name varchar_pattern_ops);


--
-- Name: cabinet_group_participants_group_id_caf96ef5; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cabinet_group_participants_group_id_caf96ef5 ON public.cabinet_group_participants USING btree (group_id);


--
-- Name: cabinet_group_participants_profile_id_1b37e97a; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cabinet_group_participants_profile_id_1b37e97a ON public.cabinet_group_participants USING btree (profile_id);


--
-- Name: cabinet_report_creator_id_id_bfdf1d19; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cabinet_report_creator_id_id_bfdf1d19 ON public.cabinet_report USING btree (creator_id_id);


--
-- Name: cabinet_report_project_id_c4201231; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cabinet_report_project_id_c4201231 ON public.cabinet_report USING btree (project_id);


--
-- Name: cabinet_salaryindividual_common_part_id_ab8df0c3; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cabinet_salaryindividual_common_part_id_ab8df0c3 ON public.cabinet_salaryindividual USING btree (common_part_id);


--
-- Name: cabinet_salaryindividual_person_id_40cf3092; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cabinet_salaryindividual_person_id_40cf3092 ON public.cabinet_salaryindividual USING btree (person_id);


--
-- Name: django_admin_log_content_type_id_c4bce8eb; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX django_admin_log_content_type_id_c4bce8eb ON public.django_admin_log USING btree (content_type_id);


--
-- Name: django_admin_log_user_id_c564eba6; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX django_admin_log_user_id_c564eba6 ON public.django_admin_log USING btree (user_id);


--
-- Name: django_session_expire_date_a5c62663; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX django_session_expire_date_a5c62663 ON public.django_session USING btree (expire_date);


--
-- Name: django_session_session_key_c0390e0f_like; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX django_session_session_key_c0390e0f_like ON public.django_session USING btree (session_key varchar_pattern_ops);


--
-- Name: auth_group_permissions auth_group_permissio_permission_id_84c5c92e_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permissions auth_group_permissions_group_id_b120cbf9_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_permission auth_permission_content_type_id_2f476e4b_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_groups auth_user_groups_group_id_97559544_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_group_id_97559544_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_groups auth_user_groups_user_id_6a12ed8b_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_6a12ed8b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_user_permissions auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_user_permissions auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: authtoken_token authtoken_token_user_id_35299eff_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.authtoken_token
    ADD CONSTRAINT authtoken_token_user_id_35299eff_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: cabinet_group_available_actions cabinet_group_availa_action_id_24ff4321_fk_cabinet_a; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_group_available_actions
    ADD CONSTRAINT cabinet_group_availa_action_id_24ff4321_fk_cabinet_a FOREIGN KEY (action_id) REFERENCES public.cabinet_action(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: cabinet_group_available_actions cabinet_group_availa_group_id_d9e33349_fk_cabinet_g; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_group_available_actions
    ADD CONSTRAINT cabinet_group_availa_group_id_d9e33349_fk_cabinet_g FOREIGN KEY (group_id) REFERENCES public.cabinet_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: cabinet_group_participants cabinet_group_partic_group_id_caf96ef5_fk_cabinet_g; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_group_participants
    ADD CONSTRAINT cabinet_group_partic_group_id_caf96ef5_fk_cabinet_g FOREIGN KEY (group_id) REFERENCES public.cabinet_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: cabinet_group_participants cabinet_group_partic_profile_id_1b37e97a_fk_cabinet_p; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_group_participants
    ADD CONSTRAINT cabinet_group_partic_profile_id_1b37e97a_fk_cabinet_p FOREIGN KEY (profile_id) REFERENCES public.cabinet_profile(user_id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: cabinet_profile cabinet_profile_user_id_3028da15_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_profile
    ADD CONSTRAINT cabinet_profile_user_id_3028da15_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: cabinet_report cabinet_report_creator_id_id_bfdf1d19_fk_cabinet_p; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_report
    ADD CONSTRAINT cabinet_report_creator_id_id_bfdf1d19_fk_cabinet_p FOREIGN KEY (creator_id_id) REFERENCES public.cabinet_profile(user_id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: cabinet_report cabinet_report_project_id_c4201231_fk_cabinet_project_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_report
    ADD CONSTRAINT cabinet_report_project_id_c4201231_fk_cabinet_project_id FOREIGN KEY (project_id) REFERENCES public.cabinet_project(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: cabinet_salaryindividual cabinet_salaryindivi_common_part_id_ab8df0c3_fk_cabinet_s; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_salaryindividual
    ADD CONSTRAINT cabinet_salaryindivi_common_part_id_ab8df0c3_fk_cabinet_s FOREIGN KEY (common_part_id) REFERENCES public.cabinet_salarycommon(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: cabinet_salaryindividual cabinet_salaryindivi_person_id_40cf3092_fk_cabinet_p; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_salaryindividual
    ADD CONSTRAINT cabinet_salaryindivi_person_id_40cf3092_fk_cabinet_p FOREIGN KEY (person_id) REFERENCES public.cabinet_profile(user_id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_content_type_id_c4bce8eb_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_user_id_c564eba6_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_user_id_c564eba6_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- PostgreSQL database dump complete
--

