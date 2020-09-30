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
-- Name: cabinet_calendarmark; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cabinet_calendarmark (
    id integer NOT NULL,
    type character varying(50) NOT NULL,
    start_date date NOT NULL,
    end_date date NOT NULL,
    person_id integer
);


ALTER TABLE public.cabinet_calendarmark OWNER TO postgres;

--
-- Name: cabinet_calendarmark_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cabinet_calendarmark_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cabinet_calendarmark_id_seq OWNER TO postgres;

--
-- Name: cabinet_calendarmark_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cabinet_calendarmark_id_seq OWNED BY public.cabinet_calendarmark.id;


--
-- Name: cabinet_department; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cabinet_department (
    id integer NOT NULL,
    department_code character varying(50) NOT NULL,
    department_name character varying(100) NOT NULL,
    subdepartment_code character varying(100) NOT NULL
);


ALTER TABLE public.cabinet_department OWNER TO postgres;

--
-- Name: cabinet_department_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cabinet_department_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cabinet_department_id_seq OWNER TO postgres;

--
-- Name: cabinet_department_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cabinet_department_id_seq OWNED BY public.cabinet_department.id;


--
-- Name: cabinet_direction; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cabinet_direction (
    id integer NOT NULL,
    direction_name character varying(30) NOT NULL,
    subdepartment_id integer,
    direction_code character varying(50) NOT NULL
);


ALTER TABLE public.cabinet_direction OWNER TO postgres;

--
-- Name: cabinet_direction_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cabinet_direction_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cabinet_direction_id_seq OWNER TO postgres;

--
-- Name: cabinet_direction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cabinet_direction_id_seq OWNED BY public.cabinet_direction.id;


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
-- Name: cabinet_group_actions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cabinet_group_actions (
    id integer NOT NULL,
    group_id integer NOT NULL,
    action_id integer NOT NULL
);


ALTER TABLE public.cabinet_group_actions OWNER TO postgres;

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

ALTER SEQUENCE public.cabinet_group_available_actions_id_seq OWNED BY public.cabinet_group_actions.id;


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
-- Name: cabinet_groupaction; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cabinet_groupaction (
    id integer NOT NULL,
    name character varying(30) NOT NULL
);


ALTER TABLE public.cabinet_groupaction OWNER TO postgres;

--
-- Name: cabinet_groupaction_available_actions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cabinet_groupaction_available_actions (
    id integer NOT NULL,
    groupaction_id integer NOT NULL,
    action_id integer NOT NULL
);


ALTER TABLE public.cabinet_groupaction_available_actions OWNER TO postgres;

--
-- Name: cabinet_groupaction_available_actions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cabinet_groupaction_available_actions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cabinet_groupaction_available_actions_id_seq OWNER TO postgres;

--
-- Name: cabinet_groupaction_available_actions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cabinet_groupaction_available_actions_id_seq OWNED BY public.cabinet_groupaction_available_actions.id;


--
-- Name: cabinet_groupaction_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cabinet_groupaction_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cabinet_groupaction_id_seq OWNER TO postgres;

--
-- Name: cabinet_groupaction_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cabinet_groupaction_id_seq OWNED BY public.cabinet_groupaction.id;


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
    sex character varying(10) NOT NULL,
    birth_date date,
    "position" character varying(30) NOT NULL,
    middle_name character varying(30) NOT NULL,
    first_name character varying(30) NOT NULL,
    last_name character varying(30) NOT NULL,
    experience double precision NOT NULL,
    shift boolean NOT NULL,
    part_time_job boolean NOT NULL,
    lateness character varying(30) NOT NULL,
    "SRI_SAS" boolean NOT NULL,
    department_id integer,
    direction_id integer,
    fine_late time without time zone NOT NULL,
    oklad boolean NOT NULL,
    employment_date date
);


ALTER TABLE public.cabinet_profile OWNER TO postgres;

--
-- Name: cabinet_project; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cabinet_project (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    direction_id integer,
    client character varying(100) NOT NULL,
    production_order character varying(100) NOT NULL,
    comment_for_employees text NOT NULL,
    contract character varying(100) NOT NULL,
    type boolean NOT NULL,
    status boolean NOT NULL,
    report_availability boolean NOT NULL,
    acceptance_vp boolean NOT NULL,
    chief_designer_id integer,
    deputy_chief_designer_id integer,
    manager_id integer
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
    status boolean NOT NULL,
    text text NOT NULL,
    hour double precision NOT NULL,
    date date NOT NULL,
    creator_id_id integer,
    project_id integer,
    ban_id_id integer,
    check_id_id integer,
    "check" boolean NOT NULL
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
    time_norm double precision NOT NULL,
    time_off double precision NOT NULL,
    plan_salary double precision NOT NULL,
    award double precision NOT NULL,
    penalty double precision NOT NULL,
    is_penalty boolean NOT NULL,
    salary_hand double precision NOT NULL,
    date date NOT NULL,
    common_part_id integer,
    person_id integer
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
-- Name: cabinet_timecard; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cabinet_timecard (
    id integer NOT NULL,
    "user" integer NOT NULL,
    orion_id integer NOT NULL,
    intellect_id integer NOT NULL,
    leaving time without time zone NOT NULL,
    late time without time zone NOT NULL,
    fine_late time without time zone NOT NULL,
    hooky time without time zone NOT NULL,
    hours_worked time without time zone NOT NULL,
    date date NOT NULL
);


ALTER TABLE public.cabinet_timecard OWNER TO postgres;

--
-- Name: cabinet_timecard_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cabinet_timecard_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cabinet_timecard_id_seq OWNER TO postgres;

--
-- Name: cabinet_timecard_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cabinet_timecard_id_seq OWNED BY public.cabinet_timecard.id;


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
-- Name: cabinet_calendarmark id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_calendarmark ALTER COLUMN id SET DEFAULT nextval('public.cabinet_calendarmark_id_seq'::regclass);


--
-- Name: cabinet_department id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_department ALTER COLUMN id SET DEFAULT nextval('public.cabinet_department_id_seq'::regclass);


--
-- Name: cabinet_direction id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_direction ALTER COLUMN id SET DEFAULT nextval('public.cabinet_direction_id_seq'::regclass);


--
-- Name: cabinet_group id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_group ALTER COLUMN id SET DEFAULT nextval('public.cabinet_group_id_seq'::regclass);


--
-- Name: cabinet_group_actions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_group_actions ALTER COLUMN id SET DEFAULT nextval('public.cabinet_group_available_actions_id_seq'::regclass);


--
-- Name: cabinet_group_participants id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_group_participants ALTER COLUMN id SET DEFAULT nextval('public.cabinet_group_participants_id_seq'::regclass);


--
-- Name: cabinet_groupaction id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_groupaction ALTER COLUMN id SET DEFAULT nextval('public.cabinet_groupaction_id_seq'::regclass);


--
-- Name: cabinet_groupaction_available_actions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_groupaction_available_actions ALTER COLUMN id SET DEFAULT nextval('public.cabinet_groupaction_available_actions_id_seq'::regclass);


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
-- Name: cabinet_timecard id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_timecard ALTER COLUMN id SET DEFAULT nextval('public.cabinet_timecard_id_seq'::regclass);


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
29	Can add department	8	add_department
30	Can change department	8	change_department
31	Can delete department	8	delete_department
32	Can view department	8	view_department
33	Can add direction	9	add_direction
34	Can change direction	9	change_direction
35	Can delete direction	9	delete_direction
36	Can view direction	9	view_direction
37	Can add logging	10	add_logging
38	Can change logging	10	change_logging
39	Can delete logging	10	delete_logging
40	Can view logging	10	view_logging
41	Can add profile	11	add_profile
42	Can change profile	11	change_profile
43	Can delete profile	11	delete_profile
44	Can view profile	11	view_profile
45	Can add project	12	add_project
46	Can change project	12	change_project
47	Can delete project	12	delete_project
48	Can view project	12	view_project
49	Can add salary common	13	add_salarycommon
50	Can change salary common	13	change_salarycommon
51	Can delete salary common	13	delete_salarycommon
52	Can view salary common	13	view_salarycommon
53	Can add time card	14	add_timecard
54	Can change time card	14	change_timecard
55	Can delete time card	14	delete_timecard
56	Can view time card	14	view_timecard
57	Can add subdepartment	15	add_subdepartment
58	Can change subdepartment	15	change_subdepartment
59	Can delete subdepartment	15	delete_subdepartment
60	Can view subdepartment	15	view_subdepartment
61	Can add salary individual	16	add_salaryindividual
62	Can change salary individual	16	change_salaryindividual
63	Can delete salary individual	16	delete_salaryindividual
64	Can view salary individual	16	view_salaryindividual
65	Can add report	17	add_report
66	Can change report	17	change_report
67	Can delete report	17	delete_report
68	Can view report	17	view_report
69	Can add group	18	add_group
70	Can change group	18	change_group
71	Can delete group	18	delete_group
72	Can view group	18	view_group
73	Can add Token	19	add_token
74	Can change Token	19	change_token
75	Can delete Token	19	delete_token
76	Can view Token	19	view_token
77	Can add calendar mark	20	add_calendarmark
78	Can change calendar mark	20	change_calendarmark
79	Can delete calendar mark	20	delete_calendarmark
80	Can view calendar mark	20	view_calendarmark
81	Can add group action	21	add_groupaction
82	Can change group action	21	change_groupaction
83	Can delete group action	21	delete_groupaction
84	Can view group action	21	view_groupaction
\.


--
-- Data for Name: auth_user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) FROM stdin;
2	pbkdf2_sha256$180000$6ZaKNCAwjJcg$ETnS6MnY5lFdzIhty7o+8jQjndMuyKMOWtR9THu+Y8Q=	\N	f	user_1				f	t	2020-08-18 03:22:37+00
3	pbkdf2_sha256$180000$Tv0k0O1L9o8y$uN4GriJX8uDzXf1QEm02fC7T4Bl3B0kqF6xmI4OgPZg=	\N	f	user_2				f	t	2020-08-18 03:23:35.651062+00
4	pbkdf2_sha256$180000$mS0lolQ1jxcH$S3CHddCQwtcOYb0Iddp7u4amq6wuXpsLcPnTg2CEVlk=	\N	f	user_3				f	t	2020-08-18 03:24:27.797006+00
5	pbkdf2_sha256$180000$Dc1wOTY6LYFO$nx4SZhQizjjeTQWvqkvSwWRrjw9YlT5mOv8EYbePehU=	\N	f	user_4				f	t	2020-08-18 03:25:13.005881+00
6	pbkdf2_sha256$180000$X0lA28sBwxiN$OdJNUKxuCLiEWBYK3HzwWbZYW/6sebGgBvX1/oXuUj8=	\N	f	user_5				f	t	2020-08-18 03:27:25.611265+00
7	pbkdf2_sha256$180000$5uJVS4WIn5wE$KipkoW6VFbtmNoWwdiM5IAVO4FWXSm9qbwCaMtaLnFw=	\N	f	user_6				f	t	2020-08-26 05:44:09.288933+00
8	pbkdf2_sha256$180000$gp3KT3UwA3Ak$aC88QSddyugwGEsW0l7+xdNMlgtAYhzCbkO8IxrUoK4=	\N	f	user_7				f	t	2020-08-26 05:45:03.783023+00
9	pbkdf2_sha256$180000$mrIDELuEWe8f$8hJB3dkHhe1gR/bGoqQurYZaQwCrLeeFRJb9XMbu394=	\N	f	user_8				f	t	2020-08-26 05:45:52.158532+00
10	pbkdf2_sha256$180000$XW7Nyt2E66eE$vtQhmbonMHQxm8Cf87QIAdOO/po8jkD/F3wKYbdS6Qs=	\N	f	user_9				f	t	2020-08-26 05:46:43.501917+00
11	pbkdf2_sha256$180000$lr1FovQ15zdp$P4yMrfueRs9vfnVM62ebuJDYJKbQW56yA1IkIEqF7t0=	\N	f	user_10				f	t	2020-08-26 05:47:36.218974+00
1	pbkdf2_sha256$180000$HV1eogJkO7PC$xGd1w2Te+5Nuy9XHyn44J33omvh7kxBiu55XltkobJ4=	2020-09-16 11:45:42.629812+00	t	admin				t	t	2020-08-18 03:08:40.451566+00
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
5	101	101
6	100	100
7	11	11
8	12	12
9	13	13
\.


