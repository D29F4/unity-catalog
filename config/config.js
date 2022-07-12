/*
 *  Application configuration (public)
 */
module.exports = {

  //  Data sources for items
  //
  itemSources:
  {
    //  Library of Congress
    //
    loc:
    {
      //  Base URI for MODS queries
      //  (<uri>?version=1.1&operation=searchRetrieve&...)
      uri_query_0: 'http://lx2.loc.gov:210/lcdb',

      //  URI parts for MODS record given LCCN
      //  (<uri0><LCCN><uri1>)
      uri_record_0: 'https://lccn.loc.gov/',
      uri_record_1: '/mods',
    },


    //  Jisc: Library Hub Discover
    //
    libraryHub:
    {
      //  Base URI for MODS queries
      uri_query_0: 'https://discover.libraryhub.jisc.ac.uk/sru-api',
    },


    //  Harvard Library: LibraryCloud
    //
    libraryCloud:
    {
      //  Base URI for MODS queries
      uri_query_0: 'https://api.lib.harvard.edu/v2/items',
    },
  },
};


/* loc

https://www.loc.gov/?fo=json
?query1=foo&query2=bar
https://www.loc.gov/item/2014717546/?fo=json
# Ignore attributes oter than `item`
https://www.loc.gov/item/97112683/?fo=json&at=item

XML
http://lx2.loc.gov:210/lcdb
-d version=1.1
-d operation=searchRetrieve
-d maximumRecords=1
-d recordSchema=mods
-d query=bath.' . $term->[0] . '="^' . $term->[1] . '$"';

http://lx2.loc.gov:210/lcdb?version=1.1&operation=searchRetrieve&maximumRecords=1&recordSchema=mods
&query=bath.[[searchkey]]="^[[searchvalue]]$"

XML: https://lccn.loc.gov/97112683/mods
*/


/*
Jisc

https://discover.libraryhub.jisc.ac.uk/
https://discover.libraryhub.jisc.ac.uk/support/api/

https://discover.libraryhub.jisc.ac.uk/sru-api?operation=searchRetrieve&version=1.1&maximumRecords=1&query=bath.isbn=%229780822367901%22
*/


/*
Harvard Library: LibraryCloud

https://library.harvard.edu/
https://library.harvard.edu/services-tools/harvard-library-apis-datasets

https://wiki.harvard.edu/confluence/display/LibraryStaffDoc/LibraryCloud

https://wiki.harvard.edu/confluence/display/LibraryStaffDoc/LibraryCloud+APIs

https://api.lib.harvard.edu/v2/items?identifier=9780385352567
*/
