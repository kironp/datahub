"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[591],{4137:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return c}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=s(a),c=r,g=u["".concat(d,".").concat(c)]||u[c]||m[c]||i;return a?n.createElement(g,l(l({ref:e},p),{},{components:a})):n.createElement(g,l({ref:e},p))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4742:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(4137)),l=["components"],o={title:"dbt",sidebar_label:"dbt",slug:"/metadata-ingestion/source_docs/dbt",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/source_docs/dbt.md"},d="dbt",s={unversionedId:"metadata-ingestion/source_docs/dbt",id:"metadata-ingestion/source_docs/dbt",isDocsHomePage:!1,title:"dbt",description:"For context on getting started with ingestion, check out our metadata ingestion guide.",source:"@site/genDocs/metadata-ingestion/source_docs/dbt.md",sourceDirName:"metadata-ingestion/source_docs",slug:"/metadata-ingestion/source_docs/dbt",permalink:"/docs/metadata-ingestion/source_docs/dbt",editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/source_docs/dbt.md",tags:[],version:"current",frontMatter:{title:"dbt",sidebar_label:"dbt",slug:"/metadata-ingestion/source_docs/dbt",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/source_docs/dbt.md"},sidebar:"overviewSidebar",previous:{title:"Data lake files",permalink:"/docs/metadata-ingestion/source_docs/data_lake"},next:{title:"Druid",permalink:"/docs/metadata-ingestion/source_docs/druid"}},p=[{value:"Setup",id:"setup",children:[],level:2},{value:"Capabilities",id:"capabilities",children:[],level:2},{value:"Quickstart recipe",id:"quickstart-recipe",children:[],level:2},{value:"Config details",id:"config-details",children:[{value:"dbt meta automated mappings",id:"dbt-meta-automated-mappings",children:[],level:3}],level:2},{value:"Compatibility",id:"compatibility",children:[],level:2},{value:"Questions",id:"questions",children:[],level:2}],m={toc:p};function u(t){var e=t.components,a=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dbt"},"dbt"),(0,i.kt)("p",null,"For context on getting started with ingestion, check out our ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"metadata ingestion guide"),"."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"Works with ",(0,i.kt)("inlineCode",{parentName:"p"},"acryl-datahub")," out of the box."),(0,i.kt)("h2",{id:"capabilities"},"Capabilities"),(0,i.kt)("p",null,"This plugin pulls metadata from dbt's artifact files and generates:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"dbt Tables: for nodes in the dbt manifest file that are models materialized as tables"),(0,i.kt)("li",{parentName:"ul"},"dbt Views: for nodes in the dbt manifest file that are models materialized as views"),(0,i.kt)("li",{parentName:"ul"},"dbt Ephemeral: for nodes in the dbt manifest file that are ephemeral models"),(0,i.kt)("li",{parentName:"ul"},"dbt Sources: for nodes that are sources on top of the underlying platform tables"),(0,i.kt)("li",{parentName:"ul"},"dbt Seed: for seed entities"),(0,i.kt)("li",{parentName:"ul"},"dbt Test: for dbt test entities")),(0,i.kt)("p",null,"Note:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"It also generates lineage between the ",(0,i.kt)("inlineCode",{parentName:"li"},"dbt")," nodes (e.g. ephemeral nodes that depend on other dbt sources) as well as lineage between the ",(0,i.kt)("inlineCode",{parentName:"li"},"dbt")," nodes and the underlying (target) platform nodes (e.g. BigQuery Table -> dbt Source, dbt View -> BigQuery View)."),(0,i.kt)("li",{parentName:"ol"},"The previous version of this source (",(0,i.kt)("inlineCode",{parentName:"li"},"acryl_datahub<=0.8.16.2"),") did not generate ",(0,i.kt)("inlineCode",{parentName:"li"},"dbt")," entities and lineage between ",(0,i.kt)("inlineCode",{parentName:"li"},"dbt")," entities and platform entities. For backwards compatibility with the previous version of this source, there is a config flag ",(0,i.kt)("inlineCode",{parentName:"li"},"disable_dbt_node_creation")," that falls back to the old behavior."),(0,i.kt)("li",{parentName:"ol"},"We also support automated actions (like add a tag, term or owner) based on properties defined in dbt meta.")),(0,i.kt)("p",null,"The artifacts used by this source are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.getdbt.com/reference/artifacts/manifest-json"},"dbt manifest file"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This file contains model, source and lineage data."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.getdbt.com/reference/artifacts/catalog-json"},"dbt catalog file"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This file contains schema data."),(0,i.kt)("li",{parentName:"ul"},"dbt does not record schema data for Ephemeral models, as such datahub will show Ephemeral models in the lineage, however there will be no associated schema for Ephemeral models"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.getdbt.com/reference/artifacts/sources-json"},"dbt sources file"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This file contains metadata for sources with freshness checks."),(0,i.kt)("li",{parentName:"ul"},"We transfer dbt's freshness checks to DataHub's last-modified fields."),(0,i.kt)("li",{parentName:"ul"},"Note that this file is optional \u2013 if not specified, we'll use time of ingestion instead as a proxy for time last-modified.")))),(0,i.kt)("h2",{id:"quickstart-recipe"},"Quickstart recipe"),(0,i.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,i.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,i.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'source:\n  type: "dbt"\n  config:\n    # Coordinates\n    manifest_path: "./path/dbt/manifest_file.json"\n    catalog_path: "./path/dbt/catalog_file.json"\n    sources_path: "./path/dbt/sources_file.json"\n\n    # Options\n    target_platform: "my_target_platform_id" # e.g. bigquery/postgres/etc.\n    load_schemas: True # note: if this is disabled\n\nsink:\n  # sink configs\n')),(0,i.kt)("h2",{id:"config-details"},"Config details"),(0,i.kt)("p",null,"Note that a ",(0,i.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"manifest_path")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Path to dbt manifest JSON. See ",(0,i.kt)("a",{parentName:"td",href:"https://docs.getdbt.com/reference/artifacts/manifest-json"},"https://docs.getdbt.com/reference/artifacts/manifest-json"),"  Note this can be a local file or a URI.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"catalog_path")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Path to dbt catalog JSON. See ",(0,i.kt)("a",{parentName:"td",href:"https://docs.getdbt.com/reference/artifacts/catalog-json"},"https://docs.getdbt.com/reference/artifacts/catalog-json"),"    Note this can be a local file or a URI.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"sources_path")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Path to dbt sources JSON. See ",(0,i.kt)("a",{parentName:"td",href:"https://docs.getdbt.com/reference/artifacts/sources-json"},"https://docs.getdbt.com/reference/artifacts/sources-json"),". If not specified, last-modified fields will not be populated. Note this can be a local file or a URI.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"env")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"PROD"')),(0,i.kt)("td",{parentName:"tr",align:null},"Environment to use in namespace when constructing URNs.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"target_platform")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The platform that dbt is loading onto. (e.g. bigquery / redshift / postgres etc.)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"use_identifiers")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"False")),(0,i.kt)("td",{parentName:"tr",align:null},"Use model ",(0,i.kt)("a",{parentName:"td",href:"https://docs.getdbt.com/reference/resource-properties/identifier"},"identifier")," instead of model name if defined (if not, default to model name).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"tag_prefix")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"dbt:")),(0,i.kt)("td",{parentName:"tr",align:null},"Prefix added to tags during ingestion.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"node_type_pattern.allow")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"List of regex patterns for dbt nodes to include in ingestion.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"node_type_pattern.deny")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"List of regex patterns for dbt nodes to exclude from ingestion.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"node_type_pattern.ignoreCase")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"True")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"node_name_pattern.allow")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"List of regex patterns for dbt model names to include in ingestion.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"node_name_pattern.deny")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"List of regex patterns for dbt model names to exclude from ingestion.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"node_name_pattern.ignoreCase")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"True")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"disable_dbt_node_creation")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"False")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to suppress ",(0,i.kt)("inlineCode",{parentName:"td"},"dbt")," dataset metadata creation. When set to ",(0,i.kt)("inlineCode",{parentName:"td"},"True"),", this flag applies the dbt metadata to the ",(0,i.kt)("inlineCode",{parentName:"td"},"target_platform")," entities (e.g. populating schema and column descriptions from dbt into the postgres / bigquery table metadata in DataHub) and generates lineage between the platform entities.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"load_schemas")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"True")),(0,i.kt)("td",{parentName:"tr",align:null},"This flag is only consulted when ",(0,i.kt)("inlineCode",{parentName:"td"},"disable_dbt_node_creation")," is set to ",(0,i.kt)("inlineCode",{parentName:"td"},"True"),". Load schemas for ",(0,i.kt)("inlineCode",{parentName:"td"},"target_platform")," entities from dbt catalog file, not necessary when you are already ingesting this metadata from the data platform directly. If set to ",(0,i.kt)("inlineCode",{parentName:"td"},"False"),", table schema details (e.g. columns) will not be ingested.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"meta_mapping")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"mapping rules that will be executed against dbt meta properties. Refer to the section below on dbt meta automated mappings.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"enable_meta_mapping")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"False")),(0,i.kt)("td",{parentName:"tr",align:null},"When enabled, applies the mappings that are defined through the ",(0,i.kt)("inlineCode",{parentName:"td"},"meta_mapping")," directives.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"write_semantics")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"PATCH")),(0,i.kt)("td",{parentName:"tr",align:null},'Whether the new tags, terms and owners to be added will override the existing ones added only by this source or not. Value for this config can be "PATCH" or "OVERRIDE"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"strip_user_ids_from_email")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"FALSE")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether or not to strip email id while adding owners using dbt meta actions.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"owner_extraction_pattern")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"None")),(0,i.kt)("td",{parentName:"tr",align:null},"Regex string to extract owner from the dbt node using the ",(0,i.kt)("inlineCode",{parentName:"td"},"(?P<name>...) syntax")," of the ",(0,i.kt)("a",{parentName:"td",href:"https://docs.python.org/3/library/re.html#match-objects"},"match object"),", where the group name must be ",(0,i.kt)("inlineCode",{parentName:"td"},"owner"),". Examples: (1)",(0,i.kt)("inlineCode",{parentName:"td"},'r"(?P<owner>(.*)): (\\w+) (\\w+)"')," will extract ",(0,i.kt)("inlineCode",{parentName:"td"},"jdoe")," as the owner from ",(0,i.kt)("inlineCode",{parentName:"td"},'"jdoe: John Doe"')," (2) ",(0,i.kt)("inlineCode",{parentName:"td"},'r"@(?P<owner>(.*))"')," will extract ",(0,i.kt)("inlineCode",{parentName:"td"},"alice")," as the owner from ",(0,i.kt)("inlineCode",{parentName:"td"},'"@alice"'),".")))),(0,i.kt)("h3",{id:"dbt-meta-automated-mappings"},"dbt meta automated mappings"),(0,i.kt)("p",null,"dbt allows authors to define meta properties for datasets. Checkout this link to know more - ",(0,i.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/reference/resource-configs/meta"},"dbt meta"),". Our dbt source allows users to define\nactions such as add a tag, term or owner. For example if a dbt model has a meta config ",(0,i.kt)("inlineCode",{parentName:"p"},'"has_pii": True'),", we can define an action\nthat evaluates if the property is set to true and add, lets say, a ",(0,i.kt)("inlineCode",{parentName:"p"},"pii")," tag.\nTo leverage this feature we require users to define mappings as part of the recipe. Following is how mappings can be defined -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'            "meta_mapping": {\n                    "business_owner": {\n                        "match": ".*",\n                        "operation": "add_owner",\n                        "config": {"owner_type": "user"},\n                    },\n                    "has_pii": {\n                        "match": True,\n                        "operation": "add_tag",\n                        "config": {"tag": "has_pii_test"},\n                    },\n                    "int_property": {\n                        "match": 1,\n                        "operation": "add_tag",\n                        "config": {"tag": "int_meta_property"},\n                    },\n                    "double_property": {\n                        "match": 2.5,\n                        "operation": "add_term",\n                        "config": {"term": "double_meta_property"},\n                    },\n                    "data_governance.team_owner": {\n                        "match": "Finance",\n                        "operation": "add_term",\n                        "config": {"term": "Finance_test"},\n                    },\n                }\n')),(0,i.kt)("p",null,"We support the below actions -"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"add_tag - Requires ",(0,i.kt)("inlineCode",{parentName:"li"},"tag")," property in config."),(0,i.kt)("li",{parentName:"ol"},"add_term - Requires ",(0,i.kt)("inlineCode",{parentName:"li"},"term")," property in config."),(0,i.kt)("li",{parentName:"ol"},"add_owner - Requires ",(0,i.kt)("inlineCode",{parentName:"li"},"owner_type")," property in config which can be either user or group.")),(0,i.kt)("p",null,"Note:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Currently, dbt meta mapping is only supported for meta configs defined at the top most level or a node in manifest file. If that is not preset we will look for meta in the config section of the node."),(0,i.kt)("li",{parentName:"ol"},"For string based meta properties we support regex matching.")),(0,i.kt)("h2",{id:"compatibility"},"Compatibility"),(0,i.kt)("p",null,"Coming soon!"),(0,i.kt)("h2",{id:"questions"},"Questions"),(0,i.kt)("p",null,"If you've got any questions on configuring this source, feel free to ping us on ",(0,i.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io/"},"our Slack"),"!"))}u.isMDXComponent=!0}}]);