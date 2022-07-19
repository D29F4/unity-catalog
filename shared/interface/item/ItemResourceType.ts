/**
 *  Identifies the "resource type" of an `Item`.  Specifically, this should
 *  be one of the values available to the MODS <typeOfResource> element.
 *
 *  "text" and the "sound recording*" options are likely to be the main
 *  elements of interest.
 *
 *  Note that there were relevant changes in MODS 3.7
 *  (https://www.loc.gov/standards/mods/changes-3-7.html):
 *
 *    Remove controlled-list restriction from typeOfResource so that any
 *    value may be supplied (addition of authority, authorityURI, valueURI
 *    and xml:lang to typeOfResource element)
 */
export interface ItemResourceTypeInterface {
  id: number;

  /** The unique identifier. */
  uid: string;
}
