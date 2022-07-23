import { AlertInterface, AlertTypeInterface } from '../interface/Alert';
import { AlertTypeEnum } from '../../../../../../shared/interface/general/AlertTypeEnum';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


/**
 *  An alert type.
 */
export class AlertType implements AlertTypeInterface {

  constructor(
    public level: AlertTypeEnum,
    public altText: string
  ) {}
}


/**
 *  An alert.
 */
export class Alert implements AlertInterface {

  constructor(
    public alertType: AlertType,
    public dismissable: boolean = true,
    public content: string
    //public preserveAfterRouteChange: boolean = false
  ) {}
}