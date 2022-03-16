const defaultHeader = `/* eslint-disable */

/******************************************************************************************
* This code was automatically generated by json-to-js-const.
* Do not edit this file manually, your changes will be overwritten.
******************************************************************************************/

`;

function getTail(val: unknown, dts: boolean) {
  if (dts && Array.isArray(val)) {
    return `: ${typeof val[0]}[]`;
  }
  return ` = ${JSON.stringify(val)}`;
}

export default function convert(obj: Record<string, unknown>, dts?: boolean): string {
  let result = defaultHeader;
  for (const [key, val] of Object.entries(obj)) {
    result += `export${dts ? ' declare' : ''} const ${key}${getTail(val, !!dts)};\n`;
  }
  return result;
}
