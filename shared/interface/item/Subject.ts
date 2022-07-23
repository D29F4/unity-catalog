import { ItemInterface } from './Item';
import { SubjectSubdivisionMapInterface } from './SubjectSubdivisionMap';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 *  An authority record which represents a "subject" or category associated
 *  with an `Item`.
 *
 *  Documentation on the LoC site could be more straightforward about the
 *  official nomenclature for this content.  "Subject", "heading",
 *  "subdivision", and "subfield" are used to refer to various components in
 *  general, Linked Data Services, and MARC-related documentation and it's
 *  not entirely clear how to map them onto the XML.  Maybe a degree in
 *  library science would help here.
 *
 *  <subject> elements in the XML typically look something like this:
 *
 *    <subject authority="lcsh">
 *      <topic>Celts</topic>
 *      <geographic>Great Britain</geographic>
 *      <genre>Legends</genre>
 *    </subject>
 *
 *  For the purposes of this application the nomenclature is as follows:
 *
 *    * <subject>                 = "subject"
 *    * authority                 = "attribute" (a very generic name)
 *    * lcsh                      = the attribute's value
 *    * <topic>|<geographic>|etc. = "subfield"
 *    * Celts|Great Britain|etc.  = "heading"
 *    * <topic>Celts</topic>      = "subdivision"
 *
 *  Those choices could be misguided; it would be useful to know the
 *  appropriate terminology if so, even though this application may be
 *  functionally sound either way.  Matters of classification are of course
 *  of great general philosophical and practical interest within library
 *  science; but the particular instantiation -- certainly at least as far as
 *  nomenclature is concerned -- employed by (for example) the LoC is to some
 *  extent arbitrary.  So we shouldn't feel too bad about it.
 *
 *  Note also that a sampling of over 1700 MODS XML records suggests that
 *  "authority" is the only attribute present on `<subject>` elements.
 *  Making that assumption in this schema for all subjects is reasonable and
 *  pragmatic given the intended scope of this application.  In fact, for
 *  reasons of scope and simplicity, this application takes the
 *  possibly-uncharacteristic step of ignoring the "authority" attribute on
 *  all elements altogether.
 *
 *  Illustrative examples from the LoC are given below for reference.
 *
 *  ............................................................................
 *
 *  _The Hidden Order: Tokyo through the Twentieth Century_.
 *  Ashihara, Yoshinobu.  LCCN: 97112683.
 *
 *    <subject>
 *      <geographicCode authority="marcgac">a-ja---</geographicCode>
 *    </subject>
 *
 *    <subject authority="lcsh">
 *      <topic>Architecture</topic>
 *      <geographic>Japan</geographic>
 *      <geographic>Tokyo</geographic>
 *      <topic>History</topic>
 *      <temporal>20th century</temporal>
 *    </subject>
 *
 *    <subject authority="lcsh">
 *      <topic>Architecture and society</topic>
 *      <geographic>Japan</geographic>
 *      <geographic>Tokyo</geographic>
 *    </subject>
 *
 *    <subject authority="lcsh">
 *      <geographic>Tokyo (Japan)</geographic>
 *      <topic>Buildings, structures, etc</topic>
 *    </subject>
 *
 *    <subject authority="lcsh">
 *      <geographic>Tokyo (Japan)</geographic>
 *      <topic>Buildings, structures, etc</topic>
 *    </subject>
 *
 *  Note the variety and repetition of internal tags.  This also includes a
 *  geographicCode tag of the "marcgac" variety.
 *    Note also the repetition of the entire final subject tag.
 *
 *  ............................................................................
 *
 *  _Mathematics and the Real World: The Remarkable Role of Evolution in the
 *  Making of Mathematics_.  Artstein, Zvi.  LCCN: 2014013908.
 *
 *    <subject authority="lcsh">
 *      <topic>Mathematics</topic>
 *      <topic>Philosophy</topic>
 *    </subject>
 *
 *    <subject authority="bisacsh">
 *      <topic>MATHEMATICS / History &amp; Philosophy</topic>
 *    </subject>
 *
 *    <subject authority="bisacsh">
 *      <topic>SCIENCE / Life Sciences / Evolution</topic>
 *    </subject>
 *
 *    <subject authority="bisacsh">
 *      <topic>MATHEMATICS / General</topic>
 *    </subject>
 *
 *  Note the appearance of the "bisacsh" authority.
 *
 *  ............................................................................
 *
 *  _Oscar Wilde_.  Ellmann, Richard.  LCCN: 87045354.
 *
 *    <subject authority="lcsh">
 *      <name type="personal">
 *        <namePart>Wilde, Oscar</namePart>
 *        <namePart type="date">1854-1900</namePart>
 *      </name>
 *    </subject>
 *
 *    <subject authority="lcsh">
 *      <topic>Authors, Irish</topic>
 *      <temporal>19th century</temporal>
 *      <topic>Biography</topic>
 *    </subject>
 *
 *  Note the presence of an `Entity`-style record as a subject in the first
 *  entry.  (Note also that such records, here and at the top level when
 *  indicating authorship, need not contain "date"-type <namePart>s.)
 */
export interface SubjectInterface {
  id: number;

  /** The (ordered) subdivisions of this subject. */
  subjectSubdivisionMap: SubjectSubdivisionMapInterface[];

  /** The `Item` to which this subject belongs. */
  item: ItemInterface;

  /** The sort order of the subject within the `Item`. */
  order: number;
}