--
-- Data for Name: cabinet_calendarmark; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cabinet_calendarmark (id, type, start_date, end_date, person_id) FROM stdin;
1	undefined	2020-08-19	2020-08-25	1
2	undefined	2020-09-01	2020-09-20	1
3	undefined	2020-09-21	2020-09-21	1
4	undefined	2020-08-21	2020-08-21	1
5	paid_holiday	2020-08-21	2020-08-25	1
7	undefined	2020-08-01	2020-08-04	1
8	sick_leave	2020-08-26	2020-08-20	2
9	hooky	2020-08-10	2020-08-26	3
10	study_holiday	2020-07-26	2020-08-26	4
11	planned_holiday	2020-05-26	2020-06-20	5
12	event	2020-08-05	2020-08-26	6
\.


--
-- Data for Name: cabinet_department; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cabinet_department (id, department_code, department_name, subdepartment_code) FROM stdin;
1	2	Департамент финансов	0
3	6	Планово-экономический отдел	2
4	10	Департамент маркетинга и продаж	0
5	15	Служба качества	0
6	16	Бюро управления качеством (БУК)	15
7	17	Отдел технического контроля (ОТК)	15
8	19	Отдел главного метролога	0
9	20	Служба технического директора	0
10	21	Конструкторский отдел	20
11	22	Департамент СВЧ электроники	0
12	24	Планово-диспетчерская служба	22
13	30	Департамент телекоммуникаций	0
14	34	Отдел беспроводного доступа	30
15	35	Отдел аппаратуры доступа	30
16	36	Отдел программных решений	30
17	37	Отдел мультиплексорного оборудования	30
18	39	Департамент информационно-измерительных систем	0
19	42	Отдел синтезаторов частот	268
20	43	Отдел цифровой схемотехники	268
21	44	Отдел элементов СВЧ тракта	268
22	45	Отдел СВЧ схемотехники	268
23	46	Производственный отдел	39
24	47	Служба эксплуатации	0
25	49	Завод радиоэлектронной аппаратуры	0
26	50	Планово-диспетчерский отдел	49
27	52	Отдел капитального строительства	0
28	53	НПК "Микроэлектроника"	0
29	54	Планово-диспетчерская служба	53
30	55	Производственный отдел ГИС	53
31	57	Участок химии	55
32	58	Участок лазеров	55
33	59	Участок напыления	55
34	60	Участок контроля	55
35	62	Участок гермовводов	55
36	63	Производственный отдел СВЧ МИС	53
37	65	Участок утонения и резки	63
38	66	Участок вакуумных и плазменных процессов МИС	63
39	67	Участок выходного контроля МИС	63
40	68	Участок надежности МИС	63
41	69	Конструкторско-технологический отдел СВЧ МИС	53
42	70	Лаборатория коммутационных МИС	69
43	77	Отдел продаж	10
44	78	НИИ СЭС	0
45	86	Калибровочная лаборатория	19
46	87	Отдел главного технолога	20
47	91	Производство "Металлообработка"	49
48	92	Отдел ОТиОС	47
49	100	Материальная кладовая	161
50	101	Архив	163
51	107	Производство телекоммуникационной аппаратуры	49
52	108	Отдел главного конструктора завода РЭА	20
53	109	Отдел главного механика	47
54	111	Испытательная лаборатория	263
55	112	Цех СВЧ модулей	49
56	113	Испытательный участок	263
57	114	Участок нижнего оборудования	107
58	115	Цех приемо-передающих устройств	107
59	117	Участок монтажа печатных плат	118
60	118	Цех сборочно-монтажный	49
61	124	Цех комплектования и упаковки готовой продукции	49
62	125	Лаборатория усилительных МИС	69
63	126	Лаборатория диодных МИС	69
64	128	Представительство АО "НПФ "Микран" в г.Москва	0
65	132	Бюро драгоценных металлов	290
66	153	Лаборатория литографии, химии и электрохимии МИС	63
67	156	Отдел главного энергетика	47
68	157	Административно-хозяйственный отдел	47
69	158	Бюро технического контроля производства "Металлообработка" (БТК 2)	17
70	160	Лаборатория GaN МИС	69
71	161	Планово-диспетчерская служба	91
72	163	Технологический отдел	91
73	164	Отдел метрологии	78
74	165	Юридический отдел	2
75	166	Группа метрологической экспертизы	19
76	167	Группа ремонта средств измерений	19
77	168	Технологическое бюро разработки технологических процессов	87
78	171	Лаборатория полимерных материалов	20
79	176	Цех антенно-фидерных устройств	49
80	177	Отдел снабжения	91
81	178	Слесарный участок	91
82	180	Участок станков с ЧПУ	91
83	183	Столярный участок	124
84	184	Служба технического обслуживания	118
85	185	Диспетчерская служба	118
2	3	Бухгалтерия	2000
86	186	Участок пайки и радиомонтажа	118
87	187	Участок микросварки и наклейки	118
88	190	ООО "Микран-Групп"	0
89	200	Участок автоматического монтажа печатных плат	118
90	202	Производство мобильных комплексов связи (МКС)	0
91	204	Группа конструкторов	21
92	206	Технологический отдел	202
93	208	Служба сопровождения и эксплуатации	202
94	210	Сборочный цех	202
95	211	Радиомонтажный цех	202
96	213	Механический цех	202
97	216	Участок комплексной настройки	115
98	217	Участок настройки узлов	115
99	218	Участок частотно-избирательных устройств	115
100	219	Участок монтажа	115
101	220	Участок ремонта	115
102	223	Технологическое бюро сборки и настройки радиорелейного оборудования	87
103	224	Технологическое бюро сборки печатных плат	87
104	225	Технологическое бюро сборки и настройки СВЧ модулей	87
105	226	Группа технического контроля	21
106	234	Испытательный участок	112
107	256	Бюро входного контроля (БВК)	17
108	257	Бюро технического контроля завода РЭА (БТК 1)	17
109	259	Бюро технического контроля ДИИС (БТК 4)	17
110	260	Бюро технического контроля производства мобильных комплексов связи (БТК 5)	17
111	261	Бюро технического контроля качества разработок (БТК 6)	17
112	262	Бюро технического контроля НПК "Микролектроника" (БТК 7)	17
113	263	Испытательное подразделение	19
114	265	Отдел технической поддержки	202
115	266	Полигон	202
116	267	Транспортный отдел	202
117	268	Отделение НИОКР	39
118	277	Конструкторский отдел	22
119	278	Отдел приёмо-передающих модулей	22
120	279	Отдел монолитных интегральных схем	22
121	280	Опытное производство	22
122	281	Отдел научно-исследовательских работ	22
123	285	Экономико-аналитическая служба	22
124	286	Отдел цифровых устройств	22
125	287	Системная группа	22
126	288	Группа внедрения в производство радиолокационного оборудования	22
127	289	Отдел программного обеспечения	22
128	290	Отдел драгоценных металлов	20
129	291	Участок литографии, химии и электрохимии	153
130	292	Участок литографии, химии и электрохимии при НОЦ ТУСУР	153
131	293	Общий отдел	3
132	294	Отдел кассовых операций	3
133	295	Отдел труда и заработной платы	2
134	296	Группа контроля ПУ	257
135	297	Бюро технического контроля ПТА (БТК 3)	17
136	299	Научный отдел	39
137	300	Монтажный участок	416
138	301	Участок калибровки	416
139	302	Участок настройки модулей	416
140	303	Участок элементов СВЧ тракта	414
141	306	Группа по встроенному программному обеспечению	43
142	307	Группа прикладного программного обеспечения	43
143	308	Отдел сервисной поддержки	39
144	309	Отдел прикладной метрологии	39
145	310	Группа настройки модулей №1	112
146	311	Группа настройки модулей №2	112
147	312	Группа настройки модулей №3	112
148	313	Группа настройки модулей №4	112
149	314	Участок электроснабжения	156
150	315	Участок тепло и водоснабжения	156
151	316	Участок эксплуатации оборудования	109
152	317	Участок ремонта и модернизации оборудования	109
153	321	Отдел взаимодействия с силовыми структурами	128
154	322	Отдел развития	128
155	323	Отдел сервисного обслуживания	128
156	324	Отдел продаж и продвижения продукции	128
157	326	Участок настройки и испытания	211
158	327	Конструкторский отдел	202
159	328	Участок фрезерных станков с ЧПУ	180
160	329	Участок токарных станков с ЧПУ	180
161	330	Электроэрозионный участок	178
162	331	Участок листообработки с ЧПУ	178
163	332	Термический участок	178
164	333	Промывочный участок	178
165	334	Сварочный участок	178
166	335	Участок электрохимических операций	91
167	338	Планово-диспетчерский отдел	202
168	340	Участок универсальных станков	91
169	341	Заготовительный участок	340
170	342	Токарный участок	340
171	343	Фрезерный участок	340
172	344	Департамент управления персоналом и организационного развития	0
173	345	Секретариат	344
174	346	Отдел по работе с персоналом	344
175	347	Отдел кадров	344
176	348	Энергоцентр	47
177	349	Планово-диспетчерский отдел	47
178	350	Диспетчерская группа ПТА	107
179	351	Казначейство	2
180	352	Финансово-экономический отдел	2
181	353	Отдел главного механика	202
182	354	Участок сборки кузовов-фургонов	210
183	355	Участок сборки МИК-АПУ	210
184	356	Участок покраски	210
185	357	Участок финишной сборки	210
186	358	Департамент экономики и планирования	0
187	362	Отдел информатизации и развития бизнес-процессов	358
188	364	Департамент снабжения и логистики	0
189	365	Отдел материально-технического обеспечения	364
190	370	Отдел транспортной логистики	364
191	371	Группа логистического обеспечения	370
192	372	Группа транспортного обеспечения	370
193	373	Отдел управления запасами и складской логистики	364
194	374	Склад материалов и полуфабрикатов НПК	373
195	375	Склад материалов и полуфабрикатов ДИИС	373
196	376	Склад материалов и полуфабрикатов ДТК	373
197	377	Склад материалов и полуфабрикатов ДСВЧЭ	373
198	378	Склад материалов и полуфабрикатов МКС	373
199	379	Склад готовой продукции	373
200	380	Склад центральный	373
201	381	Склад драгоценных металлов	380
202	382	Склад внешней кооперации	380
203	383	Группа сопровождения проектов	30
204	384	Департамент безопасности	0
205	385	Научно-техническое управление	0
206	386	Отдел информационных технологий	384
207	388	Группа проектная	386
208	389	Группа серверного и сетевого администрирования	386
209	390	Группа поддержки пользователей	386
210	391	Научно-технический отдел	385
211	392	Патентный отдел	385
212	393	Участок опытной механообработки	22
213	394	Инженерный отдел КСБ	384
214	395	Служба общей безопасности	384
215	396	Комендантская служба	395
216	397	Бюро пропусков	395
217	398	Отдел экономической безопасности	384
218	399	Отдел ГО и ЧС	384
219	401	Отдел маркетинговых проектов	10
220	402	Отдел маркетингового анализа	10
221	403	Отдел маркетинговых коммуникаций	10
222	404	Участок отмывки и подготовки	118
223	407	Отдел технической документации	20
224	408	Отдел стандартизации	20
225	410	Административно-управленческий отдел	39
226	411	Конструкторско-технологический отдел	268
227	412	Группа разработки СВЧ узлов и МИС	45
228	413	Группа программирования ПЛИС	43
229	414	Отдел производства ЭСТ	46
230	415	Участок СВЧ кабельных сборок	414
231	416	Отдел производства КИА	46
232	417	Испытательный участок	301
233	418	Участок монтажа печатных плат	416
234	419	Участок упаковки	416
235	420	Планово-диспетчерская служба	46
236	421	Склад	420
237	422	Группа настройки модулей №5	112
238	423	Служба режима	0
239	424	Отдел по противодействию иностранным техническим разведкам и технической защите информации	423
240	425	Режимно-секретное подразделение	423
241	426	Медицинский кабинет	47
242	427	Филиал АО "НПФ "Микран" в г.Москва	0
243	428	Отдел маркетингового сопровождения	10
244	429	Служба внутреннего аудита	0
245	430	Группа безналичных расчетов	294
246	431	Испытательная лаборатория	69
247	434	Группа по проведению конкурентных процедур	364
248	435	Научно-технический центр производства мобильных комплексов связи	128
249	436	Участок упаковки	124
250	437	Склад ЦК и УГП	124
251	438	Отдел передающих устройств	22
252	439	Отдел вторичных источников питания	22
253	440	Отдел малошумящих устройств	22
254	441	Отдел системных решений	22
255	442	Отдел цифровых и программных решений	22
256	443	Отдел пассивных устройств	22
257	444	Испытательная лаборатория	280
258	445	Экономико-аналитический отдел	49
259	446	Отдел обслуживания и ремонта	53
260	447	Группа кассовых операций	294
261	448	Отдел учета ТМЦ	3
262	449	Отдел учета расчетов с персоналом	3
263	450	Отдел технического анализа	20
264	451	Группа по комплектации проектов	365
265	452	Группа по обеспечению внешнеэкономической деятельности	365
266	453	Группа противодействия утечке информации	384
267	454	Отдел планирования, учета и отчетности	433
268	455	Производственно-диспетчерский отдел предприятия	0
269	456	Производственная группа №1	455
270	457	Производственная группа №2	455
271	458	Производственная группа №3	455
272	459	Группа логистики	455
273	460	Группа кооперации	455
274	461	Отдел высокоскоростных систем связи	30
275	462	Отдел малоканальных систем связи	30
276	463	Отдел внедрения в производство	30
277	464	Отдел мехатроники	30
278	465	Конструкторский отдел	30
279	466	Отдел управления проектами	30
\.


