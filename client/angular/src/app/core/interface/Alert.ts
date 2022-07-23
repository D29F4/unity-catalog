import { AlertTypeEnum } from '../../../../../../shared/interface/general/AlertTypeEnum';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


/**
 *  Characterization of an alert.
 */
export interface AlertTypeInterface {

  /** The severity of the alert. */
  level: AlertTypeEnum;

  /** Text to be displayed for accessibility. */
  altText: string;
}


/**
 *  An alert.
 */
export interface AlertInterface {

  /** The AlertType of the alert. */
  alertType: AlertTypeInterface;

  /** Whether or not the alert is dismissable. */
  dismissable: boolean;

  /** The displayed content or message. */
  content: string;
}
