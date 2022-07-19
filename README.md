# Unity Catalog

## Contents

- [Overview](#overview)
- [Data sources](#data-sources)
  - [User entry](#data-sources--user)
  - [The Library of Congress catalog](#data-sources--loc)
  - [Library Hub Discover](#data-sources--lhd)
  - [Harvard Library: LibraryCloud](#data-sources--librarycloud)
- [Functionality](#functionality)
  - [Scope and possible extension](#functionality--scope)
  - [Privilege control](#functionality--privilege)
- [Application infrastructure](#app-structure)
  - [Components](#app-structure--components)
  - [Organization of class content](#app-structure--classes)
  - [Notes on class documentation](#app-structure--classdocumentation)
- [Operations infrastructure](#operations)
  - [Deployment](#operations--deployment)
- [Appendices](#appendices)
  - [A. Regarding The MODS schema](#appendices--a)
  - [B. Access to the Library of Congress API](#appendices--b)
  - [C. Other resources](#appendices--c)

<hr />

> This project is very much a work in progress. Many elements are currently
> entirely missing, partially-complete, or present only as stubs. At the
> moment it remains inert while functionality, user interfaces, and a great
> deal of internal infrastructural wiring accrete throughout the codebase.

<a name="#overview"></a>

## Overview

Unity Catalog is a catalog intended to store and display bibliographic
records roughly in the fashion of a union catalog. That is, records may be
drawn from a collection of sources. The system could be used to maintain
metadata for works of interest and to track ownership of such material. It
is implemented as a Web application.

Individual works are known internally in the code as an "item" (or, as a
technical reference to their instantiation as a class, an "`Item`").

At the moment this system is intended for personal use by its developer. See
[Functionality > Scope](#functionality--scope) below for further commentary.

<a name="#data-sources"></a>

## Data sources

Item data is typically drawn from the bibliographic records of an external
source
(see [ItemSourceInterface](./shared/interfaces/ItemSourceInterface.ts)).

In addition to the programmatic importing of items via configured sources,
users may define items manually. Not all works may be available in known
sources and ad-hoc additions provide necessary flexibility.

Item sources currently defined:

- [User entry](#data-sources--user)
- [The Library of Congress catalog](#data-sources--loc)
- [Library Hub Discover](#data-sources--lhd)
- [Harvard Library: LibraryCloud](#data-sources--librarycloud)

All are open-access. See descriptions below. (Quotations are accurate as of
July 2022.)

A potential addition might be [OCLC](https://www.oclc.org/)'s
[WorldCat](https://www.worldcat.org/) metacatalog, which does offer a
(closed-access)
[API](https://www.oclc.org/developer/api/oclc-apis/worldcat-search-api.en.html).

<a name="#data-sources--user"></a>

### User entry

Available data sources may not have a record for all works of interest.
Users may therefore add and edit items manually.

<a name="#data-sources--loc"></a>

### The Library of Congress catalog

According to the [LoC](https://www.loc.gov/about/general-information/):

> Today's Library of Congress is an unparalleled world resource. The
> collection of more than 173 million items includes more than 51 million
> cataloged books and other print materials in 470 languages; more than 75
> million manuscripts; the largest rare book collection in North America; and
> the world's largest collection of legal materials, films, maps, sheet music
> and sound recordings.

Item data is obtained as an XML record via the Library's
[API](https://www.loc.gov/apis/).

The LoC also maintains the extensive
[Linked Data Service](https://id.loc.gov/) for metadata ontologies.

This source may be referred to as "LoC" in this application's code and
comments.

<a name="#data-sources--lhd"></a>

### Library Hub Discover

According to the
[Library Hub Discover site](https://discover.libraryhub.jisc.ac.uk/):

> Welcome to Library Hub Discover, giving you access to details of materials
> held in many UK national, academic and specialist libraries.
>
> Library Hub Discover currently contains 49,087,886 records created from
> 136,186,416 records contributed by 184 institutions.

This service is maintained by
[Jisc](https://www.jisc.ac.uk/about/who-we-are-and-what-we-do):

> We are the UK [_sic_] higher, further education and skills sectors'
> not-for-profit organisation for digital services and solutions.

And in case you're wondering:

> We have been known as Jisc since 2012 but, historically, JISC stood for
> Joint Information Systems Committee.

<a name="#data-sources--librarycloud"></a>

### Harvard Library: LibraryCloud

LibraryCloud is a project of the library of Harvard University. Its
[wiki](https://wiki.harvard.edu/confluence/display/LibraryStaffDoc/LibraryCloud)
states:

> Harvard LibraryCloud is a metadata hub that provides granular, open access
> to a large aggregation of Harvard library bibliographic metadata. The
> public LibraryCloud Item API supports searching LibraryCloud and obtaining
> results in a normalized MODS or Dublin Core format. LibraryCloud contains
> records from Harvard's Alma ILS (over 16M bib records), JSTOR Forum (6.7M
> image records), and ArchivesSpace finding aids (2.6M finding aid
> components). Records for materials in Harvard's Digital Repository Service
> (DRS) are enriched with a subset of administrative metadata from that
> repository. Some records are also marked for inclusion in curated sets
> accessible via OAI-PMH.

Harvard Library maintains various
[APIs](https://library.harvard.edu/services-tools/harvard-library-apis-datasets).

<a name="#functionality"></a>

## Functionality

<a name="#functionality--scope"></a>

### Scope and possible extension

This application is not intended to supplant any particular data source, with
very high fidelity replicate any given source's data schema, embody a
complete ontological system for identities or bibliographic classification,
or even to replicate the entirety of a source's bibliographic record for any
given work. It manages a practical subset of such data, and one which is to
a certain extent influenced by the nomenclature and structure of the LoC
data. (The item content is not entirely unlike a
[MODS "Lite"](https://www.loc.gov/standards/mods/v3/mods-userguide-lite.html)
or Dublin Core-style set.)

The more limited scope of target content is a matter of personal (and, it may
be argued, not particularly idiosyncratic) selection and judgement. That is
not to say, however, that it could not be enhanced to include additional
information or more thoroughly connect disparate identities. In fact, any
omission of identifiers in the current implementation may be due simply to
lack of access to the proper identifiers.

Unity Catalog is designed to query, store, and present bibliographic
information of texts of various sorts. It does not currently accommodate the
many other types of materials managed by libraries or archives (maps, sound
recordings, motion pictures, etc.).

In both matters above, the essential schema and functionality could be
extended and broadened as desired.

As noted in the overview, the application is browser-based; command-line
access could be developed for use in local installations.

<a name="#functionality--privilege"></a>

### Privilege control

A complete application would provide a full privilege-control system
permitting management of users, user groups, composable functional "roles" to
be assigned to user groups, and possibly an assortment of specific
permissions assigned to those roles. For the more limited purposes of this
application, right now only users (see
[`UserInterface`](./shared/interfaces/UserInterface.ts) are being defined and
no authentication or authorization functionality is expected to be
implemented.

<a name="#app-structure"></a>

## Application infrastructure

The application is designed to be as modular as is practical, which means,
for example, that client and server possess their own package systems. The
top-level /shared directory does supply interfaces for both areas though the
client can and does maintain functionally-specific interfaces as well.

<a name="#app-structure--components"></a>

### Components

The primary application stack

- [Angular](https://angular.io/) (client-side framework)
- [Bootstrap](https://getbootstrap.com/) (UI framework)
- [MySQL](https://mysql.com/) or [MariaDB](https://mariadb.com/) (database)
- [Node.js](https://nodejs.org/), [Express](https://expressjs.com/)
  (server-side framework)
- [TypeORM](https://typeorm.io/) (database ORM)
- [TypeScript](https://typescriptlang.org/) (programming language behind
  client and server)

See also the reference list of [packages](./documentation/packages.md).

<a name="#app-structure--classes"></a>

### Organization of class content

Classes are defined in TypeScript [interfaces](./shared/interfaces) and in
[database entity specifications](./server/database/entity). In each case the
filesystem is organized categorically.

The top-level `item` directory contains files which are applicable to all
`Item` records (irrespective of data source&emdash;e.g., ItemSource) or which
could apply to multiple sources (e.g., the specification for ISBNs or for LCC
classes, the latter of which are, while closely associated with the Library
of Congress, used by many other libraries).

<a name="#app-structure--classdocumentation"></a>

### Notes on class documentation

TypeScript [interfaces](./shared/interfaces) exist at the top level of the
project in order to serve both client and server code. They function as the
primary conceptual definitions for database entities; as such, commentary and
explanations are placed in the interface files, not the
[entity specifications](./src/database/entity).

Interface files may therefore include essential specifications concerning
individual elements in source data
([ItemLocInterface.ts](./shared/interfaces/ItemLocInterface.ts) is a
significant example) in addition to broader documentation on design choices
and data schema (e.g., in
[SubjectInterfaces.ts](./shared/interfaces/SubjectInterfaces)).

<a name="#operations"></a>

## Operations infrastructure

<a name="#operations--deployment"></a>

### Deployment

The application has a rudimentary deployment method. Future versions could
involve containerization and/or integration with an external pipeline. As
this is currently intended for personal use only, however, such developments
are not necessarily at the highest level of priority.

<a name="#appendices"></a>

## Appendices

<a name="#appendices--a"></a>

### A. Regarding the MODS schema

#### Version comparison: MODS XML vs. JSON

The Library of Congress and other institutions have long offered APIs which
return detailed XML records using the
[Metadata Object Description Schema](https://www.loc.gov/standards/mods/)
(MODS). The LoC, at least, has also (relatively recently) begun offering
[JSON and YAML versions](https://www.loc.gov/apis/json-and-yaml/).

This application uses the MODS XML version, however, as its results appear to
be generally superior in terms of semantic organization and completeness.

For example, we receive the following authority record from the LoC for the
author of a particular work
([full result](https://lccn.loc.gov/80000995/mods)):

```xml
<name type="personal" usage="primary">
  <namePart>Beckett, Samuel</namePart>
  <namePart type="date">1906-1989</namePart>
</name>
```

Whereas the equivalent JSON is a string without semantic markup
([full result](https://www.loc.gov/item/80000995/?fo=json&at=item)):

```
creator: "Beckett, Samuel, 1906-1989.",
```

MODS provides a finer degree of categorization and markup. And while
results&emdash;at the LoC or elsewhere&emdash;are not always perfect or
consistent and can require additional parsing and cleanup, dependence upon
the JSON would simply force a client application to do a more sophisticated
initial pass.

We may also mention cases in which useful authority records are missing from
JSON entirely. One [XML result](https://lccn.loc.gov/95033539/mods) contains
the following for authorship tags:

```xml
<name type="personal">
  <namePart>Bergin, Thomas J.</namePart>
</name>
<name type="personal">
  <namePart>Gibson, Richard G.</namePart>
</name>
<name type="conference">
  <namePart>History of Programming Languages Conference (2nd : 1993 : Cambridge, Mass.)</namePart>
</name>
```

The [JSON result](https://www.loc.gov/item/95033539/?fo=json&at=item)
contains no `creator` or `contributor_names` keys at all and the names above
do not appear in the data.

Differences exist elsewhere. For example, the MODS subjects returned for
[LCCN 97112683](https://lccn.loc.gov/97112683/mods) group several header
identifiers ("topic", "geographic", and "temporal") within separate subject
tags; in part:

```xml
<subject authority="lcsh">
  <topic>Architecture</topic>
  <geographic>Japan</geographic>
  <geographic>Tokyo</geographic>
  <topic>History</topic>
  <temporal>20th century</temporal>
</subject>
```

The [JSON for the same work](https://www.loc.gov/item/97112683/?fo=json&at=item)
lists some of those terms without wrapped elements and merely concatenates
them into a single string. We'd like to benefit from the additional
structure and markup available via the XML.

(See also [SubjectInterface.ts](./shared/interfaces/SubjectInterface.ts) for
reference samples of subjects.)

Finally, JSON's popularity has&emdash;not without some
justification&emdash;increased significantly in recent years; XML has also
lost much favor amongst API developers. The concern that some sources will
eventually discontinue their MODS APIs without enriching the data provided by
others is perhaps not unwarranted.

<a name="#appendices--b"></a>

### B. Access to the Library of Congress API

The Library of Congress [advises](https://www.loc.gov/apis/json-and-yaml/)
thusly concerning request etiquette:

> The API is accessible to the public with no API key or authentication
> required, however, rate limiting is strongly encouraged. Requests that
> exceed the rate which loc.gov can successfully accommodate will be blocked
> to prevent a denial of service.

As of July 2022, the burst policy for "item and resource endpoints" is "40
requests per 10 seconds, Block for 5 minutes". The above advice appears in
the context of the JSON and YAML API; it's not clear if those limits are
applied to the XML requests as well (though earlier trials suggested that
they do not).

For the JSON and YAML versions, see also additional
[Library documentation](https://libraryofcongress.github.io/data-exploration/).

<a name="#appendices--c"></a>

### C. Other resources

Sites of potential interest to the project. Some may have been mentioned in
the main text above.

#### Schema and metadata references

- [Linked Data Service](https://id.loc.gov/)
- [MODS User Guidelines Version 3](https://www.loc.gov/standards/mods/v3/mods-userguide.html)
  - [Detailed Description of MODS Elements](https://www.loc.gov/standards/mods/v3/mods-userguide-elements.html)

#### Other sites of possible relevance

- [Open Archives Initiative](https://www.openarchives.org/)
- [WorldCat](https://www.worldcat.org/)

<div style="margin-top: 3rem;">
  <small>Copyright (C) 2022 <span style="margin-left:1rem;">D29F4</span></small>
</div>