--
-- Data for Name: cabinet_direction; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cabinet_direction (id, direction_name, subdepartment_id, direction_code) FROM stdin;
1	Administrating	\N	
2	Development	\N	
3	Maintenance	\N	
\.


--
-- Data for Name: cabinet_group; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cabinet_group (id, name, description) FROM stdin;
7	111111111111111111111	dsfd
4	People	вавывыавыа
5	ghjgвывыаавы	ввыавыавыыва
3	Adminsdasdas	Топ группаfffff
6	dfddfa	fdsdsfdf
8	выавываывавывыа	
2	Defaultfsfd	dsfsdf
1	Godsfsdfds	вавывыавыа
\.


--
-- Data for Name: cabinet_group_actions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cabinet_group_actions (id, group_id, action_id) FROM stdin;
1	8	8
2	8	9
3	8	7
4	2	8
6	1	7
7	1	8
8	7	6
9	5	8
\.


--
-- Data for Name: cabinet_group_participants; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cabinet_group_participants (id, group_id, profile_id) FROM stdin;
1	1	1
2	1	2
3	1	6
4	2	3
5	2	4
6	2	5
7	3	3
8	3	4
9	3	5
10	4	7
11	4	8
12	4	9
13	4	10
14	4	11
15	5	3
16	5	4
17	5	5
18	8	3
19	8	8
20	8	11
21	8	7
\.


