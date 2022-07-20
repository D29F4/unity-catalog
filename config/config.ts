/*
 *  Application configuration (public)
 */
export default {
  //  Data sources for items
  //
  itemSources: {
    //  Library of Congress
    //
    loc: {
      //  Base URI for MODS queries
      //  (<uri>?version=1.1&operation=searchRetrieve&...)
      uri_query: [
        'http://lx2.loc.gov:210/lcdb',
      ],

      //  URI parts for MODS record given LCCN
      //  (<uri0><LCCN><uri1>)
      uri_record: [
        'https://lccn.loc.gov/',
        '/mods',
      ],
    },

    //  Jisc: Library Hub Discover
    //
    libraryHub: {
      //  Base URI for MODS queries
      uri_query: [
        'https://discover.libraryhub.jisc.ac.uk/sru-api',
      ],
    },

    //  Harvard Library: LibraryCloud
    //
    libraryCloud: {
      //  Base URI for MODS queries
      uri_query: [
        'https://api.lib.harvard.edu/v2/items',
      ],
    },
  },
};
