export const INTERNAL_SERVER_ERROR = {
  code: 500,
  message: 'Internal Server Error. Please try again later.',
};

export const INVALID_JSON_ERROR = {
  code: 400,
  message: 'Invalid JSON Object.',
};

export const DEVICE_NOT_FOUND_ERROR = {
  code: 404,
  message: 'Device not found',
};

export const TYPE_NOT_FOUND_ERROR = {
  code: 404,
  message: 'Device type not found',
};

export const INCOMPLETE_REQUEST_BODY_ERROR = {
  code: 400,
  message: 'Required keys missing from body or are invalid',
};

export const FORMULA_EVALUATE_ERROR = {
  code: 400,
  message: 'Failed to evaluate formula, please recheck and try again.',
  note: 'start your variable names with _&',
};

export const UNREGISTERED_PARAMS_REF = {
  code: 400,
  message: 'you have referenced unregistered params in the formula',
  note: 'start your variable names with _&',
};

export const FAILED_TO_CALCULATE = {
  code: 400,
  message: 'failed to calculate values for calculative params',
  note: 'make sure you include all referenced values in the request body',
};

export const UNREFERENCED_PARAM = {
  code: 400,
  message:
    'you are trying to use a calculative parameter without providing its corresponding parameters',
};

export const VALIDATION_FAILED_ERROR = {code: 400, message: 'ValidationFailed'};