--
-- Data for Name: cabinet_groupaction; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cabinet_groupaction (id, name) FROM stdin;
1	личные
2	
\.


--
-- Data for Name: cabinet_groupaction_available_actions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cabinet_groupaction_available_actions (id, groupaction_id, action_id) FROM stdin;
1	1	8
2	1	6
3	1	7
\.


--
-- Data for Name: cabinet_logging; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cabinet_logging (id, "IP", login, action, status, date) FROM stdin;
1	185.210.141.96	admin	login	t	2020-08-18 04:15:12.765452+00
2	22.22.22.22	admin	login	t	2020-08-18 05:19:11.549938+00
3	185.210.141.96	admin	login	f	2020-08-18 05:35:22.718901+00
4	185.210.141.96	admin	login	t	2020-08-18 05:35:45.672183+00
5	185.210.141.96	admin	login	t	2020-08-18 05:36:24.045761+00
6	22.22.22.22	admin	login	t	2020-08-19 03:24:01.437314+00
7	185.210.140.250	admin	login	t	2020-08-20 03:09:17.124368+00
8	185.210.140.250	admin	login	t	2020-08-20 03:11:42.46401+00
9	22.22.22.22	admin	login	t	2020-08-20 03:39:17.417384+00
10	22.22.22.22	admin	login	t	2020-08-21 02:31:20.958452+00
11	22.22.22.22	admin	login	t	2020-08-21 02:45:57.345689+00
12	31.173.243.86	admin	login	t	2020-08-24 02:27:08.781063+00
13	22.22.22.22	admin	login	t	2020-08-24 03:11:10.20574+00
14	22.22.22.22	admin	login	t	2020-08-24 06:54:04.479609+00
15	31.173.242.75	admin	login	t	2020-08-26 04:26:59.459069+00
16	31.173.242.75	admin	login	t	2020-08-26 04:27:24.802938+00
17	31.173.242.75	admin	login	t	2020-08-26 05:53:36.85899+00
18	31.173.243.1	admin	login	t	2020-08-27 05:02:59.460103+00
19	31.173.243.1	admin	login	t	2020-08-27 05:03:35.042562+00
22	31.173.243.1	admin	login	t	2020-08-27 05:06:19.624433+00
24	31.173.243.1	admin	login	t	2020-08-27 05:12:45.471862+00
25	31.173.243.1	admin	login	f	2020-08-27 05:13:04.780923+00
26	31.173.243.1	admin	login	t	2020-08-27 05:25:22.404411+00
27	31.173.243.1	admin	login	t	2020-08-27 05:27:25.466496+00
28	31.173.243.1	admin	login	t	2020-08-28 04:12:42.797341+00
29	31.173.243.1	admin	login	t	2020-08-28 04:13:12.443804+00
30	31.173.242.81	admin	login	t	2020-09-08 06:54:22.828355+00
31	31.173.243.7	admin	login	t	2020-09-18 15:37:46.357067+00
32	185.210.141.11	admin	login	t	2020-09-22 16:10:41.363154+00
33	31.173.243.42	admin	login	t	2020-09-28 15:52:21.46123+00
\.


--
-- Data for Name: cabinet_profile; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cabinet_profile (user_id, sex, birth_date, "position", middle_name, first_name, last_name, experience, shift, part_time_job, lateness, "SRI_SAS", department_id, direction_id, fine_late, oklad, employment_date) FROM stdin;
6	Female	1999-02-01	Controller	Alexandrovna	Anna	Petrova	0	f	f		f	57	3	09:15:00	f	2010-01-01
5	Male	2000-08-18	Controller	Petrovich	Ivan	Ivanov	0	f	f		f	15	3	09:15:00	f	2010-01-01
2	Male	2000-06-18	Financist	Petrovich	Ivan	Ivanov	0	f	f		f	7	2	09:15:00	f	2010-01-01
10	Female	1990-01-01	Top	Petrovna	Olga	Ivanova	0	f	f		t	54	2	09:15:00	t	2010-01-01
9	Male	2000-08-26	Technician	Sergeevich	Petr	Ivanov	0	f	f		t	14	3	09:15:00	t	2010-01-01
7	Male	2000-08-26	Top	Ivanovich	Ivan	Sergeev	2	f	f		t	18	1	09:15:00	t	2010-01-01
11	Female	2000-08-26	Technician	Petrovna	Irina	Sidorova	6	f	t		t	7	2	09:15:00	t	2010-01-01
8	Male	1999-11-26	Technician	Alexandrovich	Ivan	Sergeev	0	f	f		f	13	1	09:15:00	t	2010-01-01
4	Female	1999-02-18	Farmer	Petrovna	Olga	Petrova	0	f	f		t	6	3	09:15:00	t	2010-01-01
1	Female	1999-02-18	Farmer	Petrovna	Olga	Petrova	0	f	f		t	6	3	09:15:00	t	2010-01-01
3	Female	2001-08-18	Farmer	Alexandrovna	Anna	Ivanovna	0	f	f		f	106	1	09:15:00	f	2010-01-01
\.


--
-- Data for Name: cabinet_project; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cabinet_project (id, name, direction_id, client, production_order, comment_for_employees, contract, type, status, report_availability, acceptance_vp, chief_designer_id, deputy_chief_designer_id, manager_id) FROM stdin;
1	Administrate Department	1	"InFoTecs"	2814709FJH		PLK228	f	f	f	f	2	3	1
2	Create Programm	2	"NETech"	2814123AJH		PFM228	t	t	t	t	5	6	4
3	Maintain the site	3	"MIcrach"	2865709MKH		ABO324	t	f	f	f	5	2	1
4	Do something	3	"KripKit"	2281337213		124FAS214	f	t	f	t	6	10	8
\.


--
-- Data for Name: cabinet_report; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cabinet_report (id, status, text, hour, date, creator_id_id, project_id, ban_id_id, check_id_id, "check") FROM stdin;
3	f	Что то сделал	12	2020-07-03	1	1	1	\N	f
17	f	fsdds	3	2021-06-03	1	2	1	\N	f
34	f	fdsdsf	4	2020-09-03	10	2	\N	\N	f
43	f	56456	4	2020-09-03	2	2	\N	\N	f
\.


--
-- Data for Name: cabinet_salarycommon; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cabinet_salarycommon (id, days_norm_common, time_norm_common, date) FROM stdin;
1	12	96	2020-08-01
2	0	0	2020-10-01
3	20	160	2020-07-01
5	20	160	2020-05-01
4	21	168	2020-09-01
\.


