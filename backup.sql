--
-- PostgreSQL database dump
--

-- Dumped from database version 10.3
-- Dumped by pg_dump version 10.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: ar_internal_metadata; Type: TABLE; Schema: public; Owner: brandon
--

CREATE TABLE public.ar_internal_metadata (
    key character varying NOT NULL,
    value character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


ALTER TABLE public.ar_internal_metadata OWNER TO brandon;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: brandon
--

CREATE TABLE public.categories (
    id bigint NOT NULL,
    name text,
    description text,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


ALTER TABLE public.categories OWNER TO brandon;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: brandon
--

CREATE SEQUENCE public.categories_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categories_id_seq OWNER TO brandon;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: brandon
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: demos; Type: TABLE; Schema: public; Owner: brandon
--

CREATE TABLE public.demos (
    id bigint NOT NULL,
    name text,
    live date,
    description text,
    fundingreq integer,
    votes integer,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    featured boolean,
    category_id bigint,
    user_id bigint,
    event_id bigint,
    videos text,
    progress integer DEFAULT 1
);


ALTER TABLE public.demos OWNER TO brandon;

--
-- Name: demos_id_seq; Type: SEQUENCE; Schema: public; Owner: brandon
--

CREATE SEQUENCE public.demos_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.demos_id_seq OWNER TO brandon;

--
-- Name: demos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: brandon
--

ALTER SEQUENCE public.demos_id_seq OWNED BY public.demos.id;


--
-- Name: events; Type: TABLE; Schema: public; Owner: brandon
--

CREATE TABLE public.events (
    id bigint NOT NULL,
    name text,
    date date,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


ALTER TABLE public.events OWNER TO brandon;

--
-- Name: events_id_seq; Type: SEQUENCE; Schema: public; Owner: brandon
--

CREATE SEQUENCE public.events_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.events_id_seq OWNER TO brandon;

--
-- Name: events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: brandon
--

ALTER SEQUENCE public.events_id_seq OWNED BY public.events.id;


--
-- Name: orders; Type: TABLE; Schema: public; Owner: brandon
--

CREATE TABLE public.orders (
    id bigint NOT NULL,
    amount integer,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    user_id bigint,
    demo_id bigint,
    "stripeToken" text
);


ALTER TABLE public.orders OWNER TO brandon;

--
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: brandon
--

CREATE SEQUENCE public.orders_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_id_seq OWNER TO brandon;

--
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: brandon
--

ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: brandon
--

CREATE TABLE public.schema_migrations (
    version character varying NOT NULL
);


ALTER TABLE public.schema_migrations OWNER TO brandon;

--
-- Name: users; Type: TABLE; Schema: public; Owner: brandon
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    name text,
    email text,
    password_digest character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    username text
);


ALTER TABLE public.users OWNER TO brandon;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: brandon
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO brandon;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: brandon
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: brandon
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: demos id; Type: DEFAULT; Schema: public; Owner: brandon
--

ALTER TABLE ONLY public.demos ALTER COLUMN id SET DEFAULT nextval('public.demos_id_seq'::regclass);


--
-- Name: events id; Type: DEFAULT; Schema: public; Owner: brandon
--

ALTER TABLE ONLY public.events ALTER COLUMN id SET DEFAULT nextval('public.events_id_seq'::regclass);


--
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: brandon
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: brandon
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: ar_internal_metadata; Type: TABLE DATA; Schema: public; Owner: brandon
--

COPY public.ar_internal_metadata (key, value, created_at, updated_at) FROM stdin;
environment	development	2018-03-11 05:34:35.521305	2018-03-11 05:34:35.521305
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: brandon
--

COPY public.categories (id, name, description, created_at, updated_at) FROM stdin;
168	Web Apps	Leading edge Full Stack Applications.	2018-03-22 05:37:05.948359	2018-03-22 05:37:05.948359
169	iOT Apps	ioT, robots, smart-devices and more.	2018-03-22 05:37:05.952513	2018-03-22 05:37:05.952513
170	iOS Apps	The best apps to make you smile.	2018-03-22 05:37:05.954317	2018-03-22 05:37:05.954317
171	UI/UX Apps	Seamless integration to users.	2018-03-22 05:37:05.956074	2018-03-22 05:37:05.956074
\.


--
-- Data for Name: demos; Type: TABLE DATA; Schema: public; Owner: brandon
--

COPY public.demos (id, name, live, description, fundingreq, votes, created_at, updated_at, featured, category_id, user_id, event_id, videos, progress) FROM stdin;
911	TEST DEMO	1974-02-09	adsf	123	\N	2018-03-22 16:50:33.899151	2018-03-22 17:09:15.000263	\N	171	119	100	123	1001
790	Hills-Schultz	2014-04-01	Automated client-server array	1558	51	2018-03-22 05:37:06.767749	2018-03-22 05:37:06.767749	\N	169	119	102	dOt4NkcmIUg	1544
792	Reynolds-Ankunding	2017-03-31	Cross-platform 6th generation concept	5243	289	2018-03-22 05:37:06.773426	2018-03-22 05:37:06.773426	\N	170	120	101	LhszKevcH30	1226
794	Bradtke-Pollich	2018-04-22	Monitored mobile framework	14908	156	2018-03-22 05:37:06.779045	2018-03-22 05:37:06.779045	\N	168	120	102	C6mNITMY7e0	68
795	Feeney, Gislason and Stroman	2014-04-01	Cloned even-keeled productivity	10351	221	2018-03-22 05:37:06.781602	2018-03-22 05:37:06.781602	\N	171	121	102	8Dv2Hdf5TRg	326
796	Kunze-Considine	2014-04-01	Persevering client-server model	18	188	2018-03-22 05:37:06.784125	2018-03-22 05:37:06.784125	\N	170	121	99	a6Qvzp516gY	1967
797	Shanahan LLC	2015-03-21	Virtual client-server hardware	8943	143	2018-03-22 05:37:06.786708	2018-03-22 05:37:06.786708	\N	170	119	102	QPC5_P2_Fu8	2546
798	Spencer and Sons	2014-04-01	Switchable foreground conglomeration	5546	117	2018-03-22 05:37:06.789773	2018-03-22 05:37:06.789773	\N	169	122	99	_B9A3J70IPQ	2114
799	Walsh-Walsh	2014-04-01	Monitored radical leverage	15613	34	2018-03-22 05:37:06.792333	2018-03-22 05:37:06.792333	\N	168	119	102	5w5BhwLzoqg	833
800	Ferry-Abshire	2018-04-22	Persistent homogeneous algorithm	5173	240	2018-03-22 05:37:06.794933	2018-03-22 05:37:06.794933	\N	169	119	101	HNMQ_w7hXTA	469
801	Beatty Inc	2014-04-01	Triple-buffered bottom-line installation	4706	56	2018-03-22 05:37:06.797872	2018-03-22 05:37:06.797872	\N	169	120	102	5ErKrSyUpEo	353
802	Rolfson, Torphy and Romaguera	2017-03-31	Organic dynamic functionalities	10315	288	2018-03-22 05:37:06.801503	2018-03-22 05:37:06.801503	\N	169	122	99	6oLsJUH1cfU	869
803	Nitzsche, Runte and Yost	2017-03-31	Compatible non-volatile structure	16868	21	2018-03-22 05:37:06.810575	2018-03-22 05:37:06.810575	\N	170	119	99	y1yK36RMyRE	2884
804	Lueilwitz and Sons	2018-04-22	Focused incremental database	6994	299	2018-03-22 05:37:06.82096	2018-03-22 05:37:06.82096	\N	170	122	101	qWNae7vYK6s	2726
805	Koch, Lind and Baumbach	2015-03-21	Enhanced incremental matrix	13068	199	2018-03-22 05:37:06.828759	2018-03-22 05:37:06.828759	\N	170	121	102	qWNae7vYK6s	1013
806	Pagac, Kovacek and Conn	2017-03-31	Multi-tiered asymmetric encoding	13791	5	2018-03-22 05:37:06.831295	2018-03-22 05:37:06.831295	\N	170	121	101	b4k-KPELNcc	2183
807	Weimann, Gorczany and Ebert	2017-03-31	Multi-channelled bi-directional solution	14862	285	2018-03-22 05:37:06.834183	2018-03-22 05:37:06.834183	\N	169	122	102	_CEKKHyxgaw	621
808	Reinger and Sons	2018-04-22	Synchronised 3rd generation circuit	19455	202	2018-03-22 05:37:06.83684	2018-03-22 05:37:06.83684	\N	170	119	102	dDZoGcQVjJg	2283
809	VonRueden-Labadie	2018-04-22	Reduced background adapter	9433	100	2018-03-22 05:37:06.839422	2018-03-22 05:37:06.839422	\N	168	122	101	3o655tLnik0	2073
810	Gleason-Mertz	2018-04-22	Exclusive local application	11556	112	2018-03-22 05:37:06.841941	2018-03-22 05:37:06.841941	\N	168	119	99	a17Z5Sk2XJY	2304
811	Hegmann-Sipes	2015-03-21	Persistent 3rd generation task-force	562	34	2018-03-22 05:37:06.844378	2018-03-22 05:37:06.844378	\N	171	119	101	JrRRvqgYgT0	1842
812	Buckridge, Bogan and Auer	2015-03-21	Sharable fresh-thinking moratorium	1560	111	2018-03-22 05:37:06.846857	2018-03-22 05:37:06.846857	\N	171	120	102	hfznpykprP0	1301
814	Koepp and Sons	2018-04-22	Focused contextually-based open system	1967	264	2018-03-22 05:37:06.8518	2018-03-22 05:37:06.8518	\N	169	121	99	1oNlTrLIjU4	1774
815	Conroy, Hahn and Heathcote	2014-04-01	Persevering background migration	4239	157	2018-03-22 05:37:06.854764	2018-03-22 05:37:06.854764	\N	169	119	102	swB7Ivct8d8	2834
816	Cremin, Franecki and Tremblay	2015-03-21	Advanced zero defect extranet	7449	297	2018-03-22 05:37:06.857775	2018-03-22 05:37:06.857775	\N	171	120	101	C6mNITMY7e0	2608
818	Rogahn Inc	2014-04-01	User-friendly next generation internet solution	16542	198	2018-03-22 05:37:06.862695	2018-03-22 05:37:06.862695	\N	168	122	101	fWqKalpYgLo	596
819	Dooley and Sons	2018-04-22	Front-line upward-trending open architecture	255	183	2018-03-22 05:37:06.865101	2018-03-22 05:37:06.865101	\N	168	121	102	JrRRvqgYgT0	971
820	Kuhlman-Farrell	2018-04-22	Polarised systemic focus group	12643	212	2018-03-22 05:37:06.867571	2018-03-22 05:37:06.867571	\N	169	121	99	nLB8A--QdHc	543
821	Reilly-Crooks	2014-04-01	Polarised exuding knowledge base	14954	93	2018-03-22 05:37:06.870189	2018-03-22 05:37:06.870189	\N	171	120	99	G88JZ1DIdg8	1522
822	Kling, Huels and Schamberger	2014-04-01	Persistent tangible software	14131	6	2018-03-22 05:37:06.872625	2018-03-22 05:37:06.872625	\N	171	119	99	S-3qnZrVy9o	294
823	Reinger, Douglas and Wehner	2015-03-21	Implemented composite focus group	17231	270	2018-03-22 05:37:06.875143	2018-03-22 05:37:06.875143	\N	169	120	99	Uq1idqpX9-A	1360
785	Fahey-Deckow	2017-03-31	Profit-focused impactful internet solution	17418	126	2018-03-22 05:37:06.75389	2018-03-22 15:25:00.486894	\N	171	121	99	XZiNVGA78kA	11352
787	Connelly, Dietrich and Blick	2018-04-22	Synergized mobile budgetary management	3361	65	2018-03-22 05:37:06.759892	2018-03-22 15:26:23.618489	\N	168	122	100	HNMQ_w7hXTA	2268
788	Ritchie, Macejkovic and Koch	2015-03-21	Enterprise-wide modular productivity	14716	253	2018-03-22 05:37:06.762454	2018-03-22 15:36:33.528654	\N	170	122	102	1tcqfWki-hw	16608
813	Kemmer-Wintheiser	2015-03-21	Diverse object-oriented task-force	14339	101	2018-03-22 05:37:06.849275	2018-03-22 15:37:07.816781	\N	170	120	100	HX17MXvwYHo	11942
903	Mytoothpastedemo	\N	this is a trest	10000	\N	2018-03-22 15:39:33.95879	2018-03-22 15:39:33.95879	\N	170	119	100	youtbefef.com	1
906	TESTING TESTING	\N	this is a trest	10000	\N	2018-03-22 15:40:54.464551	2018-03-22 15:40:54.464551	\N	170	119	100	youtbefef.com	1
908	TESTTOOTHPASTE	\N	wniww	10000	\N	2018-03-22 15:45:56.93967	2018-03-22 15:45:56.93967	\N	171	119	101	ddd	1
783	Spencer-Bayer	2018-04-22	Sharable asymmetric access	11766	55	2018-03-22 05:37:06.721721	2018-03-22 16:40:33.845063	\N	171	119	100	O6Vayv9FCLM	13126
791	Hand, Lehner and Purdy	2014-04-01	Digitized zero defect application	19140	21	2018-03-22 05:37:06.770516	2018-03-22 16:46:51.579364	\N	169	120	100	mLufqwmPl1A	2488
786	Gibson, Wiza and Jenkins	2017-03-31	Progressive full-range paradigm	12634	121	2018-03-22 05:37:06.757037	2018-03-22 16:53:13.911084	\N	171	122	99	PfWGiu0jGv0	7315
912	THISISTHENEWCRAZYDEMO	\N	HERE IS THE TEST DATA	100000	\N	2018-03-22 16:55:09.691061	2018-03-22 16:55:09.691061	\N	168	119	101	you.com	1
793	Upton, Gleichner and Welch	2014-04-01	Streamlined intangible circuit	8752	225	2018-03-22 05:37:06.776487	2018-03-22 17:08:23.676269	\N	169	119	101	iU1bhHeCkoU	7821
784	Hodkiewicz-McClure	2014-04-01	Sharable methodical Graphic Interface	471	279	2018-03-22 05:37:06.750534	2018-03-22 18:06:49.251477	\N	168	120	100	qWNae7vYK6s	1776
817	Heathcote Inc	2017-03-31	Multi-layered scalable project	12561	184	2018-03-22 05:37:06.860314	2018-03-22 17:40:04.221124	\N	169	122	100	_bm98rrVZzE	3713
789	Lang, Reichert and Willms	2017-03-31	Adaptive radical application	19258	177	2018-03-22 05:37:06.765262	2018-03-22 18:07:30.314125	\N	168	119	101	k0GQSJrpVhM	2709
913	Macintosh	\N	This is a PC that will revolutionize consumer behavior.	100000	\N	2018-03-22 18:10:13.402126	2018-03-22 18:10:13.402126	\N	169	119	100		1
917	Microsoft 	\N	This will be the most amazing software ever.	1000000	\N	2018-03-22 19:57:51.621607	2018-03-22 19:57:51.621607	\N	168	119	100	LwbWwo_60Vg	1
824	Fritsch, Tromp and Ullrich	2015-03-21	User-centric analyzing throughput	1273	127	2018-03-22 05:37:06.877579	2018-03-22 05:37:06.877579	\N	168	122	102	_bm98rrVZzE	920
825	Predovic and Sons	2015-03-21	Exclusive user-facing info-mediaries	19579	220	2018-03-22 05:37:06.880227	2018-03-22 05:37:06.880227	\N	169	121	99	Sv5QitqbxJw	837
826	Morar, Gorczany and Murazik	2018-04-22	Digitized contextually-based hierarchy	828	245	2018-03-22 05:37:06.882644	2018-03-22 05:37:06.882644	\N	171	120	100	b4k-KPELNcc	246
827	Gibson, Zieme and Nienow	2014-04-01	Secured bandwidth-monitored database	17936	117	2018-03-22 05:37:06.885439	2018-03-22 05:37:06.885439	\N	169	122	100	73rUjrow5pI	2967
828	Feest, Gutmann and Cartwright	2015-03-21	Proactive national help-desk	4238	268	2018-03-22 05:37:06.888062	2018-03-22 05:37:06.888062	\N	169	121	100	B905LapVP7I	2555
829	Walker-Bogisich	2017-03-31	Right-sized mission-critical moratorium	1218	233	2018-03-22 05:37:06.890593	2018-03-22 05:37:06.890593	\N	171	121	102	YATYsgi3e5A	1803
830	Gaylord, Purdy and Hermiston	2017-03-31	Versatile system-worthy conglomeration	17016	284	2018-03-22 05:37:06.89315	2018-03-22 05:37:06.89315	\N	168	122	99	OzA6jRYjVQs	2090
831	Boyle-Pacocha	2018-04-22	Focused demand-driven hierarchy	1772	90	2018-03-22 05:37:06.89579	2018-03-22 05:37:06.89579	\N	170	119	101	OzA6jRYjVQs	561
832	Emard-Schneider	2014-04-01	Proactive foreground initiative	18004	208	2018-03-22 05:37:06.8982	2018-03-22 05:37:06.8982	\N	169	119	100	9y7YEmyz-Do	2606
833	Raviga Capital Management	2017-03-31	Forced adoption through aggressive guerrilla marketing	958	69	2018-03-22 05:37:06.900557	2018-03-22 05:37:06.900557	\N	171	119	99	2VjfZKzzEi0	1063
834	Infotrode	2018-04-22	Oh, danger will most certainly be proceeded in the face of. Right in its face. Right in it.	11445	20	2018-03-22 05:37:06.902844	2018-03-22 05:37:06.902844	\N	171	121	102	yKY_096tJ08	2150
835	Bachmanity	2018-04-22	So maybe the reason we share so much is because we understand that without sharing, we can't survive. And sharing is tables.	6019	287	2018-03-22 05:37:06.905476	2018-03-22 05:37:06.905476	\N	171	121	100	YjtBNbHAfZs	1207
836	Bachmanity	2018-04-22	Powered by the spirit of exploration and the thrill of the pursuit of the unimaginable	15285	116	2018-03-22 05:37:06.908438	2018-03-22 05:37:06.908438	\N	171	119	99	HjzBW1KYy7Y	1390
837	Entercross Systems	2015-03-21	The drink that doesn't give a fuck!	13781	36	2018-03-22 05:37:06.911093	2018-03-22 05:37:06.911093	\N	168	120	102	w8EUjTgDZas	2565
838	Raviga Capital Management	2015-03-21	Awesome world-changing compression company	14249	58	2018-03-22 05:37:06.91344	2018-03-22 05:37:06.91344	\N	171	122	99	HvFanqfaqDU	2818
839	Maleant Data Systems Solutions	2018-04-22	The drink that doesn't give a fuck!	15898	95	2018-03-22 05:37:06.915867	2018-03-22 05:37:06.915867	\N	168	121	101	Xon71-UXJ9Y	1401
904	Mytoothpastedemo	\N	this is a trest	10000	\N	2018-03-22 15:40:07.387674	2018-03-22 15:40:07.387674	\N	170	119	100	youtbefef.com	1
907	TESTING TESTING	\N	this is a trest	10000	\N	2018-03-22 15:41:45.63726	2018-03-22 15:41:45.63726	\N	170	119	100	youtbefef.com	1
918	Jeff Bezos	\N	This is richest man in world.	1000	\N	2018-03-22 19:58:50.006441	2018-03-22 19:58:50.006441	\N	170	119	100	test	1
920	MyAwesome App	\N	Makes Fancy Designs	5000	\N	2018-03-22 20:38:16.323209	2018-03-22 20:38:16.323209	\N	171	119	100	rWRbTnE1PEM	1
914	Apple Macintosh	\N	This is a PC that will revolutionize consumer behavior.	100000	\N	2018-03-22 18:10:56.80197	2018-03-22 20:57:51.112795	\N	169	119	100	2B-XwPjn9YY	39101
840	Bachmanity	2018-04-22	Making the world a better place	15443	79	2018-03-22 05:37:06.918861	2018-03-22 05:37:06.918861	\N	170	120	102	3vfjEN786M4	2899
905	Mytoothpastedemo	\N	this is a trest	10000	\N	2018-03-22 15:40:16.419073	2018-03-22 15:40:16.419073	\N	170	119	100	youtbefef.com	1
909	JUANGONZALEZ	\N	JUANGONZALEZ	10000	\N	2018-03-22 16:39:02.194877	2018-03-22 16:39:02.194877	\N	171	119	101	JUANGONZALEZ.COM	1
910	SUNNYDAY	\N	efef	11	\N	2018-03-22 16:47:48.087749	2018-03-22 16:47:48.087749	\N	171	119	100	11	1
841	Retinabyte	2014-04-01	Our products are products, producing unrivaled results	14647	299	2018-03-22 05:37:06.921394	2018-03-22 19:32:14.919358	\N	169	122	100	CdImGcHrA5k	5376
842	Turnwire	2015-03-21	Our products are products, producing unrivaled results	16212	31	2018-03-22 05:37:06.923974	2018-03-22 05:37:06.923974	\N	171	122	100	XgbgNhLQQ44	1217
843	Raviga	2014-04-01	Forced adoption through aggressive guerrilla marketing	18148	294	2018-03-22 05:37:06.926642	2018-03-22 05:37:06.926642	\N	168	121	101	4h3UTpwJnCY	2112
915	SUPERSOFT	\N	This will be the software that changes PCs	1000	\N	2018-03-22 19:53:43.700213	2018-03-22 19:53:43.700213	\N	170	119	100	LwbWwo_60Vg	1
844	Maleant Data Systems Solutions	2015-03-21	Isn't it time someone put the venture back into venture capital?	11205	159	2018-03-22 05:37:06.92912	2018-03-22 05:37:06.92912	\N	169	122	101	UFDhlVV_ZFg	568
845	VidClone Graphics	2014-04-01	Creating unique cross-platform technologies	12099	97	2018-03-22 05:37:06.931907	2018-03-22 05:37:06.931907	\N	170	119	99	8qH17X9JbMk	1955
846	Hooli	2018-04-22	Creating unique cross-platform technologies	10374	173	2018-03-22 05:37:06.934144	2018-03-22 05:37:06.934144	\N	170	120	100	3vfjEN786M4	26
847	Infotrode	2017-03-31	Powered by the spirit of exploration and the thrill of the pursuit of the unimaginable	18175	118	2018-03-22 05:37:06.936787	2018-03-22 05:37:06.936787	\N	171	121	99	8x7sFttRTUM	2049
848	VidClone Graphics	2015-03-21	Isn't it time someone put the venture back into venture capital?	14291	229	2018-03-22 05:37:06.940031	2018-03-22 05:37:06.940031	\N	170	121	99	0QBf4WY5kA8	720
849	Infotrode	2014-04-01	The drink that doesn't give a fuck!	7554	277	2018-03-22 05:37:06.942794	2018-03-22 05:37:06.942794	\N	168	122	101	v2hEYn9l9ys	607
850	Bachmanity	2015-03-21	So maybe the reason we share so much is because we understand that without sharing, we can't survive. And sharing is tables.	10254	246	2018-03-22 05:37:06.945138	2018-03-22 05:37:06.945138	\N	168	122	100	EF8LhYIB5kw	2248
851	Hooli	2014-04-01	Are bandwidth costs harshing on your vibe?	1893	38	2018-03-22 05:37:06.947443	2018-03-22 05:37:06.947443	\N	171	122	99	bOMfwwDtQow	2514
852	Bream-Hall	2018-04-22	Powered by the spirit of exploration and the thrill of the pursuit of the unimaginable	11580	118	2018-03-22 05:37:06.950113	2018-03-22 05:37:06.950113	\N	168	121	99	jl7wIDtsp4o	750
853	Infotrode	2018-04-22	Creating unique cross-platform technologies	9573	113	2018-03-22 05:37:06.952479	2018-03-22 05:37:06.952479	\N	169	119	101	0QBf4WY5kA8	1783
854	Aviato	2017-03-31	Cloud-based, disruptive systems	12669	238	2018-03-22 05:37:06.955008	2018-03-22 05:37:06.955008	\N	169	119	102	zux5tE54Ato	803
855	Yoyodyne	2014-04-01	Creating unique cross-platform technologies	16823	63	2018-03-22 05:37:06.958025	2018-03-22 05:37:06.958025	\N	169	120	100	8HmgiF4VxuA	2791
856	SeeFood Technologies Inc	2018-04-22	Creating unique cross-platform technologies	17431	121	2018-03-22 05:37:06.960471	2018-03-22 05:37:06.960471	\N	169	120	99	PoMusI-nsX8	1580
857	Bachmanity	2014-04-01	Forced adoption through aggressive guerrilla marketing	14624	36	2018-03-22 05:37:06.963185	2018-03-22 05:37:06.963185	\N	170	120	99	s_xK4GdEG0w	1753
858	VidClone Graphics	2018-04-22	Awesome world-changing compression company	10032	80	2018-03-22 05:37:06.965481	2018-03-22 05:37:06.965481	\N	169	120	101	Y2H1Q_AzFpE	1854
859	Retinabyte	2014-04-01	Creating unique cross-platform technologies	17221	113	2018-03-22 05:37:06.967762	2018-03-22 05:37:06.967762	\N	170	122	99	twm_B6YgeXU	2471
860	Maleant Data Systems Solutions	2014-04-01	Isn't it time someone put the venture back into venture capital?	17980	102	2018-03-22 05:37:06.970795	2018-03-22 05:37:06.970795	\N	169	120	100	twm_B6YgeXU	1390
861	Yoyodyne	2014-04-01	Oh, danger will most certainly be proceeded in the face of. Right in its face. Right in it.	2487	229	2018-03-22 05:37:06.973266	2018-03-22 05:37:06.973266	\N	168	122	99	9XIqJBvV3uk	1393
862	Maleant Data Systems Solutions	2018-04-22	Isn't it time someone put the venture back into venture capital?	15600	274	2018-03-22 05:37:06.97568	2018-03-22 05:37:06.97568	\N	171	120	99	jH7Jfj-_7KI	283
863	Pied Piper	2017-03-31	Our products are products, producing unrivaled results	18998	17	2018-03-22 05:37:06.97813	2018-03-22 05:37:06.97813	\N	168	121	102	ZH6yk9Vmzn8	2146
864	Entercross Systems	2015-03-21	Powered by the spirit of exploration and the thrill of the pursuit of the unimaginable	7050	57	2018-03-22 05:37:06.980494	2018-03-22 05:37:06.980494	\N	168	121	100	lsxF8kJEjuE	462
865	Endframe	2018-04-22	Awesome world-changing compression company	12166	68	2018-03-22 05:37:06.982761	2018-03-22 05:37:06.982761	\N	169	122	102	uACmXQvvaTs	317
866	VidClone Graphics	2018-04-22	We not only think outside of the box, we think outside of the box that box is in - and so on - until innovation is free of all boxes that would contain and constrain it	9121	173	2018-03-22 05:37:06.985115	2018-03-22 05:37:06.985115	\N	170	120	100	qpBXPvVICd8	1082
867	Entercross Systems	2015-03-21	Awesome world-changing compression company	3031	202	2018-03-22 05:37:06.987811	2018-03-22 05:37:06.987811	\N	171	120	101	jrvzLBN-gow	1358
868	Yoyodyne	2015-03-21	So maybe the reason we share so much is because we understand that without sharing, we can't survive. And sharing is tables.	9141	278	2018-03-22 05:37:06.990464	2018-03-22 05:37:06.990464	\N	169	121	99	BxXp7KwIVOI	324
869	Aviato	2015-03-21	Isn't it time someone put the venture back into venture capital?	9867	223	2018-03-22 05:37:06.993044	2018-03-22 05:37:06.993044	\N	171	119	100	uG_hf8-YJzI	2174
870	Infotrode	2014-04-01	Isn't it time someone put the venture back into venture capital?	1947	165	2018-03-22 05:37:06.995506	2018-03-22 05:37:06.995506	\N	171	122	100	q4KZmYSH8jc	1299
871	Bream-Hall	2014-04-01	So maybe the reason we share so much is because we understand that without sharing, we can't survive. And sharing is tables.	18451	294	2018-03-22 05:37:06.997898	2018-03-22 05:37:06.997898	\N	168	122	100	BVZFXz48pXQ	2073
872	Pied Piper	2018-04-22	Are bandwidth costs harshing on your vibe?	2716	139	2018-03-22 05:37:07.000492	2018-03-22 05:37:07.000492	\N	170	122	99	jl7wIDtsp4o	2871
873	Raviga Capital Management	2014-04-01	Forced adoption through aggressive guerrilla marketing	407	274	2018-03-22 05:37:07.00283	2018-03-22 05:37:07.00283	\N	170	120	99	aDRnHNsj07w	537
874	Bream-Hall	2017-03-31	Making the world a better place	16483	227	2018-03-22 05:37:07.005479	2018-03-22 05:37:07.005479	\N	169	121	100	IxUJDWlqa0I	633
875	Turnwire	2015-03-21	Awesome world-changing compression company	11661	250	2018-03-22 05:37:07.008289	2018-03-22 05:37:07.008289	\N	171	121	99	rjO7nKD0e10	1676
876	Coleman-Blair	2018-04-22	Making the world a better place	9357	258	2018-03-22 05:37:07.010713	2018-03-22 05:37:07.010713	\N	168	119	102	KVx2W2cwgVY	479
877	Entercross Systems	2015-03-21	Are bandwidth costs harshing on your vibe?	10854	260	2018-03-22 05:37:07.013006	2018-03-22 05:37:07.013006	\N	171	119	102	eBTA0dIFDXg	1645
878	Bream-Hall	2017-03-31	Making the world a better place	7667	89	2018-03-22 05:37:07.015306	2018-03-22 05:37:07.015306	\N	169	120	101	oPBZf1Ue9A0	2564
879	Pied Piper	2017-03-31	Are bandwidth costs harshing on your vibe?	14896	97	2018-03-22 05:37:07.017924	2018-03-22 05:37:07.017924	\N	169	120	100	eBTA0dIFDXg	2859
880	Maleant Data Systems Solutions	2017-03-31	Our products are products, producing unrivaled results	18100	221	2018-03-22 05:37:07.020369	2018-03-22 05:37:07.020369	\N	169	119	101	-xV9WLtQtnc	875
881	Bream-Hall	2015-03-21	Are bandwidth costs harshing on your vibe?	7317	298	2018-03-22 05:37:07.022941	2018-03-22 05:37:07.022941	\N	169	119	102	-eUf-WPI9yU	1940
882	Maleant Data Systems Solutions	2018-04-22	The drink that doesn't give a fuck!	10253	95	2018-03-22 05:37:07.025501	2018-03-22 05:37:07.025501	\N	171	119	102	UPJLMSaV6DE	1835
883	Bytesoft	2017-03-31	Focusing on software for business and consumer solutions.	17473	197	2018-03-22 05:37:07.047756	2018-03-22 05:37:07.047756	\N	169	119	99	WRduVfYXjI8	8274
884	Pear	2021-01-01	The makers of innovative smart devices with amazing UI and UX.	8000	10	2018-03-22 05:37:07.049995	2018-03-22 05:37:07.049995	\N	171	119	99	3H-Y-D3-j-M	1
885	LaggerGram	2016-10-06	Share your throwback photos with your friends and the world.	2300	60	2018-03-22 05:37:07.052444	2018-03-22 05:37:07.052444	\N	168	119	100	KAC_JAnhspw	1
886	Book of Faces	2004-02-04	Connect with all your college mates and find out creepy things about them.	8104	7	2018-03-22 05:37:07.054975	2018-03-22 05:37:07.054975	\N	168	119	102	WzgNAN3dW-I	1
887	A2Z	2018-03-31	We are an e-commerce platform that sells virtually everything from A to Z.	4938	60	2018-03-22 05:37:07.057522	2018-03-22 05:37:07.057522	\N	170	119	99	BhKEOYsOSds	1
888	Pied Piper	2014-04-06	Middle out compression algorithm	4682	39	2018-03-22 05:37:07.060004	2018-03-22 05:37:07.060004	\N	170	119	102	7m2j_0ivw2I	1
889	Chillflix	1997-08-29	On demand movies and tv shows served from the cloud. You'll spend more time finding than watching.	6103	81	2018-03-22 05:37:07.062322	2018-03-22 05:37:07.062322	\N	168	119	100	tCn4hdTI2jc	1
890	Ober	2018-03-31	InsertCompanyDescription	3718	54	2018-03-22 05:37:07.064521	2018-03-22 05:37:07.064521	\N	168	119	100	PE7M-obxSvg	1
891	Food Grab	2014-12-31	Have your food ready for you when you arrive.	1982	14	2018-03-22 05:37:07.066727	2018-03-22 05:37:07.066727	\N	168	119	100	xem76O8Tsx0	1
892	iBay	1995-09-03	Online auction site where users can bid on products and sell their own items.	4524	28	2018-03-22 05:37:07.068904	2018-03-22 05:37:07.068904	\N	168	119	101	E22BbbEZAaw	1
893	MoneyPal	1998-12-01	Securely complete online transactions with your credit card or bank	5985	64	2018-03-22 05:37:07.071299	2018-03-22 05:37:07.071299	\N	168	119	101	so9uIkFKCnc	1
894	Rectangle	2009-02-01	Accept card payments virtually anywhere	1650	58	2018-03-22 05:37:07.07394	2018-03-22 05:37:07.07394	\N	169	119	99	NfCFAsJsNp8	1
895	Tweeter	2006-03-21	Share your thoughts with the world in 140 characters or less.	4001	32	2018-03-22 05:37:07.077847	2018-03-22 05:37:07.077847	\N	168	119	100	SBDYYGER5iM	1
896	Readit	2005-06-23	The best online community. EVER.	2308	79	2018-03-22 05:37:07.080669	2018-03-22 05:37:07.080669	\N	170	119	99	sf9tBmMfFcw	1
897	DropStorage	2007-06-01	Cloud storage solutions for consumers and enterprises.	6215	41	2018-03-22 05:37:07.084566	2018-03-22 05:37:07.084566	\N	168	119	99	zjSFC6pPkyk	1
898	Hooli	2014-04-06	We're more than the chat, mail, search and phone. We are making the world a better place.	1906	53	2018-03-22 05:37:07.087347	2018-03-22 05:37:07.087347	\N	170	119	99	h6SQjKRAaGI	1
899	ElonMotors	2018-03-31	A revolutionary company specializing in electric vehicles, battery packs, and solar panels.	1864	96	2018-03-22 05:37:07.090208	2018-03-22 05:37:07.090208	\N	169	119	99	cJ9Xep22oEY	1
900	PicChat	2012-10-29	Share your day via disappearing videos and pictues.	4483	87	2018-03-22 05:37:07.092552	2018-03-22 05:37:07.092552	\N	168	119	101	ykGXIQAHLnA	1
901	Musicify	2008-10-07	On demand songs curated to your music taste.	9771	7	2018-03-22 05:37:07.095014	2018-03-22 05:37:07.095014	\N	168	119	99	zVHR1Ol7K5U	1
902	Exphone	1938-03-01	We make phones that can explode at any time.	1292	79	2018-03-22 05:37:07.097821	2018-03-22 05:37:07.097821	\N	169	119	101	yvLJd7VzYOE	1
916	miscrosoft	\N	dwdww	1111	\N	2018-03-22 19:55:14.749061	2018-03-22 19:55:14.749061	\N	171	119	100	111111	1
919	JAZZYJAZZMOST AMAZING COMPANY	\N	fmkfkekfe	111111111	\N	2018-03-22 20:13:08.373887	2018-03-22 20:13:08.373887	\N	169	119	101		1
921	my demo	\N	cool game 	10000	\N	2018-03-22 20:47:22.04771	2018-03-22 20:47:22.04771	\N	170	119	101	rWRbTnE1PEM	1
922	Mycoolapp	\N	cool designs	10000	\N	2018-03-22 20:59:13.149973	2018-03-22 20:59:13.149973	\N	170	119	101	p7FgXSoqfnI	1
\.


--
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: brandon
--

COPY public.events (id, name, date, created_at, updated_at) FROM stdin;
99	Hacker Stack Labs Demo Day	2017-03-31	2018-03-22 05:37:05.979339	2018-03-22 05:37:05.979339
100	LHL Toronto	2018-04-22	2018-03-22 05:37:05.983861	2018-03-22 05:37:05.983861
101	Brainstation	2015-03-21	2018-03-22 05:37:05.987905	2018-03-22 05:37:05.987905
102	HackerYou	2014-04-01	2018-03-22 05:37:05.990034	2018-03-22 05:37:05.990034
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: brandon
--

COPY public.orders (id, amount, created_at, updated_at, user_id, demo_id, "stripeToken") FROM stdin;
25	10000	2018-03-22 15:11:20.931405	2018-03-22 15:11:20.931405	119	783	tok_1C8V4OEnz7Sk3zJd4m2A4EtL
26	1000	2018-03-22 15:24:02.221193	2018-03-22 15:24:02.221193	119	787	tok_1C8VGGEnz7Sk3zJd7tafmkAu
27	10000	2018-03-22 15:25:00.456851	2018-03-22 15:25:00.456851	119	785	tok_1C8VHgEnz7Sk3zJdeujLUQ64
28	1000	2018-03-22 15:26:23.609481	2018-03-22 15:26:23.609481	119	787	tok_1C8VJ1Enz7Sk3zJdscBBGSze
29	5000	2018-03-22 15:27:12.441782	2018-03-22 15:27:12.441782	119	786	tok_1C8VJoEnz7Sk3zJdP1kskkrU
30	15000	2018-03-22 15:36:33.519851	2018-03-22 15:36:33.519851	119	788	tok_1C8VSrEnz7Sk3zJdFNJbpvpb
31	10000	2018-03-22 15:37:07.807152	2018-03-22 15:37:07.807152	119	813	tok_1C8VTQEnz7Sk3zJdxc6jvlq1
32	1000	2018-03-22 16:40:33.833703	2018-03-22 16:40:33.833703	119	783	tok_1C8WSnEnz7Sk3zJdC9hjycva
33	10	2018-03-22 16:45:46.14575	2018-03-22 16:45:46.14575	119	791	tok_1C8WXqEnz7Sk3zJdLC5HoVJr
34	10	2018-03-22 16:46:51.570865	2018-03-22 16:46:51.570865	119	791	tok_1C8WYuEnz7Sk3zJdobunQl0b
35	1000	2018-03-22 16:53:13.902494	2018-03-22 16:53:13.902494	119	786	tok_1C8Wf4Enz7Sk3zJdiLJTVvOw
36	5000	2018-03-22 16:54:20.27964	2018-03-22 16:54:20.27964	119	793	tok_1C8Wg8Enz7Sk3zJd5Bh8xXxh
37	2000	2018-03-22 17:08:23.668066	2018-03-22 17:08:23.668066	119	793	tok_1C8WtjEnz7Sk3zJdhOAoBpn8
38	1000	2018-03-22 17:09:14.98927	2018-03-22 17:09:14.98927	119	911	tok_1C8WuZEnz7Sk3zJdT8wqame6
39	1000	2018-03-22 17:35:13.555471	2018-03-22 17:35:13.555471	119	817	tok_1C8XJhEnz7Sk3zJdR0rlJVn7
40	55	2018-03-22 17:40:04.213069	2018-03-22 17:40:04.213069	119	817	tok_1C8XOOEnz7Sk3zJdtzEzYc9r
41	1	2018-03-22 18:06:49.242665	2018-03-22 18:06:49.242665	119	784	tok_1C8XoHEnz7Sk3zJddXnN51hE
42	1	2018-03-22 18:07:30.305379	2018-03-22 18:07:30.305379	119	789	tok_1C8XowEnz7Sk3zJdsjf1T0zi
43	1000	2018-03-22 18:52:33.258482	2018-03-22 18:52:33.258482	119	914	tok_1C8YUgEnz7Sk3zJdr1IO02wd
44	1000	2018-03-22 18:53:10.963856	2018-03-22 18:53:10.963856	119	914	tok_1C8YX8Enz7Sk3zJdqo1XX2oJ
45	1000	2018-03-22 18:54:02.58606	2018-03-22 18:54:02.58606	119	914	tok_1C8YXyEnz7Sk3zJduoiMnU89
46	10000	2018-03-22 18:54:51.192875	2018-03-22 18:54:51.192875	119	914	tok_1C8YYlEnz7Sk3zJdg381reVq
47	5000	2018-03-22 19:32:14.910539	2018-03-22 19:32:14.910539	119	841	tok_1C8Z8wEnz7Sk3zJdLQSMg1TN
48	100	2018-03-22 19:33:26.401058	2018-03-22 19:33:26.401058	119	914	tok_1C8ZA5Enz7Sk3zJdO6dxkGpj
49	1000	2018-03-22 20:10:10.114015	2018-03-22 20:10:10.114015	119	914	tok_1C8ZjeEnz7Sk3zJdfRn2Hev7
50	5000	2018-03-22 20:10:29.426814	2018-03-22 20:10:29.426814	119	914	tok_1C8ZjxEnz7Sk3zJdhoe0qNA9
51	5000	2018-03-22 20:36:57.008184	2018-03-22 20:36:57.008184	119	914	tok_1C8a9ZEnz7Sk3zJd6EOvIYf0
52	5000	2018-03-22 20:43:54.566622	2018-03-22 20:43:54.566622	119	914	tok_1C8aGIEnz7Sk3zJdVvh2AKpy
53	10000	2018-03-22 20:57:51.104515	2018-03-22 20:57:51.104515	119	914	tok_1C8aTnEnz7Sk3zJdjMNCnO7f
\.


--
-- Data for Name: schema_migrations; Type: TABLE DATA; Schema: public; Owner: brandon
--

COPY public.schema_migrations (version) FROM stdin;
20180311053213
20180311064345
20180311183938
20180311193130
20180311193943
20180311202447
20180311211318
20180312021051
20180312021209
20180312022942
20180312024523
20180312030804
20180314200049
20180314200801
20180314201414
20180315215426
20180321073507
20180321094010
20180321102831
20180321110150
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: brandon
--

COPY public.users (id, name, email, password_digest, created_at, updated_at, username) FROM stdin;
119	Jazz	jazz@jazz.com	$2a$10$D6OElQAKUomvTZRuupsiR.2e/NlKwivrUbzeGvxQ0m8.KzSrn3qMO	2018-03-22 05:37:05.92154	2018-03-22 05:37:05.92154	\N
120	Brandon	brandon@brandon.com	$2a$10$jh6voaBhrjy.ifUVU/HePeZjJMDn1Y.pq0GEc7vgDMNixYTTWOkdC	2018-03-22 05:37:05.926226	2018-03-22 05:37:05.926226	\N
121	Cookie Monster	cookiemonster@sesamestreet.com	$2a$10$BGVT.xz6l8lGl4dZBb76/eQrHARimTLXV21VbeMt2VgeMsaoZF58K	2018-03-22 05:37:05.928892	2018-03-22 05:37:05.928892	\N
122	Marty McFly	Marty@marty.com	$2a$10$qLJB/CFtEbh1QiLSNSuDr.PigGlzqPOIfp9nCj/a1Rw/hVnVljEQm	2018-03-22 05:37:05.931546	2018-03-22 05:37:05.931546	\N
\.


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: brandon
--

SELECT pg_catalog.setval('public.categories_id_seq', 171, true);


--
-- Name: demos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: brandon
--

SELECT pg_catalog.setval('public.demos_id_seq', 922, true);


--
-- Name: events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: brandon
--

SELECT pg_catalog.setval('public.events_id_seq', 102, true);


--
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: brandon
--

SELECT pg_catalog.setval('public.orders_id_seq', 53, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: brandon
--

SELECT pg_catalog.setval('public.users_id_seq', 122, true);


--
-- Name: ar_internal_metadata ar_internal_metadata_pkey; Type: CONSTRAINT; Schema: public; Owner: brandon
--

ALTER TABLE ONLY public.ar_internal_metadata
    ADD CONSTRAINT ar_internal_metadata_pkey PRIMARY KEY (key);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: brandon
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: demos demos_pkey; Type: CONSTRAINT; Schema: public; Owner: brandon
--

ALTER TABLE ONLY public.demos
    ADD CONSTRAINT demos_pkey PRIMARY KEY (id);


--
-- Name: events events_pkey; Type: CONSTRAINT; Schema: public; Owner: brandon
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_pkey PRIMARY KEY (id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: brandon
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: brandon
--

ALTER TABLE ONLY public.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: brandon
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: index_demos_on_category_id; Type: INDEX; Schema: public; Owner: brandon
--

CREATE INDEX index_demos_on_category_id ON public.demos USING btree (category_id);


--
-- Name: index_demos_on_event_id; Type: INDEX; Schema: public; Owner: brandon
--

CREATE INDEX index_demos_on_event_id ON public.demos USING btree (event_id);


--
-- Name: index_demos_on_user_id; Type: INDEX; Schema: public; Owner: brandon
--

CREATE INDEX index_demos_on_user_id ON public.demos USING btree (user_id);


--
-- Name: index_orders_on_demo_id; Type: INDEX; Schema: public; Owner: brandon
--

CREATE INDEX index_orders_on_demo_id ON public.orders USING btree (demo_id);


--
-- Name: index_orders_on_user_id; Type: INDEX; Schema: public; Owner: brandon
--

CREATE INDEX index_orders_on_user_id ON public.orders USING btree (user_id);


--
-- Name: orders fk_rails_3da4c03e4e; Type: FK CONSTRAINT; Schema: public; Owner: brandon
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT fk_rails_3da4c03e4e FOREIGN KEY (demo_id) REFERENCES public.demos(id);


--
-- Name: orders fk_rails_f868b47f6a; Type: FK CONSTRAINT; Schema: public; Owner: brandon
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT fk_rails_f868b47f6a FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

