export const validateHex = colours => {
  const regExpForHex = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i
  // Whitespace and commas at beginning and end
  const trailingCommaRegExp = /(^\s*,)|(,\s*$)/g

  if (trailingCommaRegExp.test(colours)) {
    return 'Remove any leading or trailing commas or whitespaces'
  }

  const invalidHexStrings = colours.split(',')
    .map(colour => colour.trim())
    .filter(colour => regExpForHex.test(colour) === false)

  if (invalidHexStrings.length === 1) {
    return `This hex is invalid: ${invalidHexStrings}`
  }

  if (invalidHexStrings.length > 1) {
    return `These hexes are invalid: ${invalidHexStrings}`
  }

  return null
}