--
-- Data for Name: cabinet_salaryindividual; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cabinet_salaryindividual (id, days_worked, vacation, sick_leave, day_off, time_from_report, time_orion, time_norm, time_off, plan_salary, award, penalty, is_penalty, salary_hand, date, common_part_id, person_id) FROM stdin;
34	20	0	0	0	0	0	160	0	10	0	10	f	0	2020-05-01	5	11
35	20	0	0	0	0	0	160	0	121	0	121	f	0	2020-05-01	5	10
37	20	0	0	0	0	0	160	0	12	0	12	f	0	2020-05-01	5	8
36	20	0	0	0	0	0	160	0	212	0	212	f	0	2020-05-01	5	9
38	20	0	0	0	0	0	160	0	12	0	12	f	0	2020-05-01	5	7
39	20	0	0	0	0	0	160	0	12	0	12	f	0	2020-05-01	5	6
40	20	0	0	0	0	0	160	0	12	0	12	f	0	2020-05-01	5	5
41	20	0	0	0	0	0	160	0	12	0	12	f	0	2020-05-01	5	4
42	20	0	0	0	0	0	160	0	12	0	12	f	0	2020-05-01	5	3
43	20	0	0	0	0	0	160	0	12	0	12	f	0	2020-05-01	5	2
44	20	0	0	0	0	0	160	0	120	0	120	f	0	2020-05-01	5	1
45	0	0	0	0	0	0	0	0	0	0	0	f	0	2020-08-01	1	11
46	0	0	0	0	0	0	0	0	0	0	0	f	0	2020-08-01	1	10
47	0	0	0	0	0	0	0	0	0	0	0	f	0	2020-08-01	1	9
48	0	0	0	0	0	0	0	0	0	0	0	f	0	2020-08-01	1	8
49	0	0	0	0	0	0	0	0	0	0	0	f	0	2020-08-01	1	7
50	0	0	0	0	0	0	0	0	0	0	0	f	0	2020-08-01	1	6
51	0	0	0	0	0	0	0	0	0	0	0	f	0	2020-08-01	1	5
52	0	0	0	0	0	0	0	0	0	0	0	f	0	2020-08-01	1	4
53	0	0	0	0	0	0	0	0	0	0	0	f	0	2020-08-01	1	3
54	0	0	0	0	0	0	0	0	0	0	0	f	0	2020-08-01	1	2
55	0	0	0	0	0	0	0	0	0	0	0	f	0	2020-08-01	1	1
56	21	0	0	0	0	0	168	0	0	0	0	f	0	2020-09-01	4	11
57	21	0	0	0	0	0	168	0	0	0	0	f	0	2020-09-01	4	10
58	21	0	0	0	0	0	168	0	0	0	0	f	0	2020-09-01	4	9
59	21	0	0	0	0	0	168	0	0	0	0	f	0	2020-09-01	4	8
60	21	0	0	0	0	0	168	0	0	0	0	f	0	2020-09-01	4	7
66	21	0	0	0	0	0	168	0	1340	0	1340	f	0	2020-09-01	4	1
64	21	0	0	0	0	0	168	0	0	0	0	f	0	2020-09-01	4	3
65	21	0	0	0	0	0	168	0	0	0	0	f	0	2020-09-01	4	2
61	21	0	0	0	0	0	168	0	45614555551	4105309999.59	45614555551	t	4105309999.59	2020-09-01	4	6
62	21	0	0	0	0	0	168	0	61456123789	0	61456123789	f	0	2020-09-01	4	5
63	21	0	0	0	0	0	168	0	43434344	0	43434344	f	0	2020-09-01	4	4
\.


--
-- Data for Name: cabinet_timecard; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cabinet_timecard (id, "user", orion_id, intellect_id, leaving, late, fine_late, hooky, hours_worked, date) FROM stdin;
1	1	0	0	17:00:00	00:00:00	09:00:00	00:00:00	08:00:00	2020-08-18
\.


