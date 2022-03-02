"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5143],{4137:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4516:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(4137)),i=["components"],l={title:"Local Development",sidebar_label:"Local Development",slug:"/developers",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/developers.md"},s="DataHub Developer's Guide",d={unversionedId:"docs/developers",id:"docs/developers",isDocsHomePage:!1,title:"Local Development",description:"Building the Project",source:"@site/genDocs/docs/developers.md",sourceDirName:"docs",slug:"/developers",permalink:"/docs/developers",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/developers.md",tags:[],version:"current",frontMatter:{title:"Local Development",sidebar_label:"Local Development",slug:"/developers",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/developers.md"},sidebar:"overviewSidebar",previous:{title:"Adding Users to DataHub",permalink:"/docs/how/auth/add-users"},next:{title:"Using Docker Images During Development",permalink:"/docs/docker/development"}},c=[{value:"Building the Project",id:"building-the-project",children:[],level:2},{value:"IDE Support",id:"ide-support",children:[],level:2},{value:"Common Build Issues",id:"common-build-issues",children:[{value:"Getting <code>Unsupported class file major version 57</code>",id:"getting-unsupported-class-file-major-version-57",children:[],level:3},{value:"Getting <code>cannot find symbol</code> error for <code>javax.annotation.Generated</code>",id:"getting-cannot-find-symbol-error-for-javaxannotationgenerated",children:[],level:3},{value:"<code>:metadata-models:generateDataTemplate</code> task fails with <code>java.nio.file.InvalidPathException: Illegal char &lt;:&gt; at index XX</code> or <code>Caused by: java.lang.IllegalArgumentException: &#39;other&#39; has different root</code> error",id:"metadata-modelsgeneratedatatemplate-task-fails-with-javaniofileinvalidpathexception-illegal-char--at-index-xx-or-caused-by-javalangillegalargumentexception-other-has-different-root-error",children:[],level:3},{value:"Various errors related to <code>generateDataTemplate</code> or other <code>generate</code> tasks",id:"various-errors-related-to-generatedatatemplate-or-other-generate-tasks",children:[],level:3},{value:"<code>Execution failed for task &#39;:metadata-service:restli-servlet-impl:checkRestModel&#39;</code>",id:"execution-failed-for-task-metadata-servicerestli-servlet-implcheckrestmodel",children:[],level:3},{value:"<code>java.io.IOException: No space left on device</code>",id:"javaioioexception-no-space-left-on-device",children:[],level:3}],level:2}],p={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"datahub-developers-guide"},"DataHub Developer's Guide"),(0,o.kt)("h2",{id:"building-the-project"},"Building the Project"),(0,o.kt)("p",null,"Fork and clone the repository if haven't done so already"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/{username}/datahub.git\n")),(0,o.kt)("p",null,"Change into the repository's root directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd datahub\n")),(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/gradle_wrapper.html"},"gradle wrapper")," to build the project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./gradlew build\n")),(0,o.kt)("h2",{id:"ide-support"},"IDE Support"),(0,o.kt)("p",null,"The recommended IDE for DataHub development is ",(0,o.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/idea/"},"IntelliJ IDEA"),".\nYou can run the following command to generate or update the IntelliJ project file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./gradlew idea\n")),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub.ipr")," in IntelliJ to start developing!"),(0,o.kt)("p",null,"For consistency please import and auto format the code using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/gradle/idea/LinkedIn%20Style.xml"},"LinkedIn IntelliJ Java style"),"."),(0,o.kt)("h2",{id:"common-build-issues"},"Common Build Issues"),(0,o.kt)("h3",{id:"getting-unsupported-class-file-major-version-57"},"Getting ",(0,o.kt)("inlineCode",{parentName:"h3"},"Unsupported class file major version 57")),(0,o.kt)("p",null,"You're probably using a Java version that's too new for gradle. Run the following command to check your Java version"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"java --version\n")),(0,o.kt)("p",null,"While it may be possible to build and run DataHub using newer versions of Java, we currently only support ",(0,o.kt)("a",{parentName:"p",href:"https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html"},"Java 1.8")," (aka Java 8). Plan for Java 11 migration is being discussed in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/issues/1699"},"this issue"),"."),(0,o.kt)("h3",{id:"getting-cannot-find-symbol-error-for-javaxannotationgenerated"},"Getting ",(0,o.kt)("inlineCode",{parentName:"h3"},"cannot find symbol")," error for ",(0,o.kt)("inlineCode",{parentName:"h3"},"javax.annotation.Generated")),(0,o.kt)("p",null,"Similar to the previous issue, please use Java 1.8 to build the project.\nYou can install multiple version of Java on a single machine and switch between them using the ",(0,o.kt)("inlineCode",{parentName:"p"},"JAVA_HOME")," environment variable. See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/cd/E21454_01/html/821-2531/inst_jdk_javahome_t.html"},"this document")," for more details."),(0,o.kt)("h3",{id:"metadata-modelsgeneratedatatemplate-task-fails-with-javaniofileinvalidpathexception-illegal-char--at-index-xx-or-caused-by-javalangillegalargumentexception-other-has-different-root-error"},(0,o.kt)("inlineCode",{parentName:"h3"},":metadata-models:generateDataTemplate")," task fails with ",(0,o.kt)("inlineCode",{parentName:"h3"},"java.nio.file.InvalidPathException: Illegal char <:> at index XX")," or ",(0,o.kt)("inlineCode",{parentName:"h3"},"Caused by: java.lang.IllegalArgumentException: 'other' has different root")," error"),(0,o.kt)("p",null,"This is a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linkedin/rest.li/issues/287"},"known issue")," when building the project on Windows due a bug in the Pegasus plugin. Please build on a Mac or Linux instead. "),(0,o.kt)("h3",{id:"various-errors-related-to-generatedatatemplate-or-other-generate-tasks"},"Various errors related to ",(0,o.kt)("inlineCode",{parentName:"h3"},"generateDataTemplate")," or other ",(0,o.kt)("inlineCode",{parentName:"h3"},"generate")," tasks"),(0,o.kt)("p",null,"As we generate quite a few files from the models, it is possible that old generated files may conflict with new model changes. When this happens, a simple ",(0,o.kt)("inlineCode",{parentName:"p"},"./gradlew clean")," should reosolve the issue. "),(0,o.kt)("h3",{id:"execution-failed-for-task-metadata-servicerestli-servlet-implcheckrestmodel"},(0,o.kt)("inlineCode",{parentName:"h3"},"Execution failed for task ':metadata-service:restli-servlet-impl:checkRestModel'")),(0,o.kt)("p",null,"This generally means that an ",(0,o.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/modeling/compatibility_check"},"incompatible change")," was introduced to the rest.li API in GMS. You'll need to rebuild the snapshots/IDL by running the following command once"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./gradlew :metadata-service:restli-servlet-impl:build -Prest.model.compatibility=ignore\n")),(0,o.kt)("h3",{id:"javaioioexception-no-space-left-on-device"},(0,o.kt)("inlineCode",{parentName:"h3"},"java.io.IOException: No space left on device")),(0,o.kt)("p",null,"This means you're running out of space on your disk to build. Please free up some space or try a different disk."))}u.isMDXComponent=!0}}]);