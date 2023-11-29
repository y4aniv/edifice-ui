export class StringUtils {
  static isValidURL(str: string): boolean {
    const isURLExpression =
      // eslint-disable-next-line no-useless-escape
      /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
    return isURLExpression.test(str);
  }
}