--
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
1	2020-08-18 03:22:37.901788+00	2	user_1	1	[{"added": {}}]	4	1
2	2020-08-18 03:23:07.864532+00	2	user_1	2	[]	4	1
3	2020-08-18 03:23:35.775783+00	3	user_2	1	[{"added": {}}]	4	1
4	2020-08-18 03:24:27.923867+00	4	user_3	1	[{"added": {}}]	4	1
5	2020-08-18 03:25:13.139856+00	5	user_4	1	[{"added": {}}]	4	1
6	2020-08-18 03:27:25.8465+00	6	user_5	1	[{"added": {}}]	4	1
7	2020-08-18 03:27:45.898507+00	1	Finances	1	[{"added": {}}]	8	1
8	2020-08-18 03:27:57.404375+00	2	Food	1	[{"added": {}}]	8	1
9	2020-08-18 03:28:06.616385+00	3	Control	1	[{"added": {}}]	8	1
10	2020-08-18 03:28:55.274588+00	1	Aid	1	[{"added": {}}]	15	1
11	2020-08-18 03:29:23.543046+00	2	Salary	1	[{"added": {}}]	15	1
12	2020-08-18 03:29:44.661926+00	3	Bread	1	[{"added": {}}]	15	1
13	2020-08-18 03:29:58.778199+00	4	Water	1	[{"added": {}}]	15	1
14	2020-08-18 03:30:10.229205+00	5	Mind	1	[{"added": {}}]	15	1
15	2020-08-18 03:30:18.630509+00	6	Body	1	[{"added": {}}]	15	1
16	2020-08-18 03:31:53.946147+00	1	Administrating	1	[{"added": {}}]	9	1
17	2020-08-18 03:32:27.507077+00	2	Development	1	[{"added": {}}]	9	1
18	2020-08-18 03:33:04.576607+00	3	Maintenance	1	[{"added": {}}]	9	1
19	2020-08-18 03:37:30.240903+00	1	admin	1	[{"added": {}}]	11	1
20	2020-08-18 03:38:10.38594+00	2	user_1	1	[{"added": {}}]	11	1
21	2020-08-18 03:40:04.410911+00	3	user_2	1	[{"added": {}}]	11	1
22	2020-08-18 03:45:50.038299+00	4	user_3	1	[{"added": {}}]	11	1
23	2020-08-18 04:07:46.492195+00	5	user_4	1	[{"added": {}}]	11	1
24	2020-08-18 04:08:28.748832+00	6	user_5	1	[{"added": {}}]	11	1
25	2020-08-18 04:11:03.700414+00	1	Administrate Department	1	[{"added": {}}]	12	1
26	2020-08-18 04:18:24.361907+00	2	Create Programm	1	[{"added": {}}]	12	1
27	2020-08-18 04:18:31.628103+00	2	Create Programm	2	[{"changed": {"fields": ["Type", "Status", "Report availability", "Acceptance vp"]}}]	12	1
28	2020-08-18 04:20:44.591353+00	3	Maintain the site	1	[{"added": {}}]	12	1
29	2020-08-18 04:20:55.463507+00	3	Maintain the site	2	[{"changed": {"fields": ["Type", "Report availability"]}}]	12	1
30	2020-08-18 04:21:18.843013+00	3	Maintain the site	2	[{"changed": {"fields": ["Report availability"]}}]	12	1
31	2020-08-18 05:17:54.316897+00	1	TimeCard object (1)	1	[{"added": {}}]	14	1
32	2020-08-18 06:42:26.933394+00	3	Maintenance	2	[{"changed": {"fields": ["Subdepartment"]}}]	9	1
33	2020-08-18 06:42:37.450656+00	2	Development	2	[{"changed": {"fields": ["Subdepartment"]}}]	9	1
34	2020-08-19 03:23:11.121486+00	1	CalendarMark object (1)	1	[{"added": {}}]	20	1
35	2020-08-19 03:51:16.334005+00	1	admin	2	[{"changed": {"fields": ["Direction"]}}]	11	1
36	2020-08-19 03:51:51.752385+00	2	user_1	2	[{"changed": {"fields": ["Direction"]}}]	11	1
37	2020-08-20 03:57:30.856904+00	1	12	1	[{"added": {}}]	7	1
38	2020-08-20 04:01:24.351895+00	2	123	1	[{"added": {}}]	7	1
39	2020-08-20 04:01:27.678892+00	3	123124	1	[{"added": {}}]	7	1
40	2020-08-21 05:56:27.307959+00	2	CalendarMark object (2)	2	[]	20	1
41	2020-08-21 05:56:39.566972+00	3	CalendarMark object (3)	1	[{"added": {}}]	20	1
42	2020-08-21 05:56:51.570416+00	4	CalendarMark object (4)	1	[{"added": {}}]	20	1
43	2020-08-21 05:56:59.093398+00	5	CalendarMark object (5)	1	[{"added": {}}]	20	1
44	2020-08-21 05:59:41.368154+00	6	CalendarMark object (6)	1	[{"added": {}}]	20	1
45	2020-08-21 06:00:02.599587+00	2	user_1	2	[{"changed": {"fields": ["Subdepartment"]}}]	11	1
46	2020-08-24 02:39:33.851481+00	4	God	1	[{"added": {}}]	7	1
47	2020-08-24 02:41:25.696701+00	4	God	3		7	1
48	2020-08-24 02:41:25.701598+00	3	123124	3		7	1
49	2020-08-24 02:41:25.703227+00	2	123	3		7	1
50	2020-08-24 02:41:25.704898+00	1	12	3		7	1
51	2020-08-24 02:41:35.677697+00	5	101	1	[{"added": {}}]	7	1
52	2020-08-24 02:41:42.712708+00	6	100	1	[{"added": {}}]	7	1
53	2020-08-24 02:41:47.437407+00	7	11	1	[{"added": {}}]	7	1
54	2020-08-24 02:41:51.616758+00	8	12	1	[{"added": {}}]	7	1
55	2020-08-24 02:41:55.421833+00	9	13	1	[{"added": {}}]	7	1
56	2020-08-24 02:42:20.037442+00	1	Gods	1	[{"added": {}}]	18	1
57	2020-08-24 02:42:37.670807+00	2	Default	1	[{"added": {}}]	18	1
58	2020-08-24 07:01:25.185073+00	6	CalendarMark object (6)	3		20	1
59	2020-08-24 07:01:35.95736+00	5	CalendarMark object (5)	2	[{"changed": {"fields": ["End date"]}}]	20	1
60	2020-08-24 07:02:24.726546+00	7	CalendarMark object (7)	1	[{"added": {}}]	20	1
61	2020-08-26 05:44:09.420204+00	7	user_6	1	[{"added": {}}]	4	1
62	2020-08-26 05:45:03.907708+00	8	user_7	1	[{"added": {}}]	4	1
63	2020-08-26 05:45:52.298872+00	9	user_8	1	[{"added": {}}]	4	1
64	2020-08-26 05:46:43.622025+00	10	user_9	1	[{"added": {}}]	4	1
65	2020-08-26 05:47:36.395049+00	11	user_10	1	[{"added": {}}]	4	1
66	2020-08-26 05:49:09.351875+00	7	user_6	1	[{"added": {}}]	11	1
67	2020-08-26 05:49:52.04254+00	8	user_7	1	[{"added": {}}]	11	1
68	2020-08-26 05:50:24.275147+00	9	user_8	1	[{"added": {}}]	11	1
69	2020-08-26 05:51:10.194435+00	10	user_9	1	[{"added": {}}]	11	1
70	2020-08-26 05:52:01.834405+00	11	user_10	1	[{"added": {}}]	11	1
71	2020-08-26 05:52:31.3205+00	8	CalendarMark object (8)	1	[{"added": {}}]	20	1
72	2020-08-26 05:52:44.165562+00	9	CalendarMark object (9)	1	[{"added": {}}]	20	1
73	2020-08-26 05:52:56.290964+00	10	CalendarMark object (10)	1	[{"added": {}}]	20	1
74	2020-08-26 05:53:10.90108+00	11	CalendarMark object (11)	1	[{"added": {}}]	20	1
75	2020-08-26 05:53:27.211435+00	12	CalendarMark object (12)	1	[{"added": {}}]	20	1
76	2020-08-26 05:55:35.131933+00	4	Do somethind	1	[{"added": {}}]	12	1
77	2020-08-26 05:55:44.590854+00	4	Do something	2	[{"changed": {"fields": ["Name", "Acceptance vp"]}}]	12	1
78	2020-08-26 05:55:47.655973+00	4	Do something	2	[{"changed": {"fields": ["Status"]}}]	12	1
79	2020-08-26 05:56:55.442757+00	4	People	1	[{"added": {}}]	18	1
80	2020-09-08 06:53:05.790971+00	3	Control	3		8	1
81	2020-09-08 06:53:08.69176+00	2	Food	3		8	1
82	2020-09-08 06:53:11.322005+00	1	Finances	3		8	1
113	2020-09-08 07:32:44.251843+00	11	user_10	2	[{"changed": {"fields": ["Department"]}}]	11	1
114	2020-09-08 07:32:50.757282+00	10	user_9	2	[{"changed": {"fields": ["Department"]}}]	11	1
115	2020-09-08 07:33:01.270911+00	9	user_8	2	[{"changed": {"fields": ["Department"]}}]	11	1
116	2020-09-08 07:33:06.797347+00	8	user_7	2	[{"changed": {"fields": ["Department"]}}]	11	1
117	2020-09-08 07:33:17.179225+00	7	user_6	2	[{"changed": {"fields": ["Department"]}}]	11	1
118	2020-09-08 07:33:29.481614+00	6	user_5	2	[{"changed": {"fields": ["Department", "Direction"]}}]	11	1
119	2020-09-08 07:33:36.668269+00	5	user_4	2	[{"changed": {"fields": ["Department", "Direction"]}}]	11	1
120	2020-09-08 07:33:43.533807+00	4	user_3	2	[{"changed": {"fields": ["Department", "Direction"]}}]	11	1
121	2020-09-08 07:33:52.650065+00	3	user_2	2	[{"changed": {"fields": ["Department", "Direction"]}}]	11	1
122	2020-09-08 07:33:57.782551+00	2	user_1	2	[{"changed": {"fields": ["Department"]}}]	11	1
123	2020-09-08 07:34:02.196742+00	1	admin	2	[{"changed": {"fields": ["Department"]}}]	11	1
124	2020-09-08 07:40:43.679268+00	2	Бухгалтерия	2	[{"changed": {"fields": ["Subdepartment code"]}}]	8	1
125	2020-09-08 07:42:00.512478+00	2	Бухгалтерия	2	[{"changed": {"fields": ["Subdepartment code"]}}]	8	1
126	2020-09-08 07:42:41.067077+00	2	Бухгалтерия	2	[{"changed": {"fields": ["Subdepartment code"]}}]	8	1
127	2020-09-08 09:15:57.886412+00	33	SalaryIndividual object (33)	3		16	1
128	2020-09-08 09:15:57.898197+00	32	SalaryIndividual object (32)	3		16	1
129	2020-09-08 09:15:57.900061+00	31	SalaryIndividual object (31)	3		16	1
130	2020-09-08 09:15:57.901937+00	30	SalaryIndividual object (30)	3		16	1
131	2020-09-08 09:15:57.903836+00	29	SalaryIndividual object (29)	3		16	1
132	2020-09-08 09:15:57.905495+00	28	SalaryIndividual object (28)	3		16	1
133	2020-09-08 09:15:57.907421+00	27	SalaryIndividual object (27)	3		16	1
134	2020-09-08 09:15:57.90962+00	26	SalaryIndividual object (26)	3		16	1
135	2020-09-08 09:15:57.911493+00	25	SalaryIndividual object (25)	3		16	1
136	2020-09-08 09:15:57.913414+00	24	SalaryIndividual object (24)	3		16	1
137	2020-09-08 09:15:57.915295+00	23	SalaryIndividual object (23)	3		16	1
138	2020-09-08 09:15:57.916902+00	22	SalaryIndividual object (22)	3		16	1
139	2020-09-08 09:15:57.918431+00	21	SalaryIndividual object (21)	3		16	1
140	2020-09-08 09:15:57.920274+00	20	SalaryIndividual object (20)	3		16	1
141	2020-09-08 09:15:57.921744+00	19	SalaryIndividual object (19)	3		16	1
142	2020-09-08 09:15:57.923101+00	18	SalaryIndividual object (18)	3		16	1
143	2020-09-08 09:15:57.924637+00	17	SalaryIndividual object (17)	3		16	1
144	2020-09-08 09:15:57.926191+00	16	SalaryIndividual object (16)	3		16	1
145	2020-09-08 09:15:57.927686+00	15	SalaryIndividual object (15)	3		16	1
146	2020-09-08 09:15:57.929128+00	14	SalaryIndividual object (14)	3		16	1
147	2020-09-08 09:15:57.930526+00	13	SalaryIndividual object (13)	3		16	1
148	2020-09-08 09:15:57.931922+00	12	SalaryIndividual object (12)	3		16	1
149	2020-09-08 09:15:57.933655+00	11	SalaryIndividual object (11)	3		16	1
150	2020-09-08 09:15:57.935396+00	10	SalaryIndividual object (10)	3		16	1
151	2020-09-08 09:15:57.937503+00	9	SalaryIndividual object (9)	3		16	1
152	2020-09-08 09:15:57.939222+00	8	SalaryIndividual object (8)	3		16	1
153	2020-09-08 09:15:57.940846+00	7	SalaryIndividual object (7)	3		16	1
154	2020-09-08 09:15:57.94263+00	6	SalaryIndividual object (6)	3		16	1
155	2020-09-08 09:15:57.944268+00	5	SalaryIndividual object (5)	3		16	1
156	2020-09-08 09:15:57.94582+00	4	SalaryIndividual object (4)	3		16	1
157	2020-09-08 09:15:57.947434+00	3	SalaryIndividual object (3)	3		16	1
158	2020-09-08 09:15:57.949034+00	2	SalaryIndividual object (2)	3		16	1
159	2020-09-08 09:15:57.950692+00	1	SalaryIndividual object (1)	3		16	1
160	2020-09-10 15:30:34.400533+00	18	Report object (18)	1	[{"added": {}}]	17	1
161	2020-09-14 13:23:33.683876+00	1	admin	2	[{"changed": {"fields": ["Department"]}}]	11	1
162	2020-09-16 09:53:21.397185+00	1	admin Ivanov Ivan Ivanovich	2	[{"changed": {"fields": ["SRI SAS"]}}]	11	1
163	2020-09-16 10:53:52.173478+00	1	admin Ivanov Ivan Ivanovich	2	[{"changed": {"fields": ["Oklad"]}}]	11	1
164	2020-09-16 13:29:53.356282+00	1	личные	1	[{"added": {}}]	21	1
165	2020-09-16 13:39:54.771187+00	2		1	[{"added": {}}]	21	1
166	2020-09-18 17:08:49.49113+00	8	fddd	2	[{"changed": {"fields": ["Actions", "Participants"]}}]	18	1
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
8	cabinet	department
9	cabinet	direction
10	cabinet	logging
11	cabinet	profile
12	cabinet	project
13	cabinet	salarycommon
14	cabinet	timecard
15	cabinet	subdepartment
16	cabinet	salaryindividual
17	cabinet	report
18	cabinet	group
19	authtoken	token
20	cabinet	calendarmark
21	cabinet	groupaction
\.


