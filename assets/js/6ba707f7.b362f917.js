"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7232],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),g=i,h=c["".concat(s,".").concat(g)]||c[g]||p[g]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},80628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const r={title:"Stateful Ingestion",slug:"/metadata-ingestion/docs/dev_guides/stateful",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/docs/dev_guides/stateful.md"},o="Stateful Ingestion",l={unversionedId:"metadata-ingestion/docs/dev_guides/stateful",id:"metadata-ingestion/docs/dev_guides/stateful",title:"Stateful Ingestion",description:"The stateful ingestion feature enables sources to be configured to save custom checkpoint states from their",source:"@site/genDocs/metadata-ingestion/docs/dev_guides/stateful.md",sourceDirName:"metadata-ingestion/docs/dev_guides",slug:"/metadata-ingestion/docs/dev_guides/stateful",permalink:"/docs/metadata-ingestion/docs/dev_guides/stateful",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/docs/dev_guides/stateful.md",tags:[],version:"current",frontMatter:{title:"Stateful Ingestion",slug:"/metadata-ingestion/docs/dev_guides/stateful",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/docs/dev_guides/stateful.md"},sidebar:"overviewSidebar",previous:{title:"Working With Platform Instances",permalink:"/docs/platform-instances"},next:{title:"Classification",permalink:"/docs/metadata-ingestion/docs/dev_guides/classification"}},s={},d=[{value:"Config details",id:"config-details",level:2},{value:"Use-cases powered by stateful ingestion.",id:"use-cases-powered-by-stateful-ingestion",level:2},{value:"Stale Entity Removal",id:"stale-entity-removal",level:3},{value:"Supported sources",id:"supported-sources",level:4},{value:"Additional config details",id:"additional-config-details",level:4},{value:"Sample configuration",id:"sample-configuration",level:4},{value:"Redundant Run Elimination",id:"redundant-run-elimination",level:3},{value:"Supported sources",id:"supported-sources-1",level:4},{value:"Additional config details",id:"additional-config-details-1",level:4},{value:"Sample Configuration",id:"sample-configuration-1",level:4},{value:"Adding Stateful Ingestion Capability to New Sources (Developer Guide)",id:"adding-stateful-ingestion-capability-to-new-sources-developer-guide",level:2},{value:"The Checkpointing Ingestion State Provider (Developer Guide)",id:"the-checkpointing-ingestion-state-provider-developer-guide",level:2},{value:"Datahub Checkpointing Ingestion State Provider",id:"datahub-checkpointing-ingestion-state-provider",level:3},{value:"Config details",id:"config-details-1",level:4}],u={toc:d};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"stateful-ingestion"},"Stateful Ingestion"),(0,i.kt)("p",null,"The stateful ingestion feature enables sources to be configured to save custom checkpoint states from their\nruns, and query these states back from subsequent runs to make decisions about the current run based on the state saved\nfrom the previous run(s) using a supported ingestion state provider. This is an explicit opt-in feature and is not enabled\nby default."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"NOTE")),": This feature requires the server to be ",(0,i.kt)("inlineCode",{parentName:"p"},"statefulIngestion")," capable. This is a feature of metadata service with version >= ",(0,i.kt)("inlineCode",{parentName:"p"},"0.8.20"),"."),(0,i.kt)("p",null,"To check if you are running a stateful ingestion capable server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'curl http://<datahub-gms-endpoint>/config\n\n{\nmodels: { },\nstatefulIngestionCapable: true, # <-- this should be present and true\nretention: "true",\nnoCode: "true"\n}\n')),(0,i.kt)("h2",{id:"config-details"},"Config details"),(0,i.kt)("p",null,"Note that a ",(0,i.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"source.config.stateful_ingestion.enabled")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"False"),(0,i.kt)("td",{parentName:"tr",align:null},"The type of the ingestion state provider registered with datahub.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"source.config.stateful_ingestion.ignore_old_state")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"False"),(0,i.kt)("td",{parentName:"tr",align:null},"If set to True, ignores the previous checkpoint state.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"source.config.stateful_ingestion.ignore_new_state")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"False"),(0,i.kt)("td",{parentName:"tr",align:null},"If set to True, ignores the current checkpoint state.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"source.config.stateful_ingestion.max_checkpoint_state_size")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"2^24 (16MB)"),(0,i.kt)("td",{parentName:"tr",align:null},"The maximum size of the checkpoint state in bytes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"source.config.stateful_ingestion.state_provider")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The default ",(0,i.kt)("a",{parentName:"td",href:"#datahub-ingestion-state-provider"},"datahub ingestion state provider")," configuration."),(0,i.kt)("td",{parentName:"tr",align:null},"The ingestion state provider configuration.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"pipeline_name")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the ingestion pipeline the checkpoint states of various source connector job runs are saved/retrieved against via the ingestion state provider.")))),(0,i.kt)("p",null,"NOTE: If either ",(0,i.kt)("inlineCode",{parentName:"p"},"dry-run")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"preview")," mode are set, stateful ingestion will be turned off regardless of the rest of the configuration."),(0,i.kt)("h2",{id:"use-cases-powered-by-stateful-ingestion"},"Use-cases powered by stateful ingestion."),(0,i.kt)("p",null,"Following is the list of current use-cases powered by stateful ingestion in datahub."),(0,i.kt)("h3",{id:"stale-entity-removal"},"Stale Entity Removal"),(0,i.kt)("p",null,"Stateful ingestion can be used to automatically soft-delete the tables and views that are seen in a previous run\nbut absent in the current run (they are either deleted or no longer desired)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Stale Metadata Deletion",src:n(57352).Z,width:"2928",height:"922"})),(0,i.kt)("h4",{id:"supported-sources"},"Supported sources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All sql based sources.")),(0,i.kt)("h4",{id:"additional-config-details"},"Additional config details"),(0,i.kt)("p",null,"Note that a ",(0,i.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"stateful_ingestion.remove_stale_metadata")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"True"),(0,i.kt)("td",{parentName:"tr",align:null},"Soft-deletes the tables and views that were found in the last successful run but missing in the current run with stateful_ingestion enabled.")))),(0,i.kt)("h4",{id:"sample-configuration"},"Sample configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: "snowflake"\n  config:\n    username: <user_name>\n    password: <password>\n    host_port: <host_port>\n    warehouse: <ware_house>\n    role: <role>\n    include_tables: True\n    include_views: True\n    # Rest of the source specific params ...\n    ## Stateful Ingestion config ##\n    stateful_ingestion:\n        enabled: True # False by default\n        remove_stale_metadata: True # default value\n        ## Default state_provider configuration ##\n        # state_provider:\n            # type: "datahub" # default value\n            # This section is needed if the pipeline-level `datahub_api` is not configured.\n            # config:  # default value\n            #    datahub_api:\n            #        server: "http://localhost:8080"\n\n# The pipeline_name is mandatory for stateful ingestion and the state is tied to this.\n# If this is changed after using with stateful ingestion, the previous state will not be available to the next run.\npipeline_name: "my_snowflake_pipeline_1"\n\n# Pipeline-level datahub_api configuration.\ndatahub_api: # Optional. But if provided, this config will be used by the "datahub" ingestion state provider.\n    server: "http://localhost:8080"\n\nsink:\n  type: "datahub-rest"\n  config:\n    server: \'http://localhost:8080\'\n')),(0,i.kt)("h3",{id:"redundant-run-elimination"},"Redundant Run Elimination"),(0,i.kt)("p",null,"Typically, the usage runs are configured to fetch the usage data for the previous day(or hour) for each run. Once a usage\nrun has finished, subsequent runs until the following day would be fetching the same usage data. With stateful ingestion,\nthe redundant fetches can be avoided even if the ingestion job is scheduled to run more frequently than the granularity of\nusage ingestion."),(0,i.kt)("h4",{id:"supported-sources-1"},"Supported sources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Snowflake Usage source.")),(0,i.kt)("h4",{id:"additional-config-details-1"},"Additional config details"),(0,i.kt)("p",null,"Note that a ",(0,i.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"stateful_ingestion.force_rerun")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"False"),(0,i.kt)("td",{parentName:"tr",align:null},"Custom-alias for ",(0,i.kt)("inlineCode",{parentName:"td"},"stateful_ingestion.ignore_old_state"),". Prevents a rerun for the same time window if there was a previous successful run.")))),(0,i.kt)("h4",{id:"sample-configuration-1"},"Sample Configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: "snowflake-usage-legacy"\n  config:\n    username: <user_name>\n    password: <password>\n    role: <role>\n    host_port: <host_port>\n    warehouse: <ware_house>\n    # Rest of the source specific params ...\n    ## Stateful Ingestion config ##\n    stateful_ingestion:\n        enabled: True # default is false\n        force_rerun: False # Specific to this source(alias for ignore_old_state), used to override default behavior if True.\n\n# The pipeline_name is mandatory for stateful ingestion and the state is tied to this.\n# If this is changed after using with stateful ingestion, the previous state will not be available to the next run.\npipeline_name: "my_snowflake_usage_ingestion_pipeline_1"\nsink:\n  type: "datahub-rest"\n  config:\n    server: \'http://localhost:8080\'\n')),(0,i.kt)("h2",{id:"adding-stateful-ingestion-capability-to-new-sources-developer-guide"},"Adding Stateful Ingestion Capability to New Sources (Developer Guide)"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/docs/dev_guides/add_stateful_ingestion_to_source"},"this documentation")," for more details on how to add stateful ingestion\ncapability to new sources for the use-cases supported by datahub."),(0,i.kt)("h2",{id:"the-checkpointing-ingestion-state-provider-developer-guide"},"The Checkpointing Ingestion State Provider (Developer Guide)"),(0,i.kt)("p",null,"The ingestion checkpointing state provider is responsible for saving and retrieving the ingestion checkpoint state associated with the ingestion runs\nof various jobs inside the source connector of the ingestion pipeline. The checkpointing data model is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/datajob/datahub/DatahubIngestionCheckpoint.pdl"},"DatahubIngestionCheckpoint")," and it supports any custom state to be stored using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/datajob/datahub/IngestionCheckpointState.pdl#L9"},"IngestionCheckpointState"),". A checkpointing ingestion state provider needs to implement the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/api/ingestion_job_checkpointing_provider_base.py"},"IngestionCheckpointingProviderBase")," interface and\nregister itself with datahub by adding an entry under ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub.ingestion.checkpointing_provider.plugins")," key of the entry_points section in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/setup.py"},"setup.py")," with its type and implementation class as shown below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'entry_points = {\n    # <snip other keys>"\n    "datahub.ingestion.checkpointing_provider.plugins": [\n        "datahub = datahub.ingestion.source.state_provider.datahub_ingestion_checkpointing_provider:DatahubIngestionCheckpointingProvider",\n    ],\n}\n')),(0,i.kt)("h3",{id:"datahub-checkpointing-ingestion-state-provider"},"Datahub Checkpointing Ingestion State Provider"),(0,i.kt)("p",null,"This is the state provider implementation that is available out of the box. Its type is ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub")," and it is implemented on top\nof the ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub_api")," client and the timeseries aspect capabilities of the datahub-backend."),(0,i.kt)("h4",{id:"config-details-1"},"Config details"),(0,i.kt)("p",null,"Note that a ",(0,i.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"state_provider.type")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"datahub")),(0,i.kt)("td",{parentName:"tr",align:null},"The type of the ingestion state provider registered with datahub")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"state_provider.config")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"datahub_api")," config if set at pipeline level. Otherwise, the default ",(0,i.kt)("inlineCode",{parentName:"td"},"DatahubClientConfig"),". See the ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/graph/client.py#L19"},"defaults")," here."),(0,i.kt)("td",{parentName:"tr",align:null},"The configuration required for initializing the state provider.")))))}p.isMDXComponent=!0},57352:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/stale_metadata_deletion-c816c4bacf0c11e8dd9061dea431cb60.png"}}]);