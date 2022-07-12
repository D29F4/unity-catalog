import AbstractItemInterface from '^interface/item/AbstractItem';
import LocationInterface from '^interface/item/Location';
import PublisherInterface from '^interface/item/Publisher';

/**
 *  The bibliographic record for a work.
 *
 *  XML elements in comments refer to the corresponding MODS structure.
 */
export default interface ItemInterface extends AbstractItemInterface
{
  // id: number;

  /**
   *  The Library of Congress call number.
   *    <identifier type="lccn">
   */
  lccn: string;

  /**
   *  The OCLC (Online Computer Library Center) identifier.
   *    <identifier type="oclc">
   */
  oclc: string;

  /** The item's LCC class. */
  lccClass: LccClassInterface;

  /** The item's LCC subclass. */
  lccSubclass: LccSubclassInterface;

  /**
   *  The Library of Congress call code.
   *    <classification authority="lcc">
   */
  lcc: string;

  /**
   *  The Dewey Decimal call code.
   *    <classification authority="ddc">
   */
  ddc: string;

  /**
   *  The title's leading article, et cetera.
   *    <titleInfo><nonSort>
   */
  nonsort: string;

  /**
   *    <titleInfo><title>
   */
  title: string;

  /**
   *    <titleInfo><subTitle>
   */
  subtitle: string;

  /**
   *    <titleInfo type="uniform"><title>
   */
  titleUniform: string;

  /**
   *  An alternate title.
   *    <titleInfo type="alternative"><title>
   *
   *  LoC records may contain multiple such elements.  For our purposes they
   *  are collected into a single field (rendered as a JSON array).
   */
  titleAlt: JSON;

  /**
   *    <note type="statement of responsibility">
   */
  statementOfResponsibility: string;

  /**
   *    <originInfo><dateIssued>
   */
  dateIssuedFull: string;

  /**
   *  The year only.
   *    <originInfo><dateIssued encoding="marc"> (string-extraction may be necessary)
   */
  dateIssued: number;

  /**
   *    <originInfo><edition>
   */
  edition: string

  /*
   *    <physicalDescription><form>
  form: string;
   */

  /**
   *  Page numbers, et cetera.
   *    <physicalDescription><extent>
   */
  extent: string;

  /** The item's publisher. */
  publisher: PublisherInterface;

  /** The location of the item's publisher or publication. */
  location: LocationInterface;
}