--
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.django_migrations (id, app, name, applied) FROM stdin;
1	contenttypes	0001_initial	2020-08-18 03:08:18.66087+00
2	auth	0001_initial	2020-08-18 03:08:18.711959+00
3	admin	0001_initial	2020-08-18 03:08:18.82215+00
4	admin	0002_logentry_remove_auto_add	2020-08-18 03:08:18.843467+00
5	admin	0003_logentry_add_action_flag_choices	2020-08-18 03:08:18.858213+00
6	contenttypes	0002_remove_content_type_name	2020-08-18 03:08:18.886328+00
7	auth	0002_alter_permission_name_max_length	2020-08-18 03:08:18.894466+00
8	auth	0003_alter_user_email_max_length	2020-08-18 03:08:18.908323+00
9	auth	0004_alter_user_username_opts	2020-08-18 03:08:18.919961+00
10	auth	0005_alter_user_last_login_null	2020-08-18 03:08:18.931968+00
11	auth	0006_require_contenttypes_0002	2020-08-18 03:08:18.936098+00
12	auth	0007_alter_validators_add_error_messages	2020-08-18 03:08:18.950409+00
13	auth	0008_alter_user_username_max_length	2020-08-18 03:08:18.967142+00
14	auth	0009_alter_user_last_name_max_length	2020-08-18 03:08:18.978592+00
15	auth	0010_alter_group_name_max_length	2020-08-18 03:08:18.993094+00
16	auth	0011_update_proxy_permissions	2020-08-18 03:08:19.008385+00
17	authtoken	0001_initial	2020-08-18 03:08:19.025661+00
18	authtoken	0002_auto_20160226_1747	2020-08-18 03:08:19.079261+00
19	cabinet	0001_initial	2020-08-18 03:08:19.276817+00
20	sessions	0001_initial	2020-08-18 03:08:19.389028+00
21	cabinet	0002_auto_20200818_0311	2020-08-18 03:13:15.485797+00
22	cabinet	0003_auto_20200818_0317	2020-08-18 03:17:18.642985+00
23	cabinet	0004_auto_20200818_0334	2020-08-18 03:34:18.955728+00
24	cabinet	0005_auto_20200818_0338	2020-08-18 03:38:56.960428+00
25	cabinet	0006_calendarmark	2020-08-18 05:54:34.747166+00
26	cabinet	0007_auto_20200818_0608	2020-08-18 06:08:30.288643+00
27	cabinet	0008_auto_20200818_0638	2020-08-18 06:38:13.636585+00
28	cabinet	0009_calendarmark_person	2020-08-19 03:04:15.709666+00
29	cabinet	0010_auto_20200819_0337	2020-08-19 03:37:36.34036+00
30	cabinet	0011_auto_20200819_0340	2020-08-19 03:40:34.336504+00
31	cabinet	0012_auto_20200908_0639	2020-09-08 06:40:08.188084+00
32	cabinet	0013_auto_20200910_0553	2020-09-10 13:44:41.271112+00
33	cabinet	0014_auto_20200910_0556	2020-09-10 13:44:41.448874+00
34	cabinet	0015_auto_20200910_0557	2020-09-10 13:44:41.498726+00
35	cabinet	0016_report_check_id	2020-09-10 15:07:46.227009+00
36	cabinet	0017_report_check	2020-09-14 13:41:32.541928+00
37	cabinet	0018_profile_fine_late	2020-09-15 14:02:52.713558+00
38	cabinet	0019_profile_oklad	2020-09-15 14:02:52.808393+00
39	cabinet	0020_profile_employment_date	2020-09-15 14:02:52.849506+00
40	cabinet	0021_remove_group_available_actions	2020-09-16 10:33:10.841254+00
41	cabinet	0022_auto_20200915_0651	2020-09-16 10:33:11.447343+00
42	cabinet	0023_auto_20200915_0653	2020-09-16 10:33:12.035759+00
43	cabinet	0024_auto_20200915_0827	2020-09-16 10:33:12.181682+00
44	cabinet	0025_remove_groupaction_description	2020-09-16 10:33:12.262407+00
45	cabinet	0026_auto_20200916_0321	2020-09-16 10:33:12.628689+00
\.


--
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.django_session (session_key, session_data, expire_date) FROM stdin;
p32kvfjkbewyyw29w9aqm2eacefntoid	NTE3YWM1MjE1MGNmMzI5MjVmNTJjNDY0NTE1MWUwM2U4MGZmZTA3OTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJmMDVmY2ZhOWRlM2ExMzBiYjEzYTQ5NzkyMmUzM2NiMGRmODI0NTE4In0=	2020-09-08 02:31:21.237819+00
fqeooe0d9riq0vjhmrkwd9jo532itgz4	NTE3YWM1MjE1MGNmMzI5MjVmNTJjNDY0NTE1MWUwM2U4MGZmZTA3OTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJmMDVmY2ZhOWRlM2ExMzBiYjEzYTQ5NzkyMmUzM2NiMGRmODI0NTE4In0=	2020-09-09 04:27:40.232096+00
w14rmqid0fqixs5ecl5w5roebx7j2mpd	NTE3YWM1MjE1MGNmMzI5MjVmNTJjNDY0NTE1MWUwM2U4MGZmZTA3OTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJmMDVmY2ZhOWRlM2ExMzBiYjEzYTQ5NzkyMmUzM2NiMGRmODI0NTE4In0=	2020-09-22 06:40:20.991824+00
ggqjt06b8uex10i3xbcoz79us63dkd9d	NTE3YWM1MjE1MGNmMzI5MjVmNTJjNDY0NTE1MWUwM2U4MGZmZTA3OTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJmMDVmY2ZhOWRlM2ExMzBiYjEzYTQ5NzkyMmUzM2NiMGRmODI0NTE4In0=	2020-09-23 10:05:58.382354+00
kspt2t4su6n82pa443giq2dmjmv24xcf	NTE3YWM1MjE1MGNmMzI5MjVmNTJjNDY0NTE1MWUwM2U4MGZmZTA3OTp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJmMDVmY2ZhOWRlM2ExMzBiYjEzYTQ5NzkyMmUzM2NiMGRmODI0NTE4In0=	2020-09-30 11:45:42.750881+00
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

SELECT pg_catalog.setval('public.auth_permission_id_seq', 84, true);


--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.auth_user_groups_id_seq', 1, false);


--
-- Name: auth_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.auth_user_id_seq', 11, true);


--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.auth_user_user_permissions_id_seq', 1, false);


--
-- Name: cabinet_action_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cabinet_action_id_seq', 9, true);


--
-- Name: cabinet_calendarmark_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cabinet_calendarmark_id_seq', 12, true);


--
-- Name: cabinet_department_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cabinet_department_id_seq', 3, true);


--
-- Name: cabinet_direction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cabinet_direction_id_seq', 3, true);


--
-- Name: cabinet_group_available_actions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cabinet_group_available_actions_id_seq', 9, true);


--
-- Name: cabinet_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cabinet_group_id_seq', 8, true);


--
-- Name: cabinet_group_participants_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cabinet_group_participants_id_seq', 21, true);


--
-- Name: cabinet_groupaction_available_actions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cabinet_groupaction_available_actions_id_seq', 3, true);


--
-- Name: cabinet_groupaction_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cabinet_groupaction_id_seq', 2, true);


--
-- Name: cabinet_logging_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cabinet_logging_id_seq', 33, true);


--
-- Name: cabinet_project_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cabinet_project_id_seq', 4, true);


--
-- Name: cabinet_report_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cabinet_report_id_seq', 43, true);


--
-- Name: cabinet_salarycommon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cabinet_salarycommon_id_seq', 5, true);


--
-- Name: cabinet_salaryindividual_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cabinet_salaryindividual_id_seq', 66, true);


--
-- Name: cabinet_timecard_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cabinet_timecard_id_seq', 2, true);


--
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.django_admin_log_id_seq', 166, true);


--
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.django_content_type_id_seq', 21, true);


--
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.django_migrations_id_seq', 45, true);


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
-- Name: cabinet_calendarmark cabinet_calendarmark_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_calendarmark
    ADD CONSTRAINT cabinet_calendarmark_pkey PRIMARY KEY (id);


--
-- Name: cabinet_department cabinet_department_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_department
    ADD CONSTRAINT cabinet_department_pkey PRIMARY KEY (id);


--
-- Name: cabinet_direction cabinet_direction_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_direction
    ADD CONSTRAINT cabinet_direction_pkey PRIMARY KEY (id);


