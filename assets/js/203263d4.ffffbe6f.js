"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7990],{4137:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return c}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=d(a),c=r,k=m["".concat(o,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(k,i(i({ref:e},p),{},{components:a})):n.createElement(k,i({ref:e},p))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4287:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(4137)),i=["components"],s={slug:"/metadata-ingestion",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/README.md"},o="Metadata Ingestion",d={unversionedId:"metadata-ingestion/README",id:"metadata-ingestion/README",isDocsHomePage:!1,title:"Metadata Ingestion",description:"Python version 3.6+",source:"@site/genDocs/metadata-ingestion/README.md",sourceDirName:"metadata-ingestion",slug:"/metadata-ingestion",permalink:"/docs/metadata-ingestion",editUrl:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/README.md",tags:[],version:"current",frontMatter:{slug:"/metadata-ingestion",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/README.md"},sidebar:"overviewSidebar",previous:{title:"CLI",permalink:"/docs/cli"},next:{title:"Debugging Guide",permalink:"/docs/debugging"}},p=[{value:"Getting Started",id:"getting-started",children:[{value:"Prerequisites",id:"prerequisites",children:[],level:3},{value:"Install from PyPI",id:"install-from-pypi",children:[{value:"Installing Plugins",id:"installing-plugins",children:[],level:4},{value:"Basic Usage",id:"basic-usage",children:[],level:4}],level:3},{value:"Install using Docker",id:"install-using-docker",children:[],level:3},{value:"Install from source",id:"install-from-source",children:[],level:3}],level:2},{value:"Recipes",id:"recipes",children:[],level:2},{value:"Transformations",id:"transformations",children:[],level:2},{value:"Using as a library",id:"using-as-a-library",children:[{value:"Programmatic Pipeline",id:"programmatic-pipeline",children:[],level:3}],level:2},{value:"Developing",id:"developing",children:[],level:2}],u={toc:p};function m(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"metadata-ingestion"},"Metadata Ingestion"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/python-3.6%2B-blue",alt:"Python version 3.6+"})),(0,l.kt)("p",null,"This module hosts an extensible Python-based metadata ingestion system for DataHub.\nThis supports sending data to DataHub using Kafka or through the REST API.\nIt can be used through our CLI tool, with an orchestrator like Airflow, or as a library."),(0,l.kt)("h2",{id:"getting-started"},"Getting Started"),(0,l.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"Before running any metadata ingestion job, you should make sure that DataHub backend services are all running. If you are trying this out locally, the easiest way to do that is through ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/docker"},"quickstart Docker images"),"."),(0,l.kt)("h3",{id:"install-from-pypi"},"Install from PyPI"),(0,l.kt)("p",null,"The folks over at ",(0,l.kt)("a",{parentName:"p",href:"https://www.acryl.io/"},"Acryl Data")," maintain a PyPI package for DataHub metadata ingestion."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'# Requires Python 3.6+\npython3 -m pip install --upgrade pip wheel setuptools\npython3 -m pip install --upgrade acryl-datahub\ndatahub version\n# If you see "command not found", try running this instead: python3 -m datahub version\n')),(0,l.kt)("p",null,"If you run into an error, try checking the ",(0,l.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/developing#Common-setup-issues"},(0,l.kt)("em",{parentName:"a"},"common setup issues")),"."),(0,l.kt)("h4",{id:"installing-plugins"},"Installing Plugins"),(0,l.kt)("p",null,"We use a plugin architecture so that you can install only the dependencies you actually need. Click the plugin name to learn more about the specific source recipe and any FAQs!"),(0,l.kt)("p",null,"Sources:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Plugin Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Install Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Provides"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/file"},"file")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"included by default")),(0,l.kt)("td",{parentName:"tr",align:null},"File source and sink")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/athena"},"athena")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[athena]'")),(0,l.kt)("td",{parentName:"tr",align:null},"AWS Athena source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/bigquery"},"bigquery")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[bigquery]'")),(0,l.kt)("td",{parentName:"tr",align:null},"BigQuery source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/bigquery"},"bigquery-usage")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[bigquery-usage]'")),(0,l.kt)("td",{parentName:"tr",align:null},"BigQuery usage statistics source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/business_glossary"},"datahub-business-glossary")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"no additional dependencies")),(0,l.kt)("td",{parentName:"tr",align:null},"Business Glossary File source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/dbt"},"dbt")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"no additional dependencies")),(0,l.kt)("td",{parentName:"tr",align:null},"dbt source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/druid"},"druid")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[druid]'")),(0,l.kt)("td",{parentName:"tr",align:null},"Druid Source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/feast"},"feast")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[feast]'")),(0,l.kt)("td",{parentName:"tr",align:null},"Feast source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/glue"},"glue")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[glue]'")),(0,l.kt)("td",{parentName:"tr",align:null},"AWS Glue source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/hive"},"hive")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[hive]'")),(0,l.kt)("td",{parentName:"tr",align:null},"Hive source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/kafka"},"kafka")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[kafka]'")),(0,l.kt)("td",{parentName:"tr",align:null},"Kafka source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/kafka-connect"},"kafka-connect")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[kafka-connect]'")),(0,l.kt)("td",{parentName:"tr",align:null},"Kafka connect source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/ldap"},"ldap")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[ldap]'")," (",(0,l.kt)("a",{parentName:"td",href:"https://www.python-ldap.org/en/python-ldap-3.3.0/installing.html#build-prerequisites"},"extra requirements"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"LDAP source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/looker"},"looker")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[looker]'")),(0,l.kt)("td",{parentName:"tr",align:null},"Looker source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/lookml"},"lookml")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[lookml]'")),(0,l.kt)("td",{parentName:"tr",align:null},"LookML source, requires Python 3.7+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/mode"},"mode")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[mode]'")),(0,l.kt)("td",{parentName:"tr",align:null},"Mode Analytics source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/mongodb"},"mongodb")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[mongodb]'")),(0,l.kt)("td",{parentName:"tr",align:null},"MongoDB source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/mssql"},"mssql")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[mssql]'")),(0,l.kt)("td",{parentName:"tr",align:null},"SQL Server source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/mysql"},"mysql")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[mysql]'")),(0,l.kt)("td",{parentName:"tr",align:null},"MySQL source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/mariadb"},"mariadb")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[mariadb]'")),(0,l.kt)("td",{parentName:"tr",align:null},"MariaDB source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/openapi"},"openapi")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[openapi]'")),(0,l.kt)("td",{parentName:"tr",align:null},"OpenApi Source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/oracle"},"oracle")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[oracle]'")),(0,l.kt)("td",{parentName:"tr",align:null},"Oracle source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/postgres"},"postgres")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[postgres]'")),(0,l.kt)("td",{parentName:"tr",align:null},"Postgres source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/redash"},"redash")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[redash]'")),(0,l.kt)("td",{parentName:"tr",align:null},"Redash source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/redshift"},"redshift")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[redshift]'")),(0,l.kt)("td",{parentName:"tr",align:null},"Redshift source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/sagemaker"},"sagemaker")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[sagemaker]'")),(0,l.kt)("td",{parentName:"tr",align:null},"AWS SageMaker source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/snowflake"},"snowflake")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[snowflake]'")),(0,l.kt)("td",{parentName:"tr",align:null},"Snowflake source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/snowflake"},"snowflake-usage")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[snowflake-usage]'")),(0,l.kt)("td",{parentName:"tr",align:null},"Snowflake usage statistics source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/sql_profiles"},"sql-profiles")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[sql-profiles]'")),(0,l.kt)("td",{parentName:"tr",align:null},"Data profiles for SQL-based systems")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/sqlalchemy"},"sqlalchemy")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[sqlalchemy]'")),(0,l.kt)("td",{parentName:"tr",align:null},"Generic SQLAlchemy source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/superset"},"superset")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[superset]'")),(0,l.kt)("td",{parentName:"tr",align:null},"Superset source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/trino"},"trino")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[trino]")),(0,l.kt)("td",{parentName:"tr",align:null},"Trino source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/trino"},"starburst-trino-usage")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[starburst-trino-usage]'")),(0,l.kt)("td",{parentName:"tr",align:null},"Starburst Trino usage statistics source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/source_docs/nifi"},"nifi")),(0,l.kt)("td",{parentName:"tr",align:null},"`pip install 'acryl-datahub","[nifi]","'"),(0,l.kt)("td",{parentName:"tr",align:null},"Nifi source")))),(0,l.kt)("p",null,"Sinks"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Plugin Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Install Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Provides"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/sink_docs/file"},"file")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"included by default")),(0,l.kt)("td",{parentName:"tr",align:null},"File source and sink")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/sink_docs/console"},"console")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"included by default")),(0,l.kt)("td",{parentName:"tr",align:null},"Console sink")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/sink_docs/datahub"},"datahub-rest")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[datahub-rest]'")),(0,l.kt)("td",{parentName:"tr",align:null},"DataHub sink over REST API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/sink_docs/datahub"},"datahub-kafka")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pip install 'acryl-datahub[datahub-kafka]'")),(0,l.kt)("td",{parentName:"tr",align:null},"DataHub sink over Kafka")))),(0,l.kt)("p",null,"These plugins can be mixed and matched as desired. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[bigquery,datahub-rest]'\n")),(0,l.kt)("p",null,"You can check the active plugins:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"datahub check plugins\n")),(0,l.kt)("h4",{id:"basic-usage"},"Basic Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[datahub-rest]'  # install the required plugin\ndatahub ingest -c ./examples/recipes/example_to_datahub_rest.yml\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"--dry-run")," option of the ",(0,l.kt)("inlineCode",{parentName:"p"},"ingest")," command performs all of the ingestion steps, except writing to the sink. This is useful to ensure that the\ningestion recipe is producing the desired workunits before ingesting them into datahub."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Dry run\ndatahub ingest -c ./examples/recipes/example_to_datahub_rest.yml --dry-run\n# Short-form\ndatahub ingest -c ./examples/recipes/example_to_datahub_rest.yml -n\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"--preview")," option of the ",(0,l.kt)("inlineCode",{parentName:"p"},"ingest")," command performs all of the ingestion steps, but limits the processing to only the first 10 workunits produced by the source.\nThis option helps with quick end-to-end smoke testing of the ingestion recipe."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Preview\ndatahub ingest -c ./examples/recipes/example_to_datahub_rest.yml --preview\n# Preview with dry-run\ndatahub ingest -c ./examples/recipes/example_to_datahub_rest.yml -n --preview\n")),(0,l.kt)("h3",{id:"install-using-docker"},"Install using Docker"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/linkedin/datahub-ingestion"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/docker/pulls/linkedin/datahub-ingestion?style=plastic",alt:"Docker Hub"})),"\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/actions/workflows/docker-ingestion.yml"},(0,l.kt)("img",{parentName:"a",src:"https://github.com/linkedin/datahub/actions/workflows/docker-ingestion.yml/badge.svg",alt:"datahub-ingestion docker"}))),(0,l.kt)("p",null,"If you don't want to install locally, you can alternatively run metadata ingestion within a Docker container.\nWe have prebuilt images available on ",(0,l.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/linkedin/datahub-ingestion"},"Docker hub"),". All plugins will be installed and enabled automatically."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Limitation: the datahub_docker.sh convenience script assumes that the recipe and any input/output files are accessible in the current working directory or its subdirectories. Files outside the current working directory will not be found, and you'll need to invoke the Docker image directly.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Assumes the DataHub repo is cloned locally.\n./metadata-ingestion/scripts/datahub_docker.sh ingest -c ./examples/recipes/example_to_datahub_rest.yml\n")),(0,l.kt)("h3",{id:"install-from-source"},"Install from source"),(0,l.kt)("p",null,"If you'd like to install from source, see the ",(0,l.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/developing"},"developer guide"),"."),(0,l.kt)("h2",{id:"recipes"},"Recipes"),(0,l.kt)("p",null,"A recipe is a configuration file that tells our ingestion scripts where to pull data from (source) and where to put it (sink).\nHere's a simple example that pulls metadata from MSSQL and puts it into datahub."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'# A sample recipe that pulls metadata from MSSQL and puts it into DataHub\n# using the Rest API.\nsource:\n  type: mssql\n  config:\n    username: sa\n    password: ${MSSQL_PASSWORD}\n    database: DemoData\n\ntransformers:\n  - type: "fully-qualified-class-name-of-transformer"\n    config:\n      some_property: "some.value"\n\nsink:\n  type: "datahub-rest"\n  config:\n    server: "http://localhost:8080"\n')),(0,l.kt)("p",null,"We automatically expand environment variables in the config,\nsimilar to variable substitution in GNU bash or in docker-compose files. For details, see\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/compose-file/compose-file-v2/#variable-substitution"},"https://docs.docker.com/compose/compose-file/compose-file-v2/#variable-substitution"),"."),(0,l.kt)("p",null,"Running a recipe is quite easy."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"datahub ingest -c ./examples/recipes/mssql_to_datahub.yml\n")),(0,l.kt)("p",null,"A number of recipes are included in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/examples/recipes"},"examples/recipes")," directory. For full info and context on each source and sink, see the pages described in the ",(0,l.kt)("a",{parentName:"p",href:"#installing-plugins"},"table of plugins"),"."),(0,l.kt)("h2",{id:"transformations"},"Transformations"),(0,l.kt)("p",null,"If you'd like to modify data before it reaches the ingestion sinks \u2013 for instance, adding additional owners or tags \u2013 you can use a transformer to write your own module and integrate it with DataHub."),(0,l.kt)("p",null,"Check out the ",(0,l.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/transformers"},"transformers guide")," for more info!"),(0,l.kt)("h2",{id:"using-as-a-library"},"Using as a library"),(0,l.kt)("p",null,"In some cases, you might want to construct the MetadataChangeEvents yourself but still use this framework to emit that metadata to DataHub. In this case, take a look at the emitter interfaces, which can easily be imported and called from your own code."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/src/datahub/emitter/rest_emitter.py"},"DataHub emitter via REST")," (same requirements as ",(0,l.kt)("inlineCode",{parentName:"li"},"datahub-rest"),")."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/src/datahub/emitter/kafka_emitter.py"},"DataHub emitter via Kafka")," (same requirements as ",(0,l.kt)("inlineCode",{parentName:"li"},"datahub-kafka"),").")),(0,l.kt)("h3",{id:"programmatic-pipeline"},"Programmatic Pipeline"),(0,l.kt)("p",null,"In some cases, you might want to configure and run a pipeline entirely from within your custom python script. Here is an example of how to do it."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/examples/library/programatic_pipeline.py"},"programmatic_pipeline.py")," - a basic mysql to REST programmatic pipeline.")),(0,l.kt)("h2",{id:"developing"},"Developing"),(0,l.kt)("p",null,"See the guides on ",(0,l.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/developing"},"developing"),", ",(0,l.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/adding-source"},"adding a source")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/transformers"},"using transformers"),"."))}m.isMDXComponent=!0}}]);