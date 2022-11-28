function validatePIN(pin) {
  if (
    /0-9/.test(pin.toString()) &&
    (pin.toString().length === 4 || pin.toString().length === 6)
  ) {
    return true
  } else return false
}