--
-- Name: cabinet_group_actions cabinet_group_available__group_id_groupaction_id_870139cc_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_group_actions
    ADD CONSTRAINT cabinet_group_available__group_id_groupaction_id_870139cc_uniq UNIQUE (group_id, action_id);


--
-- Name: cabinet_group_actions cabinet_group_available_actions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_group_actions
    ADD CONSTRAINT cabinet_group_available_actions_pkey PRIMARY KEY (id);


--
-- Name: cabinet_group cabinet_group_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_group
    ADD CONSTRAINT cabinet_group_name_key UNIQUE (name);


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
-- Name: cabinet_groupaction_available_actions cabinet_groupaction_avai_groupaction_id_action_id_518ba253_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_groupaction_available_actions
    ADD CONSTRAINT cabinet_groupaction_avai_groupaction_id_action_id_518ba253_uniq UNIQUE (groupaction_id, action_id);


--
-- Name: cabinet_groupaction_available_actions cabinet_groupaction_available_actions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_groupaction_available_actions
    ADD CONSTRAINT cabinet_groupaction_available_actions_pkey PRIMARY KEY (id);


--
-- Name: cabinet_groupaction cabinet_groupaction_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_groupaction
    ADD CONSTRAINT cabinet_groupaction_name_key UNIQUE (name);


--
-- Name: cabinet_groupaction cabinet_groupaction_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_groupaction
    ADD CONSTRAINT cabinet_groupaction_pkey PRIMARY KEY (id);


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
-- Name: cabinet_timecard cabinet_timecard_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_timecard
    ADD CONSTRAINT cabinet_timecard_pkey PRIMARY KEY (id);


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
-- Name: cabinet_calendarmark_person_id_670a308e; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cabinet_calendarmark_person_id_670a308e ON public.cabinet_calendarmark USING btree (person_id);


--
-- Name: cabinet_direction_subdepartment_id_900a5f0c; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cabinet_direction_subdepartment_id_900a5f0c ON public.cabinet_direction USING btree (subdepartment_id);


--
-- Name: cabinet_group_available_actions_group_id_d9e33349; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cabinet_group_available_actions_group_id_d9e33349 ON public.cabinet_group_actions USING btree (group_id);


--
-- Name: cabinet_group_available_actions_groupaction_id_8677c198; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cabinet_group_available_actions_groupaction_id_8677c198 ON public.cabinet_group_actions USING btree (action_id);


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
-- Name: cabinet_groupaction_available_actions_action_id_d03b6718; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cabinet_groupaction_available_actions_action_id_d03b6718 ON public.cabinet_groupaction_available_actions USING btree (action_id);


--
-- Name: cabinet_groupaction_available_actions_groupaction_id_bbf17aed; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cabinet_groupaction_available_actions_groupaction_id_bbf17aed ON public.cabinet_groupaction_available_actions USING btree (groupaction_id);


--
-- Name: cabinet_groupaction_name_6701ea69_like; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cabinet_groupaction_name_6701ea69_like ON public.cabinet_groupaction USING btree (name varchar_pattern_ops);


--
-- Name: cabinet_profile_department_id_043cc896; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cabinet_profile_department_id_043cc896 ON public.cabinet_profile USING btree (department_id);


--
-- Name: cabinet_profile_direction_id_260a5be7; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cabinet_profile_direction_id_260a5be7 ON public.cabinet_profile USING btree (direction_id);


--
-- Name: cabinet_project_chief_designer_id_e2482a6d; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cabinet_project_chief_designer_id_e2482a6d ON public.cabinet_project USING btree (chief_designer_id);


--
-- Name: cabinet_project_deputy_chief_designer_id_d2cb252b; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cabinet_project_deputy_chief_designer_id_d2cb252b ON public.cabinet_project USING btree (deputy_chief_designer_id);


--
-- Name: cabinet_project_direction_id_25b3bbd8; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cabinet_project_direction_id_25b3bbd8 ON public.cabinet_project USING btree (direction_id);


--
-- Name: cabinet_project_manager_id_8b33a4c4; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cabinet_project_manager_id_8b33a4c4 ON public.cabinet_project USING btree (manager_id);


--
-- Name: cabinet_report_ban_id_id_92b0d826; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cabinet_report_ban_id_id_92b0d826 ON public.cabinet_report USING btree (ban_id_id);


--
-- Name: cabinet_report_check_id_id_1b5d2f0c; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cabinet_report_check_id_id_1b5d2f0c ON public.cabinet_report USING btree (check_id_id);


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
-- Name: cabinet_calendarmark cabinet_calendarmark_person_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_calendarmark
    ADD CONSTRAINT cabinet_calendarmark_person_id_fkey FOREIGN KEY (person_id) REFERENCES public.cabinet_profile(user_id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: cabinet_direction cabinet_direction_subdepartment_id_900a5f0c_fk_cabinet_d; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_direction
    ADD CONSTRAINT cabinet_direction_subdepartment_id_900a5f0c_fk_cabinet_d FOREIGN KEY (subdepartment_id) REFERENCES public.cabinet_department(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: cabinet_group_actions cabinet_group_actions_action_id_726ffb27_fk_cabinet_action_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_group_actions
    ADD CONSTRAINT cabinet_group_actions_action_id_726ffb27_fk_cabinet_action_id FOREIGN KEY (action_id) REFERENCES public.cabinet_action(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: cabinet_group_actions cabinet_group_actions_group_id_f8d664ad_fk_cabinet_group_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_group_actions
    ADD CONSTRAINT cabinet_group_actions_group_id_f8d664ad_fk_cabinet_group_id FOREIGN KEY (group_id) REFERENCES public.cabinet_group(id) DEFERRABLE INITIALLY DEFERRED;


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
-- Name: cabinet_groupaction_available_actions cabinet_groupaction__action_id_d03b6718_fk_cabinet_a; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_groupaction_available_actions
    ADD CONSTRAINT cabinet_groupaction__action_id_d03b6718_fk_cabinet_a FOREIGN KEY (action_id) REFERENCES public.cabinet_action(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: cabinet_groupaction_available_actions cabinet_groupaction__groupaction_id_bbf17aed_fk_cabinet_g; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_groupaction_available_actions
    ADD CONSTRAINT cabinet_groupaction__groupaction_id_bbf17aed_fk_cabinet_g FOREIGN KEY (groupaction_id) REFERENCES public.cabinet_groupaction(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: cabinet_profile cabinet_profile_department_id_043cc896_fk_cabinet_department_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_profile
    ADD CONSTRAINT cabinet_profile_department_id_043cc896_fk_cabinet_department_id FOREIGN KEY (department_id) REFERENCES public.cabinet_department(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: cabinet_profile cabinet_profile_direction_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_profile
    ADD CONSTRAINT cabinet_profile_direction_id_fkey FOREIGN KEY (direction_id) REFERENCES public.cabinet_direction(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: cabinet_profile cabinet_profile_user_id_3028da15_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_profile
    ADD CONSTRAINT cabinet_profile_user_id_3028da15_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: cabinet_project cabinet_project_chief_designer_id_e2482a6d_fk_cabinet_p; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_project
    ADD CONSTRAINT cabinet_project_chief_designer_id_e2482a6d_fk_cabinet_p FOREIGN KEY (chief_designer_id) REFERENCES public.cabinet_profile(user_id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: cabinet_project cabinet_project_deputy_chief_designe_d2cb252b_fk_cabinet_p; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_project
    ADD CONSTRAINT cabinet_project_deputy_chief_designe_d2cb252b_fk_cabinet_p FOREIGN KEY (deputy_chief_designer_id) REFERENCES public.cabinet_profile(user_id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: cabinet_project cabinet_project_direction_id_25b3bbd8_fk_cabinet_direction_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_project
    ADD CONSTRAINT cabinet_project_direction_id_25b3bbd8_fk_cabinet_direction_id FOREIGN KEY (direction_id) REFERENCES public.cabinet_direction(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: cabinet_project cabinet_project_manager_id_8b33a4c4_fk_cabinet_profile_user_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_project
    ADD CONSTRAINT cabinet_project_manager_id_8b33a4c4_fk_cabinet_profile_user_id FOREIGN KEY (manager_id) REFERENCES public.cabinet_profile(user_id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: cabinet_report cabinet_report_ban_id_id_92b0d826_fk_cabinet_profile_user_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_report
    ADD CONSTRAINT cabinet_report_ban_id_id_92b0d826_fk_cabinet_profile_user_id FOREIGN KEY (ban_id_id) REFERENCES public.cabinet_profile(user_id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: cabinet_report cabinet_report_check_id_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cabinet_report
    ADD CONSTRAINT cabinet_report_check_id_id_fkey FOREIGN KEY (check_id_id) REFERENCES public.cabinet_profile(user_id) DEFERRABLE INITIALLY DEFERRED;


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

