import FormFail from './FormFail/FormFail';
import FormSuccess from './FormSuccess/FormSuccess';
import * as modalTypes from './constants';

export default {
  [modalTypes.MODAL_BASKET_SUCCESS]: FormSuccess,
  [modalTypes.MODAL_BASKET_FAIL]: FormFail,
};
