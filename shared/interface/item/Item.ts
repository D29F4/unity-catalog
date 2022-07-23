import { IsbnInterface } from './Isbn';
import { ItemResourceTypeInterface } from './ItemResourceType';
import { ItemSourceInterface } from './ItemSource';
import { LccClassInterface } from './LccClass';
import { LccSubclassInterface } from './LccSubclass';
import { LocationInterface } from './Location';
import { PublisherInterface } from './Publisher';
import { UserInterface } from '../access/User';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 *  The bibliographic record for a work.
 *
 *  XML elements in comments refer to the corresponding MODS structure.
 */
export interface ItemInterface {
  id: number;

  /** The resource type of the item. */
  resourceType: ItemResourceTypeInterface;

  /** The source of the item data. */
  source: ItemSourceInterface;

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
  //  lccClass: LccClassInterface;

  /** The item's LCC subclass. */
  //  lccSubclass: LccSubclassInterface;

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
  titleAlt: string;

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
  edition: string;

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
  //  publisher: PublisherInterface;

  /** The location of the item's publisher or publication. */
  //  location: LocationInterface;

  /** One or more ISBNs associated with the item. */
  isbn: IsbnInterface[];

  /** The datetime of the record's creation. */
  createDttm: Date;

  /** The User who created the record. */
  createUser: UserInterface;

  /** The datetime of the record's last update. */
  updateDttm: Date;

  /** The User who made the last update. */
  updateUser: UserInterface;
}
